(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {

        function initVideoPlayAndClose() {
            $('#html-video').addClass('hidden');
            $('#play-btn').on('click', function () {
                var htmlVideo = '#html-video';
                var vCard = '#v-card';
                var playButtonHolder = '#button-holder';
                var playIcon = '#icon-play';
                $(playButtonHolder).addClass('middle');
                setTimeout(function () {
                    $(vCard).addClass('hide-overflow');
                    $('body').addClass('scale-effect');
                    $('#about').addClass('about-change');
                    $(vCard).addClass('height-change');
                }, 600);
                setTimeout(function () {
                    $(playIcon).hide();
                    $(htmlVideo).removeClass('hidden');
                    $(htmlVideo)[0].play();
                    $('#play-btn').addClass('black');
                }, 1000);
            });
            $('#close-btn').on('click', function () {
                var htmlVideo = '#html-video';
                var vCard = '#v-card';
                var playButtonHolder = '#button-holder';
                var playIcon = '#icon-play';
                $('body').removeClass('scale-effect');
                setTimeout(function () {
                    $(playIcon).show();
                    $(playButtonHolder).removeClass('middle');
                    $(vCard).removeClass('hide-overflow');
                }, 1000);
                $(vCard).removeClass('height-change');
                $('#about').removeClass('about-change');
                $(htmlVideo).addClass('hidden');
                $(htmlVideo)[0].pause();
                $('#play-btn').removeClass('black');
            });
        }

                function initMapsNormal() {
            var mapOptions = {
                zoom: 17,
                center: new google.maps.LatLng(51.5287352, -0.3817831),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                disableDefaultUI: false
            };
            var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);
            var normal = new MarkerWithLabel({
                position: myMap.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0
                },
                map: myMap,
                labelAnchor: new google.maps.Point(10, 10),
                labelClass: "map-label",
                draggable: false
            });
        }


             function initMapsDark() {
            var styles = [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }];
            var mapOptions = {
                zoom: 17,
                center: new google.maps.LatLng(51.5287352, -0.3817831),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                disableDefaultUI: false,
                styles: styles
            };
            var myMap = new google.maps.Map(document.getElementById('myMap'), mapOptions);
            var dark = new MarkerWithLabel({
                position: myMap.getCenter(),
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 0
                },
                map: myMap,
                labelAnchor: new google.maps.Point(10, 10),
                labelClass: "map-label",
                draggable: false
            });
        }


        initVideoPlayAndClose();
//         initMapsNormal
         initMapsDark();

    });
    // jQuery(window).on('load', function () {
    //     $('div#loading').fadeOut(500);
    //     window.sr = ScrollReveal({reset: false});
    //     var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' + '.timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card,' + '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img';
    //     sr.reveal(commonCards, {duration: 1100});
    //     sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
    //     sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
    //     sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});
    // });
})(jQuery);



var typed4 = new Typed('#typed4', {
    strings: [ 'حسین مقدم هستم', 'برنامه نویس هستم','فریلنسر هستم'],
    typeSpeed: 40,
    backSpeed: 40,
  smartBackspace: true,
    loop: true,
    startDelay : 1000
  });
    


    $('.popup-image').magnificPopup({
        type: 'image', removalDelay: 160, callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }, closeOnContentClick: true, midClick: true
    });


    /**
 * Touch/drag implementation to follow
 */



/**
 * Hammer.js jquery plugin
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if(!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function(options) {
        return this.each(function() {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function(originalEmit) {
        return function(type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));


 $('.card').hammer().on('pan', function(e){
    var deltaX = e.gesture.deltaX,
        deltaY = e.gesture.deltaY;

    //find boundaries of container

    var circle = $(this).find('.btn-holder');

    // if(Math.abs(deltaX) > 100){
    //     (deltaX > 0) ? deltaX = 100 : deltaX = -100;
    // }

    //  if(Math.abs(deltaY) > 100){
    //      (deltaY > 0) ? deltaY = 200 : deltaY = -100;
    //  }

     circle.css('transform', 'translateX(' + deltaX +'px) translateY(' + deltaY + 'px)');

    if(e.gesture.isFinal){
        circle.css('transform', 'translateX(0) translateY(0)');
    }
});


var partJson = {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": ["image", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"],
      "stroke": {
        "width": 0,
        "color": "#06a763"
      },
      "polygon": {
        "nb_sides": 8
      },
      "image": {
        "src": "assets/image1.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 36.076771369474265,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 8.017060304327615,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));
 /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', jsonUri, function() {
  console.log('callback - particles.js config loaded');
});


$(function() {  
$("body").niceScroll();
$("#menu-options").niceScroll();
});
