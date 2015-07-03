<?php
/**
 * Social links menu.
 *
 * @package Chuchadon
 */
?>

<?php if ( has_nav_menu( 'social' ) ) : // Check if there's a menu assigned to the 'social' location. ?>
	
	<div id="social-navigation-wrapper" class="social-navigation-wrapper">
	
		<nav id="menu-social" class="menu social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Social Menu', 'chuchadon' ); ?>" <?php hybrid_attr( 'menu', 'social' ); ?>>
			<h2 class="screen-reader-text"><?php esc_attr_e( 'Social Menu', 'chuchadon' ); ?></h2>
		
			<?php wp_nav_menu(
				array(
					'theme_location' => 'social',
					'depth'          => 1,
					'link_before'    => '<span class="screen-reader-text">',
					'link_after'     => '</span>',
					'fallback_cb'    => '',
				)
			); ?>
		</nav><!-- #menu-social -->
		
	</div><!-- .social-navigation-wrapper -->

<?php endif; // End check for menu. ?>