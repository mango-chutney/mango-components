#!/usr/bin/env bash

set -euo pipefail

EXTRA_NODE_ARGS=${EXTRA_NODE_ARGS:-""}
NODE=${NODE:-"${npm_node_execpath}"}
PRETTIER=${PRETTIER:-"$(npm bin)/prettier"}

eval "${NODE}" "${EXTRA_NODE_ARGS[@]}" "${PRETTIER}" \
     --write \
     "./src/components/**/*.{js,json}" \
     "./examples/components/**/*.{js,json}" \
     "./examples/containers/**/*.{js,json}" \
     "./examples/reducers/**/*.{js,json}" \
     "./examples/store/**/*.{js,json}" \
     "./examples/*.{js,json}" \
     ".eslintrc.json" \
     ".package.json" \
     "README.md"
