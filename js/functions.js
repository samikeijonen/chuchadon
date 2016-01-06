
/**
 * Enable tab support for dropdown menus.
 */
( function() {
	var container,
	menuRight;
	
	// Main nagivation
	container = document.getElementById( 'menu-primary' );

	if ( container ) {
		
		var buttonMain = document.getElementById( 'nav-toggle' );
		var buttonMainSpan = document.getElementById( 'nav-toggle-span' );
		var buttonMainMenu = document.getElementById( 'nav-toggle-menu' );
		var navMain = responsiveNav( ".main-navigation", {    // Selector
			transition: 350,                                  // Integer: Speed of the transition, in milliseconds
			customToggle: "#nav-toggle",                      // Selector: Specify the ID of a custom toggle
			enableFocus: true,                                // Boolean: Do we use use 'focus' class in our nav elements
			enableDropdown: true,                             // Boolean: Do we use multi level dropdown
			dropDown: "menu-item-has-children",               // String: Class that is added to link element that have sub menu
			openDropdown: screenReaderTexts.expandSubMenu,    // String: Label for opening sub menu
			closeDropdown: screenReaderTexts.collapseSubMenu, // String: Label for closing sub menu
			init: function () {                               // Set ARIA for menu toggle button
				buttonMain.setAttribute( 'aria-expanded', 'false' );
				buttonMain.setAttribute( 'aria-pressed', 'false' );
				buttonMain.setAttribute( 'aria-controls', 'menu-primary' );
			},
			open: function () {
				buttonMain.setAttribute( 'aria-expanded', 'true' );
				buttonMain.setAttribute( 'aria-pressed', 'true' );
				buttonMainSpan.setAttribute( 'class', 'genericon genericon-close' );
				buttonMainMenu.innerHTML = screenReaderTexts.collapseMenu;
			},
			close: function () {
				buttonMain.setAttribute( 'aria-expanded', 'false' );
				buttonMain.setAttribute( 'aria-pressed', 'false' );
				buttonMainSpan.setAttribute( 'class', 'genericon genericon-menu' );
				buttonMainMenu.innerHTML = screenReaderTexts.expandMenu;
			},
		});
		
		// Top Right menu. We need to add .focus to this separately.
		menuRight = document.getElementById( 'top-right-items' );
		
		if ( menuRight ) {
			
			// Get all the link elements within the right menu.
			linksRight = menuRight.getElementsByTagName( 'a' );
			subMenusRight = menuRight.getElementsByTagName( 'ul' );
		
			// Each time a menu link is focused or blurred call the function toggleFocusRight.
			for ( var i = 0, len = linksRight.length; i < len; i++ ) {
				linksRight[i].addEventListener( 'focus', toggleFocusRight, true );
				linksRight[i].addEventListener( 'blur', toggleFocusRight, true );
			}
		
			// Set menu items with submenus to aria-haspopup="true" for right menu.
			for ( var i = 0, len = subMenusRight.length; i < len; i++ ) {
				subMenusRight[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
			}
			
		}
		
	}
	
	// Top search form
	if ( document.getElementById( 'top-search-form' ) ) {
		var buttonSearch     = document.getElementById( 'top-search-form-toggle' );
		var buttonSearchSpan = document.getElementById( 'top-search-form-toggle-span' );
		var buttonSearchMenu = document.getElementById( 'top-search-form-toggle-menu' );
		var navSearch        = responsiveNav( ".top-search-form", { // Selector
			transition: 350,                         // Integer: Speed of the transition, in milliseconds
			customToggle: "#top-search-form-toggle", // Selector: Specify the ID of a custom toggle
			init: function () {                      // Set ARIA for menu toggle button
				buttonSearch.setAttribute( 'aria-expanded', 'false' );
				buttonSearch.setAttribute( 'aria-pressed', 'false' );
			},
			open: function () {
				buttonSearch.setAttribute( 'aria-expanded', 'true' );
				buttonSearch.setAttribute( 'aria-pressed', 'true' );
				buttonSearchSpan.setAttribute( 'class', 'genericon genericon-close' );
				buttonSearchMenu.innerHTML = screenReaderTexts.collapseSearch;
				navSocial.close();
				navHeader.close();
			},
			close: function () {
				buttonSearch.setAttribute( 'aria-expanded', 'false' );
				buttonSearch.setAttribute( 'aria-pressed', 'false' );
				buttonSearchSpan.setAttribute( 'class', 'genericon genericon-search' );
				buttonSearchMenu.innerHTML = screenReaderTexts.expandSearch;
			},
		});
	}
	
	// Social menu
	if ( document.getElementById( 'menu-social' ) ) {
		var buttonSocial     = document.getElementById( 'social-nav-toggle' );
		var buttonSocialSpan = document.getElementById( 'social-nav-toggle-span' );
		var buttonSocialMenu = document.getElementById( 'social-nav-toggle-menu' );
		var navSocial        = responsiveNav( ".social-navigation", { // Selector
			transition: 350,                    // Integer: Speed of the transition, in milliseconds
			customToggle: "#social-nav-toggle", // Selector: Specify the ID of a custom toggle
			init: function () {                 // Set ARIA for menu toggle button
				buttonSocial.setAttribute( 'aria-expanded', 'false' );
				buttonSocial.setAttribute( 'aria-pressed', 'false' );
			},
			open: function () {
				buttonSocial.setAttribute( 'aria-expanded', 'true' );
				buttonSocial.setAttribute( 'aria-pressed', 'true' );
				buttonSocialSpan.setAttribute( 'class', 'genericon genericon-close' );
				buttonSocialMenu.innerHTML = screenReaderTexts.collapseSocialMenu;
				navSearch.close();
				navHeader.close();
			},
			close: function () {
				buttonSocial.setAttribute( 'aria-expanded', 'false' );
				buttonSocial.setAttribute( 'aria-pressed', 'false' );
				buttonSocialSpan.setAttribute( 'class', 'genericon genericon-hierarchy' );
				buttonSocialMenu.innerHTML = screenReaderTexts.expandSocialMenu;
			},
		});
	}
	
	// Header sidebar
	if ( document.getElementById( 'sidebar-header-wrapper' ) ) {
		var buttonHeader     = document.getElementById( 'header-sidebar-toggle' );
		var buttonHeaderSpan = document.getElementById( 'header-sidebar-toggle-span' );
		var buttonHeaderMenu = document.getElementById( 'header-sidebar-toggle-menu' );
		var navHeader        = responsiveNav( ".sidebar-header-wrapper", { // Selector
			transition: 350,                        // Integer: Speed of the transition, in milliseconds
			customToggle: "#header-sidebar-toggle", // Selector: Specify the ID of a custom toggle
			init: function () {                     // Set ARIA for menu toggle button
				buttonHeader.setAttribute( 'aria-expanded', 'false' );
				buttonHeader.setAttribute( 'aria-pressed', 'false' );
			},
			open: function () {
				buttonHeader.setAttribute( 'aria-expanded', 'true' );
				buttonHeader.setAttribute( 'aria-pressed', 'true' );
				buttonHeaderSpan.setAttribute( 'class', 'genericon genericon-close' );
				buttonHeaderMenu.innerHTML = screenReaderTexts.collapseHeaderSidebar;
				navSearch.close();
				navSocial.close();
			},
			close: function () {
				buttonHeader.setAttribute( 'aria-expanded', 'false' );
				buttonHeader.setAttribute( 'aria-pressed', 'false' );
				buttonHeaderSpan.setAttribute( 'class', 'genericon genericon-ellipsis' );
				buttonHeaderMenu.innerHTML = screenReaderTexts.expandHeaderSidebar;
				window.scrollTo( 0, 0 );
			},
		});
	}
	 
	/**
	 * Sets or removes .focus class on an element. We need to do this for top right menu separately.
	 */
	function toggleFocusRight() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .menu-items-right. That's the top right menu where we need to do this separately.
		while ( -1 === self.className.indexOf( 'menu-items-right' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}
	
	// Fix child menus for touch devices.
	function fixMenuTouchTaps( container ) {
		var touchStartFn,
		    parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for( var i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( var i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false )
			}
		}
	}
	
	if ( container ) {
		fixMenuTouchTaps( container );
	}
	
} )();

/**
 * Skip link focus fix.
 */
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
} )();
