/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    jQuery('#menu-toggle').hide();
    jQuery('#back-to-top').hide();


    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('.scrolly').scrolly();

    var settings = {
        toggle: "#menu-toggle", // the selector for the menu toggle, whatever clickable element you want to activate or deactivate the menu. A click listener will be added to this element.
        exit_selector: ".slider-exit", // the selector for an exit button in the div if needed, when the exit element is clicked the menu will deactivate, suitable for an exit element inside the nav menu or the side bar
        animation_duration: "0.5s", //how long it takes to slide the menu
        place: "left", //where is the menu sliding from, possible options are (left | right | top | bottom)
        animation_curve: "cubic-bezier(0.54, 0.01, 0.57, 1.03)", //animation curve for the sliding animation
        body_slide: false, //set it to true if you want to use the effect where the entire page slides and not just the div
        no_scroll: false, //set to true if you want the scrolling disabled while the menu is active
        auto_close: false //set to true if you want the slider to auto close everytime a child link of it is clicked
    };

    $('#menu').sliiide(settings); //initialize sliiide

    $(function() {
        $('[data-toggle="popover"]').popover()
    })

    let prog = document.getElementById('progress');

    let body = document.body,
        html = document.documentElement;

    let height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    const setProgress = () => {
        let scrollFromTop = (html.scrollTop || body.scrollTop) + html.clientHeight;
        let width = (scrollFromTop / height) * 100 + 'vw';

        prog.style.width = width;
    };

    window.addEventListener('scroll', setProgress);



    jQuery(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > $(window).height()) {
            jQuery('#menu-toggle').show();
            jQuery('#back-to-top').show();
            jQuery('#menu').show();
            jQuery('#bg_video').hide();
            

        } else {
            jQuery('#menu-toggle').hide();
            jQuery('#menu').hide();
            jQuery('#back-to-top').hide();
            jQuery('#bg_video').show();
        }
    });

    setProgress();

    

    jQuery('.carousel').carousel({
        interval: false,
        ride: false,
    })


})(jQuery);