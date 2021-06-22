const html = document.querySelector('html');
const body = document.querySelector('body');
const hamBtn = document.querySelector('.ham_menu');
const hdgnbBack = document.querySelector('.hd_wrap .hd_back');
hamBtn.addEventListener('click', toggleHamBtn, false);

function toggleHamBtn() {
  if (hamBtn.classList.contains('change')) {
    body.classList.remove('scroll_hidden');
    html.classList.remove('scroll_hidden');
    hamBtn.classList.remove('change');
    hdgnbBack.classList.remove('on');
  } else {    
    body.classList.add('scroll_hidden');
    html.classList.add('scroll_hidden');
    hamBtn.classList.add('change');
    hdgnbBack.classList.add('on');
  }
}



/*
$(document).on('scroll', function() {
			var sHeight = $(document).scrollTop();
			if ( sHeight > 50) {
				$('.hd_wrap').addClass('on');
				$('.hd_gnb').addClass('scroll');
				$('.hd_back').addClass('scroll');
			} else {
				$('.hd_wrap').removeClass('on');
				$('.hd_back').removeClass('scroll');
			};
		});

		$(document).ready(function(){
			$('.hd_top .ham_menu').click(function(e){
				e.preventDefault();
				$(this).toggleClass('change');
				$('.hd_wrap .hd_back').toggleClass('on');
				$('html, body').toggleClass('scroll_hidden');
			});

			var gnbMen = $('.hd_gnb.men');
			var gnbWomen = $('.hd_gnb.women');
			var gnbSus = $('.hd_gnb.sus');
			var cart = $('.hd_cart');

			$('.hd_back .gnb .men').click(function(e) {
				// e.preventDefault();
				// e.stopPropagation();
				gnbWomen.removeClass('on');
				gnbSus.removeClass('on');
				cart.removeClass('on');
				gnbMen.toggleClass('on');
				if (gnbMen.hasClass('on')) {
					$('html, body').addClass('scroll_hidden');
				} else {
					$('html, body').removeClass('scroll_hidden');
				};
			});//이쪽 버튼들을 누르면 최상단으로 가버리는데 이것저것 넣어봐도 고정이 안 됨
			$('.hd_back .gnb .women').click(function(e) {
				// e.preventDefault();
				// e.stopPropagation();
				gnbMen.removeClass('on');
				gnbSus.removeClass('on');
				cart.removeClass('on');
				gnbWomen.toggleClass('on');
				if (gnbWomen.hasClass('on')) {
					$('html, body').addClass('scroll_hidden');
				} else {
					$('html, body').removeClass('scroll_hidden');
				};
			});
			$('.hd_back .util .sus').click(function(e) {
				// e.preventDefault();
				// e.stopPropagation();
				gnbWomen.removeClass('on');
				gnbMen.removeClass('on');
				cart.removeClass('on');
				gnbSus.toggleClass('on');
				if (gnbSus.hasClass('on')) {
					$('html, body').addClass('scroll_hidden');
				} else {
					$('html, body').removeClass('scroll_hidden');
				};
			});

			$('.hd_top .cart_box').click(function() {
				gnbMen.removeClass('on');
				gnbWomen.removeClass('on');
				gnbSus.removeClass('on');
				$('html, body').removeClass('scroll_hidden');
				cart.addClass('on');
			});			
			$('.close_cart').click(function() {
				cart.removeClass('on');
			});

			//gnb_down 높이 계산 후 gnb_bottom 높이 설정
			var gnbHeight = $('.gnb_down').outerHeight();
			$('.gnb_bottom').css('height', $(window).height() - gnbHeight);
		});

		// 빈 공간 누르면 창 닫히게 하기
		$(document).mouseup(function(e) {
			if($('.gnb_bottom').is(e.target)) {
				$('.hd_gnb').removeClass('on');
				$('html, body').removeClass('scroll_hidden');
			};

			if($('.hd_left').is(e.target)) {
				$('.hd_cart').removeClass('on');
			}
		}); */