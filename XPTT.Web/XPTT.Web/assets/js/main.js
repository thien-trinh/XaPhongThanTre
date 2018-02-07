/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1080px)',
		narrower: '(max-width: 820px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				speed: 300,
				alignment: 'center',
				noOpenerFade: true
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							'<a href="index.html" class="link depth-0">Home</a>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						resetScroll: true,
						resetForms: true,
						side: 'top',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {                
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);               
               
                return false;
            }
            else {
                if (this.hash.slice(1) == "open_facebook_box") {
                    $('.fchat').toggle('slow');
                }
                return false;
            }
        }
    });
});

$(document).ready(function () {
    $(".chat_fb").click(function () {
        $('.fchat').toggle('slow');
    });
    setTimeout(function () {
        openModalPopup();
    }, 1000);
    // popup close function
    $('.modal-content .close').click(function (event) {
        $('.modal').fadeOut(800);
    });
    $('.modal-content #mc-embedded-subscribe').click(function (event) {
        setTimeout(function () {
            $('.modal').fadeOut(800);
        }, 1000);
        
    });
    // popup 'esc' key to close
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC
            $('.modal').hide();
        }
    });
});

function openModalPopup() {
    if (!Cookies.get("MCPopupClosed"))
        $('.modal').fadeIn(800);
}

