<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package Chuchadon
 */

/**
 * Add theme support for Infinite Scroll.
 * See: http://jetpack.me/support/infinite-scroll/
 */
function chuchadon_jetpack_setup() {

	/* Add support for infinite scroll. */
	add_theme_support( 'infinite-scroll', array(
		'container'      => 'main',
		'footer'         => 'page',
		'footer_widgets' => 'subsidiary'
	) );
	
}
add_action( 'after_setup_theme', 'chuchadon_jetpack_setup' );
