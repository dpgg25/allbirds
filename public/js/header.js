const html = document.querySelector('html');
const body = document.querySelector('body');
const main = document.querySelector('main');
const hamBtn = document.querySelector('.ham_menu');
const headerBar = document.querySelector('.hd_wrap');
const hdGnbTop = document.querySelector('.hd_wrap .hd_top');
const hdGnbBack = document.querySelector('.hd_wrap .hd_back');
const hdGnbLi = document.querySelectorAll('.hd_wrap .hd_back nav > ul > li');
const hdGnbBtn = document.querySelectorAll('.hd_wrap .hd_back .gnb > ul > li > a');
const headerGnb = document.querySelectorAll('.hd_gnb');
const headerCart = document.querySelector('.hd_cart');
const closeCartBtn = document.querySelector('.hd_cart .close_cart');
const cartLeft = document.querySelector('.hd_cart .hd_left');
body.addEventListener('scroll', timer);
hamBtn.addEventListener('click', toggleHamBtn, false);
hdGnbBack.addEventListener('click', openGnb, false);
hdGnbTop.addEventListener('click', openCart, false);
closeCartBtn.addEventListener('click', closeCart, false);
hdGnbBack.addEventListener('click',backGnbBtn,false);
cartLeft.addEventListener('click', closeCart, false);
body.addEventListener('click', closeGnb, false);

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
		hdGnbBack.classList.add('scroll');
  } else {
    headerBar.classList.remove('on');
		hdGnbBack.classList.remove('scroll');
	}
}

//mobile hamburger menu button
function toggleHamBtn() {
  if (hamBtn.classList.contains('change')) {
    body.classList.remove('scroll_hidden');
    html.classList.remove('scroll_hidden');
    hamBtn.classList.remove('change');
    hdGnbBack.classList.remove('on');
  } else {    
    body.classList.add('scroll_hidden');
    html.classList.add('scroll_hidden');
    hamBtn.classList.add('change');
    hdGnbBack.classList.add('on');
  }
}

function openGnb(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  var windowWidth = window.innerWidth;
  if(windowWidth < 992 && e.target.nextElementSibling.className !== '') {
    for (let i = 0; i < hdGnbLi.length; i++) {
      hdGnbLi[i].classList.remove('on');
      hdGnbLi[i].classList.add('hidden');
    }
    e.target.parentNode.classList.remove('hidden');
    e.target.parentNode.classList.add('on');
  } else {
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
}

function closeGnb(e) {
  var windowWidth = window.innerWidth;
  if (windowWidth > 991 && 
    e.target.className === 'gnb_bottom') {      
      for (let i = 0; i < headerGnb.length; i++) {
        headerGnb[i].classList.remove('on');
      }
      html.classList.remove('scroll_hidden');
      body.classList.remove('scroll_hidden');
   }
}

//mobile gnb 뒤로가기
function backGnbBtn(e) {
  if (e.target.className === 'gnb_back' || e.target.className === 'gnb_back_span') {
    for (let i = 0; i < hdGnbLi.length; i++) {
      hdGnbLi[i].classList.remove('on');
      hdGnbLi[i].classList.remove('hidden');
    }
  } else {
    return;
  }
}

function openCart(e) {
  e.preventDefault();
  if (e.target.tagName !== 'A') return;

  if(windowWidth < 992 && e.target.className === 'cart_wrap') {
    
  } else {
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
}

function closeCart() {
  headerCart.classList.remove('on');
  html.classList.remove('scroll_hidden');
  body.classList.remove('scroll_hidden');
}

// window.onload = function()
// {
//  setGnbBottomHeight('gnb_down','gnb_bottom');
// }

// function setGnbBottomHeight(gnbDown, gnbBottom) {
//   var gnbDownHeight = document.getElementsByClassName(gnbDown).offsetHeight;
//   var setGnbBottom = document.getElementsByClassName(gnbBottom);
//   setGnbBottom.style.height  = (main.offsetHeight - gnbDownHeight) + 'px';
// }
