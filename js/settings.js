
	// Main nagivation
	if ( document.getElementById( 'menu-primary' ) ) {
		var buttonMain = document.getElementById( 'nav-toggle' );
		var buttonMainSpan = document.getElementById( 'nav-toggle-span' );
		var buttonMainMenu = document.getElementById( 'nav-toggle-menu' );
		var navMain = responsiveNav( ".main-navigation", { // Selector
			transition: 350,             // Integer: Speed of the transition, in milliseconds
			customToggle: "#nav-toggle", // Selector: Specify the ID of a custom toggle
			init: function () {          // Set ARIA for menu toggle button
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
	}
	
	// Top search form
	if ( document.getElementById( 'top-search-form' ) ) {
		var buttonSearch = document.getElementById( 'top-search-form-toggle' );
		var buttonSearchSpan = document.getElementById( 'top-search-form-toggle-span' );
		var buttonSearchMenu = document.getElementById( 'top-search-form-toggle-menu' );
		var navSearch = responsiveNav( ".top-search-form", { // Selector
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
	if ( document.getElementById( 'social-navigation-wrapper' ) ) {
		var buttonSocial = document.getElementById( 'social-nav-toggle' );
		var buttonSocialSpan = document.getElementById( 'social-nav-toggle-span' );
		var buttonSocialMenu = document.getElementById( 'social-nav-toggle-menu' );
		var navSocial = responsiveNav( ".social-navigation-wrapper", { // Selector
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
		var buttonHeader = document.getElementById( 'header-sidebar-toggle' );
		var buttonHeaderSpan = document.getElementById( 'header-sidebar-toggle-span' );
		var buttonHeaderMenu = document.getElementById( 'header-sidebar-toggle-menu' );
		var navSocial = responsiveNav( ".sidebar-header-wrapper", { // Selector
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
			},
			close: function () {
				buttonHeader.setAttribute( 'aria-expanded', 'false' );
				buttonHeader.setAttribute( 'aria-pressed', 'false' );
				buttonHeaderSpan.setAttribute( 'class', 'genericon genericon-ellipsis' );
				buttonHeaderMenu.innerHTML = screenReaderTexts.expandHeaderSidebar;
			},
		});
	}