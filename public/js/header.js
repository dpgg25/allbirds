const html = document.querySelector('html');
const body = document.querySelector('body');
const hamBtn = document.querySelector('.ham_menu');
const headerBar = document.querySelector('.hd_wrap');
const hdGnbTop = document.querySelector('.hd_wrap .hd_top');
const hdGnbBack = document.querySelector('.hd_wrap .hd_back');
const hdGnbBtn = document.querySelectorAll('.hd_wrap .hd_back .gnb > ul > li > a');
const headerGnb = document.querySelectorAll('.hd_gnb');
const headerCart = document.querySelector('.hd_cart');
const closeCartBtn = document.querySelector('.hd_cart .close_cart');
body.addEventListener('scroll', timer);
hamBtn.addEventListener('click', toggleHamBtn, false);
hdGnbBack.addEventListener('click', openGnb, false);
hdGnbTop.addEventListener('click', openCart, false);
closeCartBtn.addEventListener('click', closeCart, false);

let alarm;
function timer() {
  var currentScroll = window.pageYOffset;
  clearTimeout(alarm);
  alarm = setTimeout(currentScroll, 30);
}

headerbarToggle();
function headerbarToggle() {
  var topPoint = 50;
  var currentScroll = window.pageYOffset;
  if (topPoint < currentScroll) {
    headerBar.classList.add('on');
		hdgnbBack.classList.add('scroll');
  } else {
    headerBar.classList.remove('on');
		hdgnbBack.classList.remove('scroll');
	}
}

//mobile hamburger menu button
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

function openGnb(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  if(e.target.nextElementSibling.classList.contains('on')) {
    for (let i = 0; i < headerGnb.length; i++) {
      headerGnb[i].classList.remove('on');
    }
    headerCart.classList.remove('on');
    html.classList.remove('scroll_hidden');
    body.classList.remove('scroll_hidden');
  } else {
    for (let i = 0; i < headerGnb.length; i++) {
      headerGnb[i].classList.remove('on');
    }    
    headerCart.classList.remove('on');
    e.target.nextElementSibling.classList.add('on');
    html.classList.add('scroll_hidden');
    body.classList.add('scroll_hidden');
  } 
}

function openCart(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  if(e.target.nextElementSibling.classList.contains('on')) {
    for (let i = 0; i < headerGnb.length; i++) {
      headerGnb[i].classList.remove('on');
    }
    headerCart.classList.remove('on');
    html.classList.remove('scroll_hidden');
    body.classList.remove('scroll_hidden');
  } else {
    for (let i = 0; i < headerGnb.length; i++) {
      headerGnb[i].classList.remove('on');
    }
    headerCart.classList.add('on');
    html.classList.add('scroll_hidden');
    body.classList.add('scroll_hidden');
  }
}

function closeCart() {
  headerCart.classList.remove('on');
  html.classList.remove('scroll_hidden');
  body.classList.remove('scroll_hidden');

}