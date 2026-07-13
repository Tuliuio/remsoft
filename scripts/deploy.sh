#!/usr/bin/env bash
#
# Publica o site no branch `deploy` (site já buildado na raiz),
# que o painel de GitHub do cPanel copia para public_html.
#
# Uso:  npm run deploy
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "▶ Buildando export estático..."
npm run build

WORKTREE="$(mktemp -d)"
cleanup() { git worktree remove --force "$WORKTREE" 2>/dev/null || true; }
trap cleanup EXIT

echo "▶ Preparando branch deploy..."
git fetch origin deploy --quiet 2>/dev/null || true
if git show-ref --verify --quiet refs/remotes/origin/deploy; then
  git worktree add -B deploy "$WORKTREE" origin/deploy
else
  git worktree add -B deploy "$WORKTREE"
fi

echo "▶ Sincronizando arquivos do out/..."
# Limpa tudo exceto o .git do worktree, depois copia o build.
find "$WORKTREE" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R out/. "$WORKTREE/"
# Impede que o Apache/GitHub Pages ignore pastas _next.
touch "$WORKTREE/.nojekyll"

cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  echo "✔ Nada mudou desde o último deploy."
else
  git commit -m "Deploy build $(date +%Y-%m-%d\ %H:%M)"
  git push -f origin deploy
  echo "✔ Branch deploy atualizado e enviado."
fi

echo "✅ Pronto. Agora é só clicar em Implantar no painel (branch: deploy)."
