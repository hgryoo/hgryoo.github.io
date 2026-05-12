#!/usr/bin/env bash
# One-time setup for hgryoo.dev:
#  - check prerequisites (node 20+, npm)
#  - npm install
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

err=0

check_cmd() {
  local cmd="$1" hint="$2"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "MISSING: $cmd"
    echo "  -> $hint"
    err=1
  else
    echo "OK     : $cmd ($("$cmd" --version 2>/dev/null | head -1))"
  fi
}

echo "Checking prerequisites..."
check_cmd node "install Node.js >=20 (recommended: nvm install 22)"
check_cmd npm  "ships with Node.js"

if command -v node >/dev/null 2>&1; then
  node_major="$(node -p 'process.versions.node.split(".")[0]')"
  if (( node_major < 20 )); then
    echo "MISSING: Node.js >=20 (current: $(node -v))"
    err=1
  fi
fi

if (( err )); then
  echo
  echo "Install the missing prerequisites above and re-run ./install.sh"
  exit 1
fi

if [ ! -d node_modules ]; then
  echo
  echo "→ npm install"
  npm install
fi

echo
echo "Done. Run:  npm run dev   # http://localhost:9997"
