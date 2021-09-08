<?php

namespace CUMULUS\Gutenberg\BigFeature;

/*
 * Plugin Name: Big Feature Gutenberg Block
 * Plugin URI: https://github.com/cumulus-digital/gutenberg-big-feature/
 * GitHub Plugin URI: https://github.com/cumulus-digital/gutenberg-big-feature/
 * Primary Branch: main
 * Description: Gutenberg block for "Big Feature" media grid
 * Version: 0.0.1
 * Author: vena
 * License: UNLICENSED
 */

\defined( 'ABSPATH' ) || exit( 'No direct access allowed.' );

// Editor Assets
function editor_assets() {
	$url = \untrailingslashit( \plugin_dir_url( __FILE__ ) );

	\wp_enqueue_style(
		'gutenberg_big_feature-backend-css', // Handle.
		$url . '/build/backend.css'
	);

	$assets = include \plugin_dir_path( __FILE__ ) . 'build/backend.asset.php';
	\wp_enqueue_script(
		'gutenberg_big_feature-backend-js', // Handle.
		$url . '/build/backend.js',
		$assets['dependencies'],
		$assets['version'],
		true
	);
}
\add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\editor_assets' );

// Frontend Assets
function frontend_assets() {
	if ( \has_block( 'cumulus-gutenberg/big-feature' ) && ! \is_admin() ) {
		$url = \untrailingslashit( \plugin_dir_url( __FILE__ ) );

		\wp_enqueue_style(
			'gutenberg_big_feature-frontend-css', // Handle.
			$url . '/build/frontend.css'
		);

		$assets = include \plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php';
		\wp_enqueue_script(
			'gutenberg_big_feature-frontend-js', // Handle.
			$url . '/build/frontend.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
\add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\frontend_assets' );

// Custom Block Category
\add_filter( 'block_categories_all', function ( $categories ) {
	if ( ! \array_search( 'cmls', \array_column( $categories, 'slug' ) ) ) {
		$categories = \array_merge(
			$categories,
			[
				[
					'slug'  => 'cmls',
					'title' => 'Cumulus',
					'icon'  => null,
				],
			]
		);
	}

	return $categories;
}, 10, 1 );
