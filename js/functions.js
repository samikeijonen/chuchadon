
/**
 * Enable tab support for dropdown menus.
 */
( function() {
	var container,
	menu,
	menuRight,
	menuTop,
	links,
	linksTop,
	dropdownButton,
	styleElement = document.createElement( 'style' );

	container = document.getElementById( 'menu-primary' );

	/**
	 * Make dropdown menus keyboard accessible.
	 */
	 
	if ( container ) {
		
		// Top Left Menu
		menu = document.getElementById( 'top-left-items' );
		
		// Top Right menu
		menuRight = document.getElementById( 'top-right-items' );

		// Get all the link elements within the left menu.
		links    = menu.getElementsByTagName( 'a' );
		subMenus = menu.getElementsByTagName( 'ul' );
		
		// Get all the link elements within the right menu.
		linksRight = menuRight.getElementsByTagName( 'a' );
		subMenusRight = menuRight.getElementsByTagName( 'ul' );

		// Each time a menu link is focused or blurred call the function toggleFocus.
		for ( var i = 0, len = links.length; i < len; i++ ) {
			links[i].onfocus = toggleFocus;
			links[i].onblur = toggleFocus;
		}
		
		// Same for right menu
		for ( var i = 0, len = linksRight.length; i < len; i++ ) {
			linksRight[i].onfocus = toggleFocus;
			linksRight[i].onblur = toggleFocus;
		}
		
		// Set menu items with submenus to aria-haspopup="true".
		for ( var i = 0, len = subMenus.length; i < len; i++ ) {
			subMenus[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
		}
		
		// Set menu items with submenus to aria-haspopup="true" for right menu.
		for ( var i = 0, len = subMenusRight.length; i < len; i++ ) {
			subMenusRight[i].parentNode.setAttribute( 'aria-haspopup', 'true' );
		}
		
		// Add button after link when there is submenu around.
		var parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );
		
		for ( var i = 0; i < parentLink.length; ++i ) {
			parentLink[i].insertAdjacentHTML( 'afterend', '<button class="dropdown-toggle" aria-expanded="false">' + screenReaderText.expand + '</button>' );
		}
		
		// Select all dropdown buttons
		dropdownButton = container.querySelectorAll( '.dropdown-toggle' );
			
		// For each dropdown Button element add click event
		[].forEach.call( dropdownButton, function( el ) {

			// Add click event listener
			el.addEventListener( "click", function( event ) {
				
				// Change dropdown button text on every click
				if( this.innerHTML === screenReaderText.expand ) {
					this.innerHTML = screenReaderText.collapse;
				} else {
					this.innerHTML = screenReaderText.expand;
				}
				
				// Toggle dropdown button
				if( !hasClass( this, 'toggled' ) ) {
					
					// Add .toggled class
					addClass( this, 'toggled' );
					
					// Set aria-expanded to true
					this.setAttribute( 'aria-expanded', 'true' );
					
					// Get next element meaning UL with .sub-menu class
					var nextElement = this.nextElementSibling;
					
					// Add 'toggled' class to sub-menu element
					addClass( nextElement, 'toggled' );
					
					// Add 'dropdown-active' class to nav when dropdown is toggled
					addClass( container, 'dropdown-active' );
						
				} else {
					
					// Remove .toggled class
					removeClass( this, 'toggled' );
					
					// Set aria-expanded to false
					this.setAttribute( 'aria-expanded', 'false' );
					
					// Get next element meaning UL with .sub-menu
					var nextElement = this.nextElementSibling;
					
					// Remove 'toggled' class from sub-menu element
					removeClass( nextElement, 'toggled' );
					
					// Remove 'dropdown-active' class to nav when dropdown is toggled
					removeClass( container, 'dropdown-active' );
					
				}
			}, false );

		});
		
	}

	function toggleFocus() {
		var current = this,
		    ancestors = [];

		// Create an array of <li> ancestors of the current link. Stop upon
		// reaching .menu-items at the top of the current menu system.
		while ( -1 === current.className.indexOf( 'menu-items' ) ) {
			if ( 'li' === current.tagName.toLowerCase() ) {
				ancestors.unshift( current );
			}
			current = current.parentElement;
		}

		// For each element in ancestors[] toggle the class .focus.
		for ( i = 0, len = ancestors.length; i < len; i++ ) {
			if ( -1 !== ancestors[i].className.indexOf( 'focus' ) )
				ancestors[i].className = ancestors[i].className.replace( ' focus', '' );
			else
				ancestors[i].className += ' focus';
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
	
	/**
	* Adds a class to any element
	*
	* @param {element} element
	* @param {string}  class
	*/
	addClass = function (el, cls) {
		if (el.className.indexOf(cls) !== 0) {
			el.className += " " + cls;
			el.className = el.className.replace(/(^\s*)|(\s*$)/g,"");
		}
	}
    
	/**
	* Remove a class from any element
	*
	* @param  {element} element
	* @param  {string}  class
	*/
	removeClass = function (el, cls) {
		var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		el.className = el.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
	}
	
	hasClass = function (elem, className) {
		return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	}
	
	/**
	* forEach method that passes back the stuff we need
	*
	* @param  {array}    array
	* @param  {Function} callback
	* @param  {scope}    scope
	*/
	forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]);
		}
	};
	
	/**
	 * Get the children of any element
	 *
	 * @param  {element}
	 * @return {array} Returns matching elements in an array
	 */
	getChildren = function ( e ) {
		if ( e.children.length < 1 ) {
			throw new Error( "The Nav container has no containing elements" );
		}
		// Store all children in array
		var children = [];
		// Loop through children and store in array if child != TextNode
		for ( var i = 0; i < e.children.length; i++ ) {
			if ( e.children[i].nodeType === 1 ) {
				children.push( e.children[i] );
			}
		}
		return children;
	}
	
	/**
	 * Calculates the height of the navigation and then creates
	 * styles which are later added to the page <head>
	 */
	calcSubmenuHeight = function ( elem ) {
		var submenuHeight = 0;
		for ( var i = 0; i < elem.inner.length; i++ ) {
			submenuHeight += elem.inner[i].offsetHeight;
		}
		return submenuHeight;
	}
	
	/**
	 * Adds the needed CSS transitions if animations are enabled
	 */
	transitionsSubmenu = function ( elem ) {
		var objStyle = elem.style,
		transitionSubmenu = "max-height " + elem.offsetHeight + "px";

		objStyle.WebkitTransition = transitionSubmenu;
		objStyle.MozTransition = transitionSubmenu;
		objStyle.OTransition = transitionSubmenu;
		objStyle.transition = transitionSubmenu;
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
})();
