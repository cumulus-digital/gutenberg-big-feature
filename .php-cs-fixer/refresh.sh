#!/bin/sh

echo "Refreshing wp-core.csv";
curl \
  https://raw.githubusercontent.com/jason-pomerleau/vscode-wordpress-toolbox/master/snippets/snippets.json \
  | sed -nE -e 's/.*(ƒ|Class|Constant): ([^"]+).*/"\2"/p' \
  | sed '/^$/d' | sed '$!s/$/,/' \
  > wp-core.csv

echo "Refreshing wp-functions.csv";
curl \
  https://raw.githubusercontent.com/jason-pomerleau/vscode-wordpress-toolbox/master/snippets/snippets.json \
  | sed -nE -e 's/.*(ƒ): ([^"]+).*/"\2"/p' \
  | sed '/^$/d' | sed '$!s/$/,/' \
  > wp-functions.csv

echo "Refreshing wp-classes.csv";
curl \
  https://raw.githubusercontent.com/jason-pomerleau/vscode-wordpress-toolbox/master/snippets/snippets.json \
  | sed -nE -e 's/.*(Class): ([^"]+).*/"\2"/p' \
  | sed '/^$/d' | sed '$!s/$/,/' \
  > wp-classes.csv

echo "Refreshing wp-consts.csv";
curl \
  https://raw.githubusercontent.com/jason-pomerleau/vscode-wordpress-toolbox/master/snippets/snippets.json \
  | sed -nE -e 's/.*(Constant): ([^"]+).*/"\2"/p' \
  | sed '/^$/d' | sed '$!s/$/,/' \
  > wp-consts.csv