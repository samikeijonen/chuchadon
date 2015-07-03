<?php
/**
 * Custom Header feature
 *
 * @package Chuchadon
 */

/**
 * Setup the WordPress core custom header feature.
 *
 * @uses chuchadon_header_style()
 */
function chuchadon_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'chuchadon_custom_header_args', array(
		'default-image'          => '%s/images/header-image.jpg',
		'default-text-color'     => 'fff',
		'width'                  => 1920,
		'height'                 => 500,
		'flex-height'            => true,
		'wp-head-callback'       => 'chuchadon_header_style'
	) ) );
	
	/* Registers default headers for the theme. We need this so that we can set default image back. */
	register_default_headers(
		array(
			'chuchadon-header'  => array(
				'url'           => '%s/images/header-image.jpg',
				'thumbnail_url' => '%s/images/header-image.jpg',
				/* Translators: Header image description. */
				'description'   => __( 'Default Header Image', 'chuchadon' )
			)
		)
	);

}
add_action( 'after_setup_theme', 'chuchadon_custom_header_setup', 15 );

if ( ! function_exists( 'chuchadon_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see chuchadon_custom_header_setup().
 */
function chuchadon_header_style() {
	
	/* Header text color. */
	$header_color = get_header_textcolor();
	
	/* Header image. */
	$header_image = esc_url( get_header_image() );
	
	/* Start header styles. */
	$style = '';
	
	/* Header image height. */
	$header_height = get_custom_header()->height;
	
	/* Header image width. */
	$header_width = get_custom_header()->width;
	
	/* When to show header image. */
	$min_width = absint( apply_filters( 'chuchadon_header_bg_show', 1 ) );
	
	/* Background arguments. */
	$background_arguments = esc_attr( apply_filters( 'chuchadon_header_bg_arguments', 'no-repeat 50% 50%' ) );
	
	if ( ! empty( $header_image ) ) {
		$style .= "@media screen and (min-width: {$min_width}px) { body.custom-header-image .site-header { background: url({$header_image}) {$background_arguments}; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-attachment: fixed; } }";
	}
	
	/* Site title styles. */
	if ( display_header_text() ) {
		$style .= ".site-title, .site-title a, .site-description, .site-description a { color: #{$header_color} }";
		$style .= ".site-title a { border-color: #{$header_color} }";
	}
	
	if ( ! display_header_text() ) {
		$style .= ".site-title, .site-title a, .site-description, .site-description a { clip: rect(1px, 1px, 1px, 1px); position: absolute; }";	
	}
	
	/* Echo styles if it's not empty. */
	if ( ! empty( $style ) ) {
		echo "\n" . '<style type="text/css" id="custom-header-css">' . trim( $style ) . '</style>' . "\n";
	}

}
endif; // chuchadon_header_style
