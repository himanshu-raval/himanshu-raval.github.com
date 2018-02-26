$(window).on("load", function() {
    "use strict";

    /*=================== Sticky Header ===================*/
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("header.stick").addClass("sticky");
        } else {
            $("header.stick").removeClass("sticky");
        }
    });


    /*=================== Responsive Menu Button ===================*/
    $(".responsive-btn").on("click",function(){
        $("nav").addClass("slidein");
        return false;   
    });
    $("html").on("click",function(){
        $("nav").removeClass("slidein");
    });
    $(".responsive-btn").on("click",function(e){
        e.stopPropagation()
    });

// ===================================== Scrolling Function =========================================//

   $('nav, .navbar-default').onePageNav({
    currentClass: 'current',
    changeHash: false,
    offset:0,
    scrollSpeed: 1100,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});


    /*=================== Portfolio Hexagon Image ===================*/
    var portfolio_image = $('.portfolio-img');
    for (var i = 0; i < portfolio_image.length; i++) {
        var img_path = $(portfolio_image[i]).find('img').attr('src');
        $(portfolio_image[i]).css({
            'background-image':'url(' + img_path + ')'
        });
    }

    /*=================== Testimonial Hexagon Image ===================*/
    var testimonial_image = $('.testimonial-img');
    for (var i = 0; i < testimonial_image.length; i++) {
        var img_path2 = $(testimonial_image[i]).find('img').attr('src');
        $(testimonial_image[i]).css({
            'background-image':'url(' + img_path2 + ')'
        });
    }


    /* ============ Testimonials Carousel ================*/
    $('.testimonials-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        nav: false,
        margin:30,
        mouseDrag: true,
        items: 2,
        autoHeight: true,
        responsive :{
            1366:{items:2},            
            1200 :{items:2},            
            980 :{items:2},         
            767 :{items:1},            
            480 :{items:1},                
            0 :{items:1}      
        }    
    });


    /* ============ Posts Carosuel ================*/
    $('.post-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        margin: 0,
        mouseDrag: true,
        items: 1,
        singleItem: true,
        autoplayHoverPause: true,
        URLhashListener: true,
        autoHeight: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });


    /*================== Map =====================*/
    var myLatlng = new google.maps.LatLng(34.1049669, 74.6609769);
    var mapOptions = {
        zoom: 8,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#212121'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#212121'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bbb'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#8cc3b7'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bbbbbb'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#023e58'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#365864'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#bbb'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#212121'
                }]
            }
        ],
        disableDefaultUI: true,
        scrollwheel: false,
        center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var image = '';
    var myLatLng = new google.maps.LatLng(34.1049669, 74.6609769);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });


});