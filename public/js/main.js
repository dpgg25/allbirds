const collTabBtn = document.querySelectorAll('.collection .tab > a');
const collUl = document.querySelectorAll('.collection .ul_wrap > ul');

let activeCont = '';
for(var i = 0; i < collTabBtn.length; i++){
  collTabBtn[i].addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < collTabBtn.length; j++){
      collTabBtn[j].classList.remove('on');
      collUl[j].classList.remove('on');
    }
    this.classList.add('on');

    activeCont = this.getAttribute('href');
    document.querySelector("#" + activeCont).classList.add("on");
  });
}