#!/bin/sh

set -e

"$(npm bin)/babel" \
  "./src" \
  --ignore ".tern-port" \
  --copy-files \
  --quiet \
  --out-dir "./lib"
