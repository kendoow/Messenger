const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});

const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".main__menu");


menuBtn.addEventListener('click', function(){
  menu.classList.toggle('active');
});

