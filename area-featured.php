			<?php
			/**
			 * Featured Content area in Front Page Template.
			 *
			 * @package Chuchadon
			 */

				$chuchadon_featured_area = get_theme_mod( 'front_page_featured', 'blog-posts' );
				
				/* Bail if do not want to show anything. */
				if( 'nothing' == esc_attr( $chuchadon_featured_area ) ) :
					return;
				endif;
				
				if( 'blog-posts' == esc_attr( $chuchadon_featured_area ) ) :
					
					/* Blog Posts Query. */
					$featured_content = new WP_Query( apply_filters( 'chuchadon_blog_posts_arguments', array(
					'post_type'       => 'post',
					'posts_per_page'  => 4,
					'no_found_rows'   => true,
					) ) );
					
				else :
				
					/* Child Pages Query. */
					$featured_content = new WP_Query( apply_filters( 'chuchadon_child_pages_arguments',array(
						'post_type'      => 'page',
						'orderby'        => 'menu_order',
						'order'          => 'ASC',
						'post_parent'    => $post->ID,
						'posts_per_page' => 500,
						'no_found_rows'  => true,
					) ) );
					
				endif; // End check for featured content.
			?>

			<?php if ( $featured_content->have_posts() ) : ?>

				<div id="featured-area" class="featured-area grid-area <?php echo esc_attr( $chuchadon_featured_area ); ?>-area">			
					<div class="featured-wrapper grid-area-wrapper <?php echo esc_attr( $chuchadon_featured_area ); ?>-wrapper">

						<?php while ( $featured_content->have_posts() ) : $featured_content->the_post(); ?>

							<?php
								if( 'blog-posts' == esc_attr( $chuchadon_featured_area ) ) :
									get_template_part( 'template-parts/content', ( post_type_supports( get_post_type(), 'post-formats' ) ? get_post_format() : get_post_type() ) );
								elseif( 'portfolios' == esc_attr( $chuchadon_featured_area ) ) :
									get_template_part( 'template-parts/content', 'jetpack-portfolio' );
								else :
									get_template_part( 'template-parts/content', 'child-pages' );
								endif;
							?>						

						<?php endwhile; ?>

					</div><!-- .featured-wrapper -->
				</div><!-- #featured-area -->

			<?php
				endif; // End loop.
				wp_reset_postdata(); // Reset post data.
			?>