#!/usr/bin/env bash

set -euo pipefail

EXTRA_NODE_ARGS=${EXTRA_NODE_ARGS:-""}
NODE=${NODE:-"${npm_node_execpath}"}
PRETTIER=${PRETTIER:-"$(npm bin)/prettier"}

eval "${NODE}" "${EXTRA_NODE_ARGS[@]}" "${PRETTIER}" \
     --write \
     "./components/**/*.{js,json}" \
     "./examples/**/*.{js,json}" \
     ".eslintrc.json" \
     ".package.json"
