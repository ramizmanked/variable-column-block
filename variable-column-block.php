<?php
/**
 * Plugin Name:       Variable Column Block
 * Description:       Allows you to add variable width block into your post/page.
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           1.2.3
 * Author:            Ramiz Manked
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       variable-column-block
 * Domain Path:       /languages
 *
 * @package variable-column-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets, so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_variable_column_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_variable_column_block_block_init' );
