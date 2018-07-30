#!/bin/sh

set -e

find . \
     -name '*.js' \
     -not -path './node_modules/*' \
     -not -path './examples/node_modules/*' \
     -not -path './flow-typed/*' \
     -not -path './cjs/*' \
     -not -path './es/*' \
     -print0 | xargs --null "$(npm bin)/eslint" --fix
