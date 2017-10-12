#!/usr/bin/env bash

set -euo pipefail

BABEL=${BABEL:-"$(npm bin)/babel"}
EXTRA_NODE_ARGS=${EXTRA_NODE_ARGS:-""}
NODE=${NODE:-"${npm_node_execpath}"}
NPM_RUN_ALL=${NPM_RUN_ALL:-"$(npm bin)/npm-run-all"}

eval "${NODE}" "${EXTRA_NODE_ARGS[@]}" "${BABEL}" "." \
     --ignore "examples,flow-typed,node_modules,package.json,scripts,webpack.config.js,yarn.*" \
     --copy-files \
     --quiet \
     --out-dir "./lib"
