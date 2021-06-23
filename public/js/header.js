const html = document.querySelector('html');
const body = document.querySelector('body');
const hamBtn = document.querySelector('.ham_menu');
const headerbar = document.querySelector('.hd_wrap');
const hdgnbBack = document.querySelector('.hd_wrap .hd_back');
const hdgnbBtn = document.querySelectorAll('.hd_wrap .hd_back .gnb > ul > li');
const headerGnb = document.querySelectorAll('.hd_gnb');
const headerCart = document.querySelector('.hd_cart');
body.addEventListener('scroll', timer);
hamBtn.addEventListener('click', toggleHamBtn, false);
hdgnbBtn.addEventListener('click', openGnb, false);

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
    headerbar.classList.add('on');
		hdgnbBack.classList.add('scroll');
  } else {
    headerbar.classList.remove('on');
		hdgnbBack.classList.remove('scroll');
	}
}

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
  // if (e.target.tagName !== 'LI') return;
  console.log(e.target.parentNode.className);
  for (let i = 0; i < headerGnb.length; i++) {
    headerGnb[i].classList.remove('on');
  }  
  headerCart.classList.remove('on');
  e.target.classList.add('on');

  for (let i = 0; i < headerGnb.length; i++) {
    if(headerGnb[i].classList.contains('on')) {
      html.classList.add('scroll_hidden');
      body.classList.add('scroll_hidden');
    } else {
      html.classList.remove('scroll_hidden');
      body.classList.remove('scroll_hidden');
    }
  }

  if(headerCart.classList.contains('on')) {
    html.classList.add('scroll_hidden');
    body.classList.add('scroll_hidden');
  } else {
    html.classList.remove('scroll_hidden');
    body.classList.remove('scroll_hidden');
  }  
}
