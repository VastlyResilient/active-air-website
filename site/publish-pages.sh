#!/bin/sh
# Publish a noindex test copy to GitHub Pages (gh-pages branch): sh site/publish-pages.sh
set -e
cd "$(dirname "$0")"
BASE=/active-air-website node src/build.mjs
TMP=$(mktemp -d)
cp -R dist/. "$TMP"/
cd "$TMP"
git init -q -b gh-pages
git add -A
git commit -q -m "Test site build $(date +%Y-%m-%d)"
git push -q -f https://github.com/VastlyResilient/active-air-website.git gh-pages
cd - >/dev/null
node src/build.mjs >/dev/null   # restore the normal local build
rm -rf "$TMP"
echo "published to https://vastlyresilient.github.io/active-air-website/"
