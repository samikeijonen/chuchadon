<?php
/**
 * Template Name: Front Page
 *
 * This is the page template for Front Page.
 *
 * @package Chuchadon
 */

get_header(); ?>
		
	<?php while ( have_posts() ) : the_post(); ?>
					
		<?php	
			/* If there is no page content, show only callout. */
			$content = trim( get_the_content() ); // Get page content.
			if( '' == $content ) :
				chuchadon_echo_callout( $placement = 'top' ); // Echo callout which is set in the Customizer. Function is in inc/customizer.php file.
			else :
		?>
					
			<div id="chuchadon-page-template-content" class="chuchadon-page-template-content chuchadon-front-page-content">
					
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>
						
					<?php chuchadon_echo_callout( $placement = 'top' ); // Echo callout which is set in the Customizer. Function is in inc/customizer.php file. ?>
						
					<?php if( has_post_thumbnail() ) : ?>
							<div class="post-thumbnail">
								<?php the_post_thumbnail(); ?>
							</div><!-- .post-thumbnail -->
					<?php endif; ?>
						
					<div class="entry-inner">
						
						<header class="entry-header">
							<?php the_title( '<h1 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '>', '</h1>' ); ?>
						</header><!-- .entry-header -->
						
						<div class="entry-content" <?php hybrid_attr( 'entry-content' ); ?>>
							<?php the_content(); ?>
						</div><!-- .entry-content -->
						
					</div><!-- .entry-inner -->
						
				</article><!-- #post-## -->
					
			</div><!-- .chuchadon-front-page-content -->
				
		<?php endif; // End check for post content. ?>

	<?php endwhile; // End of the loop. ?>
		
	<?php do_action( 'chuchadon_before_front_page_sidebar' ); // Hook before sidebar. ?>
		
	<?php get_sidebar( 'front-page' ); // Loads the sidebar-front-page.php template. ?>
		
	<?php do_action( 'chuchadon_after_front_page_sidebar' ); // Hook after sidebar. ?>
			
	<?php
		/* Load testimonials and featured area. */
		if( ! get_theme_mod( 'order_testimonials' ) ) :
			get_template_part( 'area-testimonial' ); // Add testimonial area.
			get_template_part( 'area-featured' );    // Add featured area.
		else :
			get_template_part( 'area-featured' );    // Add featured area.
			get_template_part( 'area-testimonial' ); // Add testimonial area.				
		endif;
	?>
			
	<?php chuchadon_echo_callout( $placement = 'bottom' ); // Echo callout which is set in the Customizer. Function is in inc/customizer.php file. ?>
	
	<?php if( get_theme_mod( 'callout_image' ) ) : // Callout image. ?>
		<div id="callout-image" class="callout-image">
			<?php if( get_theme_mod( 'callout_image_url' ) ) : ?>
				<a href="<?php echo esc_url( get_theme_mod( 'callout_image_url' ) ); ?>">
					<img src="<?php echo esc_url( get_theme_mod( 'callout_image' ) ); ?>" alt="<?php echo esc_attr( get_theme_mod( 'callout_image_alt' ) ); ?>" />
				</a>
			<?php else : ?>
				<img src="<?php echo esc_url( get_theme_mod( 'callout_image' ) ); ?>" alt="<?php echo esc_attr( get_theme_mod( 'callout_image_alt' ) ); ?>" />
			<?php endif; ?>
		</div>
	<?php endif; ?>
	
<?php get_footer(); ?>
