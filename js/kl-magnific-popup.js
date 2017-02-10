/*
 * Initialization script for Magnific Pop up
 */
jQuery(function($){
	"use strict";

	var enable_magnificpopup = function( content ){
		if(typeof($.fn.magnificPopup) != 'undefined'){
			$('a.kl-login-box').magnificPopup({
				type: 'inline',
				closeBtnInside:true,
				showCloseBtn: true,
				mainClass: 'mfp-fade mfp-bg-lighter'
			});

			$('a[data-lightbox="image"]:not([data-type="video"])').each(function(i,el){
				//single image popup
				if ($(el).parents('.gallery').length == 0) {
					$(el).magnificPopup({
						type:'image',
						tLoading: '',
						mainClass: 'mfp-fade'
					});
				}
			});
		 	$('.mfp-gallery.images').each(function(i,el) {
				$(el).magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {enabled:true},
					tLoading: '',
					mainClass: 'mfp-fade'
				});
			});
			// Notice the .misc class, this is a gallery which contains a variatey of sources
			// links in gallery need data-mfp attributes eg: data-mfp="image"
			$('.mfp-gallery.misc a[data-lightbox="mfp"]').magnificPopup({
				mainClass: 'mfp-fade',
				type: 'image',
				gallery: {enabled:true},
				tLoading: '',
				callbacks: {
					elementParse: function(item) {
						item.type = $(item.el).attr('data-mfp');
					}
				}
			});
			$('a[data-lightbox="iframe"]').magnificPopup({type: 'iframe', mainClass: 'mfp-fade', tLoading: ''});
			$('a[data-lightbox="inline"]').magnificPopup({type: 'inline', mainClass: 'mfp-fade', tLoading: ''});
			$('a[data-lightbox="ajax"]').magnificPopup({type: 'ajax', mainClass: 'mfp-fade', tLoading: ''});
			$('a[data-lightbox="youtube"], a[data-lightbox="vimeo"], a[data-lightbox="gmaps"], a[data-type="video"]').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				removalDelay: 160,
				preloader: true,
				fixedContentPos: false,
				mainClass: 'mfp-fade',
				tLoading: ''
			});

			// Enable WooCommerce lightbox
			$('.single_product_main_image .images a').magnificPopup({
				mainClass: 'mfp-fade',
				type: 'image',
				gallery: {enabled:true},
				tLoading: '',
			});

		}
	};
	enable_magnificpopup();
	
});

