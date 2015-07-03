<?php
/**
 * The default template for displaying content.
 *
 * @package Chuchadon
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>

	<?php chuchadon_post_thumbnail(); ?>
	
	<div class="entry-inner">

		<header class="entry-header">
	
			<?php get_template_part( 'entry', 'meta' ); // Loads the entry-meta.php template. ?>
		
			<?php
				if ( !is_single() ) :
					the_title( sprintf( '<h2 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
				endif;
			?>
		
		</header><!-- .entry-header -->
		
		<div class="entry-content" <?php hybrid_attr( 'entry-content' ); ?>>
			<?php
				/* translators: %s: Name of current post */
				the_content( sprintf(
					__( 'Read more %s', 'chuchadon' ),
					the_title( '<span class="screen-reader-text">', '</span>', false )
				) );
				
				wp_link_pages( array(
					'before'    => '<div class="page-links">' . __( 'Pages:', 'chuchadon' ),
					'after'     => '</div>',
					'pagelink'  => '<span class="screen-reader-text">' . __( 'Page', 'chuchadon' ) . ' </span>%',
					'separator' => '<span class="screen-reader-text">,</span> ',
				) );
			?>
		</div><!-- .entry-content -->

		<footer class="entry-footer">
			<?php chuchadon_post_terms( array( 'taxonomy' => 'category', 'text' => __( 'Posted in %s', 'chuchadon' ) ) ); ?>
			<?php chuchadon_post_terms( array( 'taxonomy' => 'post_tag', 'text' => __( 'Tagged %s', 'chuchadon' ), 'before' => '<br />' ) ); ?>
		</footer><!-- .entry-footer -->
		
	</div><!-- .entry-inner -->
	
</article><!-- #post-## -->