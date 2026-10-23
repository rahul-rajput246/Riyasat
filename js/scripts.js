//   all ------------------
function initRiyasat() {
    "use strict";
    //   loader ------------------
    firstLoad();
    function firstLoad() {
        TweenMax.to($(".loader"), 1.5, {
            force3D: false,
            scale: "0",
            ease: Expo.easeInOut,
            onComplete: function () {
                $('.cd-loader-layer').addClass('closing');
                $("#main").animate({
                    opacity: 1
                }, 500);
                setTimeout(function () {
                    $(".loader-wrap").fadeOut(1);
                }, 1300);
            }
        });
    }
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    if ($(".header-cart_wrap_container").length > 0) {
        var aps = new PerfectScrollbar('.header-cart_wrap_container', {
            swipeEasing: true,
            minScrollbarLength: 20
        });
    }
    var wlwrp = $(".header-cart_wrap"),
        wllink = $(".sc_btn");
    function showCart() {
        wlwrp.fadeIn(1).addClass("vis-cart").removeClass("novis_cart")
        aps.update();
        wllink.addClass("scwllink");
    }
    function hideCart() {
        wlwrp.fadeOut(1).removeClass("vis-cart").addClass("novis_cart");
        wllink.removeClass("scwllink");
    }
    wllink.on("click", function () {
        if (wlwrp.hasClass("novis_cart")) showCart();
        else hideCart();
    });
    // collage image position ------------------
    $(".images-collage-item").each(function () {
        var tcp = $(this),
            dpl = tcp.data("position-left"),
            dpt = tcp.data("position-top"),
            dop = tcp.data("opacity"),
            dzi = tcp.data("zindex");
        tcp.css({
            "top": dpt + "%"
        });
        tcp.css({
            "z-index": dzi,
        });
        tcp.css({
            "left": dpl + "%",
        });
        tcp.css({
            "opacity": dop,
        });
    });
    //   Isotope------------------
    function initIsotope() {
        if ($(".gallery-items").length) {
            var $grid = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            });
            $grid.imagesLoaded(function () {
                $grid.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function (b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                $grid.isotope({
                    filter: c
                });
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
            });
        }
    }
    initIsotope();
    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    // Share   ------------------
    $(".sfcs").on("click", function () {
        $(this).toggleClass("vis-buts h");
        $(".fixed-scroll-column-share-container").slideToggle(400);
    });
    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'tumblr', 'twitter', 'linkedin']
    });
    var shrcn = $(".share-wrapper"),
        clsh = $(".share-container a");
    function showShare() {
        TweenMax.to(shrcn, 0.6, {
            force3D: false,
            height: "110px",
            ease: Expo.easeInOut,
            onComplete: function () {

                clsh.each(function (a) {
                    var boi = $(this);
                    setTimeout(function () {
                        TweenMax.to(boi, 0.5, {
                            force3D: true,
                            opacity: "1",
                            top: "0"
                        });
                    }, 130 * a);
                });
            }
        });
        shrcn.removeClass("isShare");
        $(".showshare").addClass("vis-shar");
    }
    function hideShare() {
        TweenMax.to(clsh, 0.6, {
            force3D: true,
            opacity: "0",
            top: "-20px",
            onComplete: function () {
                TweenMax.to(shrcn, 0.5, {
                    force3D: false,
                    height: "0",
                    ease: Expo.easeInOut,
                });
            }
        });
        shrcn.addClass("isShare");
        $(".showshare").removeClass("vis-shar");
    }
    $(".showshare").on("click", function () {
        if ($(".share-wrapper").hasClass("isShare")) showShare();
        else hideShare();
    });
    function menuDotsdec() {
        var hmtp = $(".hmi-dec");
        hmtp.each(function (hmtp) {
            $(this).css({
                left: $(this).parent(".hero-menu-item-title").find("h6").width() + 40 + "px"
            });
        });
    }
    menuDotsdec();
    //   tabs------------------
    $(".tabs-menu a").on("click", function (a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(this).parents(".tabs-act").find(".tab-content").not(b).css("display", "none");
        $(b).fadeIn(1500);
        menuDotsdec();
    });
    // scroll animation ------------------
    $(window).on("scroll", function (a) {
        if ($(this).scrollTop() > 150) {
            $(".to-top").fadeIn(500);
        } else {
            $(".to-top").fadeOut(500)
        }
    });
    //   scroll to------------------
    $(".custom-scroll-link").on("click", function () {
        var a = 20;
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".to-top").on("click", function (a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //   menu tabs------------------
    var transitionLayer2 = $('.cd-tabs-layer'),
        transitionBackground2 = transitionLayer2.children(),
        frameProportion2 = 1.78,
        frames2 = transitionLayer2.data('frame'),
        resize2 = false;
    setLayerDimensions2();
    $(window).on('resize', function () {
        if (!resize2) {
            resize2 = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions2, 300): window.requestAnimationFrame(setLayerDimensions2);
        }
    });
    $(".change_bg a").on("click", function () {
        transitionLayer2.addClass('visible opening');
        setTimeout(function () {
            transitionLayer2.removeClass('opening');
        }, 500);
        setTimeout(function () {
            transitionLayer2.addClass('closing');
            transitionBackground2.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                transitionLayer2.removeClass('closing opening visible');
                transitionBackground2.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
            });
        }, 500);

        var bgt = $(this).data("bgtab");
        $(".bg_tabs").delay(600).queue(function (next) {
            $(this).css("background-image", "url(" + bgt + ")");
            next();
        });

    });
    function setLayerDimensions2() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;
        if (windowWidth / windowHeight > frameProportion2) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion2;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion2;
        }
        transitionBackground2.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
        });
        resize2 = false;
    }
    //   slider / carousel ------------------
    function inintsingleSlider() {
        if ($(".single-slider").length > 0) {
            var j2 = new Swiper(".single-slider .swiper-container", {
                preloadImages: false,
                slidesPerView: 1,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                loop: true,
                autoHeight: true,
                grabCursor: true,
                mousewheel: false,
                pagination: {
                    el: '.ss-slider-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.ss-slider-cont-next',
                    prevEl: '.ss-slider-cont-prev',
                },
            });
        }
    }
    inintsingleSlider();
    if ($(".testimonilas-carousel").length > 0) {
        var j2 = new Swiper(".testimonilas-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,

            },
            navigation: {
                nextEl: '.tc-button-next',
                prevEl: '.tc-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".product-slider").length > 0) {
        var j2 = new Swiper(".product-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ss-slider-cont-next',
                prevEl: '.ss-slider-cont-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".events-carousel").length > 0) {
        var j2 = new Swiper(".events-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: false,
            navigation: {
                nextEl: '.ec-button-next',
                prevEl: '.ec-button-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });
    }
    if ($(".multi-slideshow_fs").length > 0) {
        var ms1 = new Swiper(".multi-slideshow_fs .swiper-container", {
            preloadImages: false,
            loop: true,
            speed: 1400,
            spaceBetween: 0,
            effect: "fade",
            init: false,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
        });
        setTimeout(function () {
            ms1.init();
        }, 2000);
    }
    if ($(".fs-slider").length > 0) {
        var j3 = new Swiper(".fs-slider .swiper-container", {
            preloadImages: false,
            loop: true,
            grabCursor: true,
            speed: 2400,
            spaceBetween: 0,
            effect: "slide",
            mousewheel: false,
            parallax: true,


            init: false,
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.fs-slider-button-next',
                prevEl: '.fs-slider-button-prev',
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },

        });
        setTimeout(function () {
            j3.init();
        }, 1500);
        j3.on('slideChange', function () {
            $(".custom-scroll-link").on("click", function () {
                var a = 20;
                if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
                    var b = $(this.hash);
                    b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
                    if (b.length) {
                        $("html,body").animate({
                            scrollTop: b.offset().top - a
                        }, {
                            queue: false,
                            duration: 1200,
                            easing: "easeInOutExpo"
                        });
                        return false;
                    }
                }
            });
        });
    }
    if ($(".grid-carousel ").length > 0) {
        var totalSlides2 = $(".grid-carousel .swiper-slide").length;
        var gridCarusel = new Swiper(".grid-carousel .swiper-container", {
            preloadImages: false,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 3,
            spaceBetween: 0,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            effect: "slide",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },

            navigation: {
                nextEl: '.grc-carousel-button-next',
                prevEl: '.grc-carousel-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 1,
                },
            }
        });

    }
    //   lightGallery------------------
    $(".image-popup").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var o = $(".lightgallery"),
        p = o.data("looped");
    o.lightGallery({
        selector: ".lightgallery a.popup-image",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: false,
        counter: false
    });
    //  cursor------------------
    $(".hero-wrap , .column-section , .parallax-section , .dark-bg , .cs-content-container , .column-wrap-bg").on({
        mouseenter: function () {
            $(".element-item").addClass("white_blur");
        },
        mouseleave: function () {
            $(".element-item").removeClass("white_blur");
        }
    });
    $("a , .btn ,   textarea,   input  , .show-reserv_button , .show-share-btn , .show-cart  , .close-reservation-modal ").on({
        mouseenter: function () {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $(".single-slider .swiper-slide , .product-slider .swiper-slide , .events-carousel .swiper-slide , .testimonilas-carousel .swiper-slide , .grid-carousel .swiper-slide , .fs-slider .swiper-slide ").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });
    $(".reserv-overlay").on({
        mouseenter: function () {
            $(".element-item").addClass("close-icon");
        },
        mouseleave: function () {
            $(".element-item").removeClass("close-icon");
        }
    });
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);
    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
    $(".hero-menu-item").matchHeight({
        byRow: true,
    });
    function cardRaining() {
        $.fn.duplicate = function (a, b) {
            var c = [];
            for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
            return this.pushStack(c);
        };
        var cr = $(".star-rating");
        cr.each(function (cr) {
            var starcount = $(this).attr("data-starrating");
            $("<i class='fas fa-star'></i>").duplicate(starcount).prependTo(this);
        });
    }
    cardRaining();
    $('#res_date').daterangepicker({
        autoUpdateInput: false,
        parentEl: $(".date-container2"),
        singleDatePicker: true,
        timePicker: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    $('#res_date').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY'));
    });
    $('#res_date').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });
    $('.chosen-select').niceSelect();
    $(".shop-price").ionRangeSlider({
        keyboard: true,
        prefix: "$"
    });
    var transitionLayer3 = $('.cd-reserv-overlay-layer'),
        transitionBackground3 = transitionLayer3.children(),
        frameProportion3 = 1.78,
        frames3 = transitionLayer3.data('frame'),
        resize3 = false;
    setLayerDimensions3();
    $(window).on('resize', function () {
        if (!resize3) {
            resize3 = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions3, 300): window.requestAnimationFrame(setLayerDimensions3);
        }
    });
    function setLayerDimensions3() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if (windowWidth / windowHeight > frameProportion3) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion3;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion3;
        }

        transitionBackground3.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
        });

        resize2 = false;
    }
    function showResForm() {
        $(".reservation-modal-wrap").fadeIn(1);
        transitionLayer3.addClass('visible opening');
        $("html, body").addClass("hid-body");
        TweenMax.to($(".reservation-modal-container"), 0.8, {
            force3D: true,
            y: "0",
            opacity: "1",
            ease: Power2.easeOut,
        });
    }
    function hideResForm() {
        $("html, body").removeClass("hid-body");
        TweenMax.to($(".reservation-modal-container"), 0.6, {
            force3D: true,
            y: "50px",
            opacity: "0",
            ease: Power2.easeOut,
            onComplete: function () {
                transitionLayer3.addClass('closing');
                transitionBackground3.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                    transitionLayer3.removeClass('closing opening visible');
                    transitionBackground3.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
                    $(".reservation-modal-wrap").delay(100).fadeOut(400);
                });
            }
        });
    }
    $(".show-rb").on("click", function (e) {
        e.preventDefault();
        showResForm();
    });
    $(".crm").on("click", function () {
        hideResForm();
        setTimeout(function () {

            $('#reservationform')[0].reset();
            $("#reserv-message").slideUp(1500);
            $('.chosen-select').niceSelect('update');
        }, 1500);
    });
    //   Contact form------------------
    $(document).on('submit', '#contactform', function (e) {
        e.preventDefault();
        var name = $("#name2").val() ? $("#name2").val().trim() : '';
        var email = $("#email2").val() ? $("#email2").val().trim() : '';
        var phone = $("#phone2").val() ? $("#phone2").val().trim() : '';
        var comments = $("#comments2").val() ? $("#comments2").val().trim() : '';

        $("#message2").slideUp(300, function () {
            if (!name || !email || !phone || !comments || !email.includes('@') || !email.includes('.')) {
                var errHtml = '<div style="color: #ff6b6b; background: rgba(255, 107, 107, 0.12); border: 1px solid #ff6b6b; padding: 12px 16px; border-radius: 4px; margin-bottom: 15px; text-align: left; font-size: 13px;">' +
                    '<i class="fas fa-exclamation-triangle"></i> Please fill in your name, valid email, contact number, and message.' +
                '</div>';
                document.getElementById("message2").innerHTML = errHtml;
                $("#message2").slideDown(400);
                return;
            }

            var successHtml = '<div class="success_message" style="background: rgba(197, 157, 95, 0.15); border: 1px solid #c59d5f; padding: 18px 20px; border-radius: 6px; color: #fff; margin-bottom: 20px; text-align: left;">' +
                '<h4 style="color: #c59d5f; margin: 0 0 6px; font-family: \'Playfair Display\', serif; font-size: 18px;"><i class="fas fa-check-circle"></i> Message Sent Successfully</h4>' +
                '<p style="margin: 0 0 6px; font-size: 13px; color: #f0f0f0;">Thank you, <strong>' + name + '</strong>. Our guest relations team has received your message and will respond to <strong>' + email + '</strong> promptly.</p>' +
                '<p style="margin: 0; font-size: 11px; color: #bbb; font-style: italic;"><i class="fal fa-info-circle"></i> Portfolio Demonstration Mode: In live production, this dispatches via email API / CRM integration.</p>' +
            '</div>';

            document.getElementById("message2").innerHTML = successHtml;
            $("#message2").slideDown(500);
            $('#contactform')[0].reset();
        });
        return false;
    });
    $(document).on('keyup', '#contactform input, #contactform textarea', function () {
        $("#message2").slideUp(1500);
    });

    // reservation form------------------
    $(document).on('submit', '#reservationform', function (e) {
        e.preventDefault();
        var name = $("#name").val() ? $("#name").val().trim() : '';
        var email = $("#email").val() ? $("#email").val().trim() : '';
        var phone = $("#phone").val() ? $("#phone").val().trim() : '';
        var persons = $("#persons").val() || '2 People';
        var resdate = $("#res_date").val() || 'Selected Date';
        var restime = $("#resrv-time").val() || '7:00 pm';

        $("#reserv-message").slideUp(300, function () {
            if (!name || !email || !phone || !email.includes('@') || !email.includes('.')) {
                var errHtml = '<div style="color: #ff6b6b; background: rgba(255, 107, 107, 0.15); border: 1px solid #ff6b6b; padding: 12px 16px; border-radius: 4px; margin-bottom: 15px; text-align: left; font-size: 13px;">' +
                    '<i class="fas fa-exclamation-triangle"></i> Please provide your name, valid email address, and phone number to complete reservation.' +
                '</div>';
                document.getElementById("reserv-message").innerHTML = errHtml;
                $("#reserv-message").slideDown(400);
                return;
            }

            var successHtml = '<div class="success_message" style="background: rgba(197, 157, 95, 0.15); border: 1px solid #c59d5f; padding: 18px 20px; border-radius: 6px; color: #fff; margin-bottom: 20px; text-align: left;">' +
                '<h4 style="color: #c59d5f; margin: 0 0 8px; font-family: \'Playfair Display\', serif; font-size: 18px;"><i class="fas fa-check-circle"></i> Reservation Request Received</h4>' +
                '<p style="margin: 0 0 6px; font-size: 13px; color: #f0f0f0;">Honored Guest <strong>' + name + '</strong>, your table for <strong>' + persons + '</strong> on <strong>' + resdate + ' at ' + restime + '</strong> has been recorded.</p>' +
                '<p style="margin: 0; font-size: 11px; color: #bbb; font-style: italic;"><i class="fal fa-info-circle"></i> Portfolio Demonstration: In live deployment, an automated SMS & Email confirmation is dispatched to ' + email + '.</p>' +
            '</div>';

            document.getElementById("reserv-message").innerHTML = successHtml;
            $("#reserv-message").slideDown(500);
            $('#reservationform')[0].reset();
            $('.chosen-select').niceSelect('update');
        });
        return false;
    });
    $("#reservationform input, #reservationform textarea").keyup(function () {
        $("#reserv-message").slideUp(1500);
    });

    //   Newsletter Subscription (Clean Demonstration) ------------------
    $(document).on('submit', '#subscribe', function (e) {
        e.preventDefault();
        var email = $("#subscribe-email").val() ? $("#subscribe-email").val().trim() : '';
        var $msg = $(this).find(".subscribe-message");
        if (!email || !email.includes('@') || !email.includes('.')) {
            $msg.html('<span style="color: #ff6b6b; font-size: 12px;"><i class="fa fa-warning"></i> Please enter a valid e-mail address.</span>').show();
        } else {
            $msg.html('<span style="color: #c59d5f; font-size: 12px;"><i class="fa fa-check"></i> Welcome to the Riyasat Connoisseurs Club!</span>').show();
            $("#subscribe-email").val('');
            setTimeout(function () { $msg.fadeOut(1500); }, 4000);
        }
    });

    // ======================================
    // Cart State & Interactivity Engine
    // ======================================
    var riyasatCart = [
        { id: 1, name: "Murgh Malai Tikka", price: 750, count: 1, img: "images/menu/1.jpg" },
        { id: 2, name: "Galouti Kebab & Taftan", price: 850, count: 1, img: "images/menu/2.jpg" },
        { id: 3, name: "Riyasati Shahi Shorba", price: 450, count: 1, img: "images/menu/3.jpg" }
    ];

    function showToast(message) {
        var $toast = $(".riyasat-toast");
        if ($toast.length === 0) {
            $toast = $('<div class="riyasat-toast"><i class="fas fa-shopping-bag"></i><span class="toast-msg"></span></div>').appendTo("body");
        }
        $toast.find(".toast-msg").text(message);
        $toast.addClass("show");
        setTimeout(function () {
            $toast.removeClass("show");
        }, 2800);
    }

    function updateCartUI() {
        var totalCount = 0;
        var subtotal = 0;
        var $cartList = $(".widget-posts ol");

        $cartList.empty();
        riyasatCart.forEach(function (item, idx) {
            totalCount += item.count;
            subtotal += item.price * item.count;
            var li = $(
                '<li class="clearfix">' +
                    '<a href="product-single.html" class="widget-posts-img"><img src="' + item.img + '" class="respimg" alt="' + item.name + '"></a>' +
                    '<div class="widget-posts-descr">' +
                        '<a href="product-single.html" title="' + item.name + '">' + item.name + '</a>' +
                        '<div class="widget-posts-descr_calc clearfix">' + item.count + ' <span>x</span> ₹' + item.price.toLocaleString('en-IN') + '</div>' +
                    '</div>' +
                    '<div class="clear-cart_button" data-idx="' + idx + '" title="Remove item"><i class="fal fa-times"></i></div>' +
                '</li>'
            );
            $cartList.append(li);
        });

        $(".show-cart_count").text(totalCount);
        $(".header-cart_title span").text(totalCount + (totalCount === 1 ? " item" : " items"));
        $(".header-cart_wrap_total_item span").text("₹" + subtotal.toLocaleString('en-IN'));

        if (typeof aps !== "undefined" && aps) {
            aps.update();
        }
    }

    // Add to cart click handler
    $(document).on("click", ".add_cart", function (e) {
        e.preventDefault();
        var $parent = $(this).closest(".hero-menu-item, .shop-item, .product-item, .room-item");
        var name = $parent.find("h6, h4, .shop-item-title, .product-title").first().text().replace(/\s*₹[\d,]+\s*/g, '').trim() || "Royal Specialty";
        var priceText = $parent.find(".hero-menu-item-price, .shop-item_price, .price").first().text().replace(/[^\d]/g, '');
        var price = parseInt(priceText, 10) || 650;
        var img = $parent.find("img").first().attr("src") || "images/menu/1.jpg";

        var existing = riyasatCart.find(function (i) { return i.name === name; });
        if (existing) {
            existing.count += 1;
        } else {
            riyasatCart.push({
                id: Date.now(),
                name: name,
                price: price,
                count: 1,
                img: img
            });
        }
        updateCartUI();
        showToast("Added \"" + name + "\" to cart");
    });

    // Remove from mini-cart
    $(document).on("click", ".clear-cart_button", function (e) {
        e.preventDefault();
        e.stopPropagation();
        var idx = $(this).data("idx");
        if (typeof idx !== "undefined" && idx >= 0 && idx < riyasatCart.length) {
            var removed = riyasatCart.splice(idx, 1);
            updateCartUI();
            if (removed && removed[0]) {
                showToast("Removed \"" + removed[0].name + "\" from cart");
            }
        }
    });

    // Close header mini-cart and share on click outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".header-cart_wrap, .sc_btn").length) {
            if ($(".header-cart_wrap").hasClass("vis-cart")) {
                hideCart();
            }
        }
        if (!$(e.target).closest(".share-wrapper, .showshare").length) {
            if (!$(".share-wrapper").hasClass("isShare")) {
                hideShare();
            }
        }
    });

    // Cart page table dynamic recalculations
    function recalcCartPage() {
        var subtotal = 0;
        $(".checkout-table tbody tr").each(function () {
            var $row = $(this);
            var $countInput = $row.find("input.order-count");
            if ($countInput.length > 0) {
                var count = parseInt($countInput.val(), 10) || 1;
                var priceText = $row.find("td:nth-child(3) .order-money, td:nth-child(3)").text().replace(/[^\d\.]/g, '');
                var price = parseFloat(priceText) || 0;
                var total = count * price;
                $row.find("td:nth-child(5) .order-money").text("₹" + total.toLocaleString('en-IN', { minimumFractionDigits: 2 }));
                subtotal += total;
            }
        });
        var shipping = subtotal > 0 ? 150 : 0;
        var discount = window.appliedDiscount || 0;
        var grandTotal = Math.max(0, subtotal + shipping - discount);

        $(".cart-totals .total-table tbody tr:nth-child(1) td").text("₹" + subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 }));
        $(".cart-totals .total-table tbody tr:nth-child(2) td").text("₹" + shipping.toLocaleString('en-IN', { minimumFractionDigits: 2 }));
        $(".cart-totals .total-table tbody tr:nth-child(3) td").text("₹" + grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 }));
    }

    $(document).on("input change", ".order-count", function () {
        recalcCartPage();
    });

    $(document).on("click", ".pr-remove a", function (e) {
        e.preventDefault();
        $(this).closest("tr").fadeOut(300, function () {
            $(this).remove();
            recalcCartPage();
        });
    });

    $(document).on("click", ".coupon-holder .btn-a", function (e) {
        e.preventDefault();
        var code = $("input[name='cartcoupon']").val() ? $("input[name='cartcoupon']").val().trim() : '';
        if (code) {
            window.appliedDiscount = 250;
            recalcCartPage();
            showToast("Coupon applied: ₹250 discount!");
        } else {
            showToast("Please enter a coupon code.");
        }
    });

    $(document).on("click", ".btn-uc", function (e) {
        e.preventDefault();
        recalcCartPage();
        showToast("Cart updated successfully.");
    });

    $(document).on("click", ".cart-totals_btn", function (e) {
        e.preventDefault();
        window.location.href = "checkout.html";
    });

    // Checkout form validation & graceful demo confirmation
    $(document).on("submit", ".check-out_wrap form", function (e) {
        e.preventDefault();
        var $form = $(this);
        var name = $form.find("input[name='name']").val() ? $form.find("input[name='name']").val().trim() : '';
        var email = $form.find("input[name='email']").val() ? $form.find("input[name='email']").val().trim() : '';
        var phone = $form.find("input[name='phone']").val() ? $form.find("input[name='phone']").val().trim() : '';
        var city = $form.find("input[name='city']").val() ? $form.find("input[name='city']").val().trim() : '';
        var code = $form.find("input[name='code']").val() ? $form.find("input[name='code']").val().trim() : '';

        if (!name || !email || !phone || !city || !code) {
            alert("Please fill in all required customer details (Name, Email, Phone, City, PIN code).");
            return;
        }

        var orderId = "RY-" + Math.floor(100000 + Math.random() * 900000);
        var html = '<div class="checkout-success" style="background: rgba(197, 157, 95, 0.15); border: 2px solid #c59d5f; padding: 25px; border-radius: 8px; text-align: left; color: #fff; margin-top: 20px;">' +
            '<h3 style="color: #c59d5f; font-family: \'Playfair Display\', serif; margin: 0 0 10px; font-size: 24px;"><i class="fas fa-check-circle"></i> Order Confirmed!</h3>' +
            '<p style="font-size: 15px; margin: 0 0 8px;">Thank you, <strong>' + name + '</strong>. Your order <strong>#' + orderId + '</strong> has been placed.</p>' +
            '<p style="font-size: 13px; color: #d0d0d0; margin: 0 0 12px;">Delivery to: <strong>' + city + ' - ' + code + '</strong> | Contact: ' + phone + '</p>' +
            '<div style="background: rgba(0,0,0,0.4); padding: 12px 16px; border-radius: 4px; font-size: 12px; color: #ccc; font-style: italic; margin-bottom: 20px;">' +
                '<i class="fal fa-info-circle"></i> Portfolio Demonstration: In live production, this checkout step securely connects with Razorpay / Stripe payment gateway and sends WhatsApp/SMS order tracking.' +
            '</div>' +
            '<a href="index.html" class="btn color-bg" style="display: inline-block;">Return to Home</a>' +
        '</div>';
        $form.html(html);
    });
    function videoint() {
        //   Video------------------
        var v = $(".background-youtube-wrapper").data("vid");
        var f = $(".background-youtube-wrapper").data("mv");
        $(".background-youtube-wrapper").YTPlayer({
            fitToBackground: true,
            videoId: v,
            pauseOnScroll: true,
            mute: f,
            callback: function () {
                var a = $(".background-youtube-wrapper").data("ytPlayer").player;
            }
        });
        var w = $(".background-vimeo").data("vim"),
            bvc = $(".background-vimeo"),
            bvmc = $(".media-container"),
            bvfc = $(".background-vimeo iframe "),
            vch = $(".video-container");
        bvc.append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
        $(".video-holder").height(bvmc.height());
        if ($(window).width() > 1024) {
            if ($(".video-holder").size() > 0)
                if (bvmc.height() / 9 * 16 > bvmc.width()) {
                    bvfc.height(bvmc.height()).width(bvmc.height() / 9 * 16);
                    bvfc.css({
                        "margin-left": -1 * $("iframe").width() / 2 + "px",
                        top: "-75px",
                        "margin-top": "0px"
                    });
                } else {
                    bvfc.width($(window).width()).height($(window).width() / 16 * 9);
                    bvfc.css({
                        "margin-left": -1 * $("iframe").width() / 2 + "px",
                        "margin-top": -1 * $("iframe").height() / 2 + "px",
                        top: "50%"
                    });
                }
        } else if ($(window).width() < 760) {
            $(".video-holder").height(bvmc.height());
            bvfc.height(bvmc.height());
        } else {
            $(".video-holder").height(bvmc.height());
            bvfc.height(bvmc.height());
        }
        vch.css("width", $(window).width() + "px");
        vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
        if (vch.height() < $(window).height()) {
            vch.css("height", $(window).height() + "px");
            vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
        }
    }
    videoint();
    function csselem() {
        $(".height-emulator").css({
            height: $(".fixed-footer").outerHeight(true)
        });
        $(".slideshow-container .slideshow-item").css({
            height: $(".slideshow-container").outerHeight(true)
        });
        $(".ms-item_fs").css({
            height: $(".multi-slideshow_fs").outerHeight(true)
        });
        $(".grid-carousel .swiper-slide").css({
            height: $(".grid-carousel").outerHeight(true)
        });
        $(".fs-slider-item").css({
            height: $(".fs-slider").outerHeight(true)
        });
    }
    csselem();
    // Mob Menu------------------
    $(".nav-button-wrap").on("click", function () {
        $(".main-menu").toggleClass("vismobmenu");
    });
    function mobMenuInit() {
        var ww = $(window).width();
        if (ww < 1048) {
            $(".menusb").remove();
            $(".main-menu").removeClass("nav-holder");
            $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
            $(".menusb").menu();
            $(".menusb.scroll-init a").on("click", function () {
                $(".main-menu").removeClass("vismobmenu");
            });
        } else {
            $(".menusb").remove();
            $(".main-menu").addClass("nav-holder");
        }
    }
    mobMenuInit();
    //   css ------------------
    var $window = $(window);
    $window.on("resize", function () {
        csselem();
        menuDotsdec();
        mobMenuInit();
    });
    $window.scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header.main-header").addClass("scroll-sticky");

        } else {
            $("header.main-header").removeClass("scroll-sticky");

        }
    });
    if ($(".fixed-bar").outerHeight(true) < $(".post-container").outerHeight(true)) {
        $(".fixed-bar").addClass("fixbar-action");
        $(".fixbar-action").scrollToFixed({
            minWidth: 1064,
            marginTop: function () {
                var a = $(window).height() - $(".fixed-bar").outerHeight(true) - 120;
                if (a >= 0) return 20;
                return a;
            },
            removeOffsets: true,
            limit: function () {
                var a = $(".limit-box").offset().top - $(".fixed-bar").outerHeight() + 30;
                return a;
            }
        });
    } else $(".fixed-bar").removeClass("fixbar-action");
    $(".gallery_filter-button").on("click", function () {
        $(".gth").slideToggle(400);
    });
    $(".scroll-init  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 80,
        threshold: 120,
        speed: 1200,
        currentClass: "act-scrlink"
    });
}
//   Parallax ------------------
function initparallax() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
        $(".background-vimeo, .background-youtube-wrapper").remove();
        return;
    }

    var items = [];
    $("[data-scrollax-parent='true']").each(function () {
        var $parent = $(this);
        var children = [];
        $parent.find("[data-scrollax]").each(function () {
            var raw = $(this).attr("data-scrollax") || "";
            var match = raw.match(/translateY:\s*['"]?(-?\d+)(%|px)?['"]?/);
            if (match) {
                children.push({
                    el: this,
                    val: parseFloat(match[1]),
                    unit: match[2] || "px"
                });
            }
        });
        if (children.length > 0) {
            items.push({
                parent: this,
                children: children
            });
        }
    });

    if (items.length === 0) return;

    var ticking = false;

    function renderParallax() {
        var winH = window.innerHeight || document.documentElement.clientHeight;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var rect = item.parent.getBoundingClientRect();
            // Skip elements well outside viewport
            if (rect.bottom < -100 || rect.top > winH + 100) {
                continue;
            }

            // Calculate normalized scroll factor: 0 at center, -1 at bottom, +1 at top
            var parentCenter = rect.top + rect.height / 2;
            var winCenter = winH / 2;
            var totalRange = (winH + rect.height) / 2;
            var factor = (winCenter - parentCenter) / totalRange;
            if (factor < -1) factor = -1;
            if (factor > 1) factor = 1;

            for (var j = 0; j < item.children.length; j++) {
                var child = item.children[j];
                var offset = (child.val * factor).toFixed(2);
                child.el.style.transform = "translate3d(0, " + offset + child.unit + ", 0)";
            }
        }
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(renderParallax);
            ticking = true;
        }
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });
    requestTick();
    $(window).on("load", requestTick);
}
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});  
//   Init All ------------------
var initRestabook = initRiyasat;
$(document).ready(function () {
    initRiyasat();
    initparallax();
});