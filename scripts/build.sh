#!/usr/bin/env bash

set -euo pipefail

BABEL=${BABEL:-"$(npm bin)/babel"}
EXTRA_NODE_ARGS=${EXTRA_NODE_ARGS:-""}
NODE=${NODE:-"${npm_node_execpath}"}

eval "${NODE}" "${EXTRA_NODE_ARGS[@]}" "${BABEL}" "./src" \
     --ignore ".tern-port" \
     --copy-files \
     --quiet \
     --out-dir "./lib"
