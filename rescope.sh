#!/bin/bash
if ! command -v php-scoper &> /dev/null; then
	echo "php-scoper must be installed and available in your PATH."
	exit
fi
if ! command -v composer &> /dev/null; then
	echo "composer must be installed and available in your PATH."
	exit
fi

echo "Setting up composer vendors without dev"
composer install --no-scripts --no-dev --prefer-dist
echo "Scoping..."
php-scoper add-prefix --output-dir build/composer
echo "Updating vendor_keep autoloader"
composer dump-autoload --working-dir build/composer --classmap-authoritative
echo "Reinstalling dev"
composer install --no-scripts --prefer-dist