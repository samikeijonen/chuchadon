<?php
/**
 * Primary menu.
 *
 * @package Chuchadon
 */
?>

<?php if ( has_nav_menu( 'top-left' ) || has_nav_menu( 'top-right' ) || has_nav_menu( 'social' ) || is_active_sidebar( 'header' ) ) : ?>
	
	<div id="top-search-form" class="top-search-form">
		<?php get_search_form() ?>
	</div>
	
	<div id="top-menu-buttons" class="top-menu-buttons clear">
	
		<?php if ( has_nav_menu( 'top-left' ) || has_nav_menu( 'top-right' ) ) : ?>
	
			<span class="main-nav-menu-button-wrapper">

				<button id="nav-toggle" class="nav-toggle" aria-controls="menu-primary" aria-expanded="false">
					<span id="nav-toggle-span" class="genericon genericon-menu" aria-hidden="true"></span>
					<span id="nav-toggle-menu" class="nav-toggle-menu screen-reader-text"><?php esc_html_e( 'Expand Menu', 'chuchadon' ); ?></span>
				</button>
			
			</span><!-- .main-nav-menu-button-wrapper -->
			
		<?php endif; // End check for main menu button. ?>
		
		<span class="top-search-header-social-buttons-wrapper">
		
			<button id="top-search-form-toggle" class="top-search-form-toggle" aria-controls="top-search-form" aria-expanded="false">
				<span id="top-search-form-toggle-span" class="genericon genericon-search" aria-hidden="true"></span>
				<span id="top-search-form-toggle-menu" class="top-search-form-toggle-menu screen-reader-text"><?php esc_html_e( 'Expand Search', 'chuchadon' ); ?></span>
			</button>
			
			<?php if ( has_nav_menu( 'social' ) ) : ?>
				<button id="social-nav-toggle" class="social-nav-toggle" aria-controls="social-navigation-wrapper" aria-expanded="false">
					<span id="social-nav-toggle-span" class="genericon genericon-hierarchy" aria-hidden="true"></span>
					<span id="social-nav-toggle-menu" class="social-nav-toggle-menu screen-reader-text"><?php esc_html_e( 'Expand Social Menu', 'chuchadon' ); ?></span>
				</button>
			<?php endif; ?>
			
			<?php if ( is_active_sidebar( 'header' ) ) : ?>
				<button id="header-sidebar-toggle" class="header-sidebar-toggle" aria-controls="header-sidebar-wrapper" aria-expanded="false">
					<span id="header-sidebar-toggle-span" class="genericon genericon-ellipsis" aria-hidden="true"></span>
					<span id="header-sidebar-toggle-menu" class="header-sidebar-toggle-menu screen-reader-text"><?php esc_html_e( 'Expand Header Sidebar', 'chuchadon' ); ?></span>
				</button>
			<?php endif; ?>
			
		</span><!-- .top-search-header-social-buttons-wrapper -->
			
	</div><!-- .top-menu-buttons -->
	
<?php endif; // End check for menu buttons. ?>
	
<?php if ( has_nav_menu( 'top-left' ) || has_nav_menu( 'top-right' ) ) : ?>
	
	<nav id="menu-primary" class="menu main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Top Menu', 'chuchadon' ); ?>" <?php hybrid_attr( 'menu', 'primary' ); ?>>
		<h2 class="screen-reader-text"><?php esc_html_e( 'Top Menu', 'chuchadon' ); ?></h2>
		
		<div class="wrap top-menu-left-wrap">
			
			<?php

				wp_nav_menu(
					array(
						'theme_location'  => 'top-left',
						'menu_id'         => 'top-left-items',
						'depth'           => 4,
						'menu_class'      => 'menu-items menu-items-left',
						'fallback_cb'     => ''
					)
				);
			
			?>
		
		</div><!-- .wrap -->
		
		<div class="wrap top-menu-right-wrap">
			
			<?php

				wp_nav_menu(
					array(
						'theme_location'  => 'top-right',
						'menu_id'         => 'top-right-items',
						'depth'           => 4,
						'menu_class'      => 'menu-items menu-items-right',
						'fallback_cb'     => ''
					)
				);
			
			?>
		
		</div><!-- .wrap -->
		
	</nav><!-- #menu-primary -->

<?php endif; // End check for main menu. ?>