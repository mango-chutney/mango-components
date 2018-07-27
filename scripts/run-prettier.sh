#!/bin/sh

set -e

find . \
     \( \
     -name '*.js' \
     -o -name '*.babelrc' \
     -o -name '*.json' \
     -o -name '*.md' \
     -o -name '*.html' \
     \) \
     -not -path './node_modules/*' \
     -not -path './examples/node_modules/*' \
     -not -path './flow-typed/*' \
     -not -path './lib/*' \
     -print0 | xargs --null "$(npm bin)/prettier" --write