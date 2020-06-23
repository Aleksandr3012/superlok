// const { EffectFade } = require("swiper/js/swiper.esm");

const $ = jQuery;
const JSCCommon = {
	CustomInputFile: function CustomInputFile() {
		var file = $(".add-file input[type=file]");
		file.change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(".add-file__filename  ");
			name.text(filename);

		});
	},
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	body: document.querySelector("body"),

	modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
		});
		$(".link-modal").click(function(){
			let th= $(this);
			let modal = $(th.attr('href'));
			let content = {
				title : th.data('title'),
				text : th.data('text'),
				btn : th.data('btn'),
				order : th.data('order')
			}
			modal.find('.ttu').html(content.title);
			modal.find('.after-headline').html(content.text);
			modal.find('.btn').val(content.btn);
			modal.find('.order').val(content.order);
		})
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$.fancybox.defaults.backFocus = false;
	},
	// /magnificPopupCall
	toggleMenu() {
		let _this = this;
		if (_this.btnToggleMenuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.addEventListener('click', function () {

					_this.btnToggleMenuMobile.forEach(function (element) {
						element.classList.toggle("on");
					});
					_this.menuMobile.classList.toggle("active");
					_this.body.classList.toggle("fixed");

					return false;
				});
			});
		}
	},

	closeMenu() {
		let _this = this;
		if (_this.menuMobile) {

			_this.btnToggleMenuMobile.forEach(function (element) {
				element.classList.remove("on");

			});
			_this.menuMobile.classList.remove("active");
			_this.body.classList.remove("fixed");
		}

	},

	mobileMenu() {
		// закрыть/открыть мобильное меню
		let _this = this;
		if (_this.menuMobileLink) {

			_this.toggleMenu();
			_this.menuMobileLink.forEach(function (element) {
				element.addEventListener('click', function (e) {
					console.log(element);
					_this.closeMenu();

				});
			})
			// document.addEventListener('mouseup', function (event) {
			// 	let container = event.target.closest(".menu-mobile--js.active"); // (1)
			// 	if (!container) {
			// 		_this.closeMenu();

			// 	}
			// });
		}
	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).show().addClass('active');

		});
	},
	// /табы  
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	}
	// /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});

	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	JSCCommon.CustomInputFile();

	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="pixel-perfect" style="background-image: url(screen/main320.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topH = $(".header ").innerHeight();

		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top-70;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	let defaultSl = {

	}
	const swiper4 = new Swiper('.headerSlider', {
		// slidesPerView: 5,
		// ...defaultSl,
		// effect: 'fade',
		loop: true,
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 50,
		// freeMode: true,
		watchOverflow: true,
		slidesPerGroup: 1,
		touchRatio: 0.2,
		// slideToClickedSlide: true,
		// freeModeMomentum: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination--head',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"> <div class="puginDot"></div> <div class="dots"><span>0</span>' + (index + 1) + '</div>' + '</div>' ;
			},
		},

	});
	// modal window

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form

	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				$.fancybox.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 6000);
		}).fail(function () { });

	});

	//luckyoneJS
	let partnersSlider =  new Swiper('.partners-slider-container-js', {
		breakpoints: {
			320 : {
				slidesPerView: 1,
				spaceBetween: 10
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			992 : {
				slidesPerView: 'auto',
				spaceBetween: 30,
			},
		},

		loop: true,

		//autoplay
		//autoplay: {
		//	delay: 4000,
		//},
		//lazy
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 5
		},

		on: {
			slideChange: function () {
				if (!partnersSlider) return
				let currSlideTxt = document.querySelector('.current-slide-js');
				if (!currSlideTxt) return;

				currSlideTxt.innerHTML = addZero(partnersSlider.realIndex + 1);
			},
		}
	});

	//prev, next
	$('.next-parnter-sl-js').click(function () {
		partnersSlider.slideNext();
	});
	$('.prev-parnter-sl-js').click(function () {
		partnersSlider.slidePrev();
	});
	//map js
	/*var map;
	let GoogleIsReady =  window.setInterval(function () {
		if (google.maps === undefined) return
		window.clearTimeout(GoogleIsReady);
		//

		function initMap() {
			map = new google.maps.Map(document.getElementById("map"), {
				center: { lat: -34.397, lng: 150.644 },
				zoom: 8
			});
		}
	}, 3000);*/
	/**/

	let dur = .6;
	let delay = dur;
	$('.section-title').each(function () {

		$(this).addClass("wow fadeInUp");
		$(this).attr("data-wow-duration", dur + 's');
		// $(this).attr("data-wow-delay", delay + 's')
	})

	$('.section-title').each(function () {

		$(this).addClass("wow fadeInUp");
		$(this).attr("data-wow-duration", dur + 's');
		$(this).attr("data-wow-delay", delay + 's')
	})

	var wow = new WOW({
		mobile: false
	});
	wow.init();
	// var controller = new ScrollMagic.Controller();




	function animateElem(){
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
		.fromTo(...arguments) // in from left
	 
	// create scene to pin and link animation
	new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: "onLeave",
		duration: "100%"
	})
		// .setPin("#sBrendRepresent")
		.setTween(wipeAnimation)
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}

	//axilary funcs
	animateElem.call('#sBrendRepresent', '.roller-img', .1, {y: -150}, { y: 100});
	animateElem.call('#sBrendRepresent', '.calc-img-js', .1, {y: -250, x: 20, opacity: 0.75, rotate: 100}, { y: 50, x: -25, opacity: 1, rotate: 0});
	animateElem.call('#sProfitably', '.fly-img-js', .1, {y: 50, x: -20}, { y: 550, x: 50, opacity: 1});
	animateElem.call('#sPrice', '.top-fly-img-js', .1, {y: 0, x: 0,}, { y: 250, x: 50, opacity: 1});
	animateElem.call('#sPrice', '.bottom-fly-img-js', .1, {y: -250, x: -20}, { y: 100, x: 50, opacity: 1});
	// animateElem('.roller-img-2');
	function addZero(num) {
		num = Number(num);
		if (num >= 0 && num <=9) {
			num = "0" + num;
		}
		return num
	}
	//

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
	if (isIE11) {
		$("body").prepend(`<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>`)

	}

	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
