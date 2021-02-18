burger = document.querySelector('.burger')
burger1 = document.querySelector('.menu-btn')
burger2 = document.querySelector('.menu-btn')
burger3 = document.querySelector('.burger-1')

const menuBtn = document.querySelector('.l-navbar');

menuBtn1 = document.querySelector('.menu-btn_burger');

menuBtn2 = document.querySelector('.menu-btn');

menuBtn3 = document.querySelector('body');

// side navbar burger
burger.addEventListener('click', () => {

    menuBtn.classList.add('open');
    menuBtn1.classList.add('open');
    menuBtn2.classList.add('open');
    menuBtn3.classList.add('open');
});
// close nav burger
burger1.addEventListener('click', () => {

    menuBtn.classList.remove('open');
    menuBtn1.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuBtn3.classList.remove('open');

});
// close nav burger
burger2.addEventListener('click', () => {

    menuBtn.classList.remove('open');
    menuBtn1.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuBtn3.classList.remove('open');

});
// small nav bar burger
burger3.addEventListener('click', () => {

    menuBtn.classList.add('open');
    menuBtn1.classList.add('open');
    menuBtn2.classList.add('open');
    menuBtn3.classList.add('open');
});
//top scroll start 
mybutton = document.getElementById("myBtn");
menun1 = document.querySelector('.burger');
menun2 = document.querySelector('.navbar-brand');
menun3 = document.querySelector('.main-nav');
menun4 = document.querySelector('.navbar');
menun5 = document.querySelector('.burger-1');
menun6 = document.querySelector('.main-nav-1');
menun7 = document.querySelector('body');
window.onscroll = function () { scrollFuncion() };

function scrollFuncion() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
        menun1.classList.add('open');
        menun2.classList.add('open');
        menun3.classList.add('open');
        menun4.classList.add('open');
        menun5.classList.add('open');
        menun6.classList.add('open');

    }
    else {
        mybutton.style.display = "none";
        menun1.classList.remove('open');
        menun2.classList.remove('open');
        menun3.classList.remove('open');
        menun4.classList.remove('open');
        menun5.classList.remove('open');
        menun6.classList.remove('open');

    }
}

function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//top scroll end

// drop down menu hover start
//drop 1
/*
var i = 0;
container1 = document.querySelector('.n-1');
m1 = document.querySelector('.d1');
container1.addEventListener('mouseover', function () {
    m1.classList.add('show');
})

container1.addEventListener('mouseout',function(){
    m1.addEventListener('mouseover',function(){
        i = 1;
    })    

    if(i){
        m1.classList.add('show');
    }
    else{
        m1.classList.remove('show');
        i = 0;
    }
    
})

// drop 2
container2 = document.querySelector('.n-2');
m2 = document.querySelector('.d2');
container2.addEventListener('mouseover', function () {
    m2.classList.add('show');
})

m2.addEventListener('mouseover', function () {
    m2.classList.add('show');
})

container2.addEventListener('mouseout',function(){
    m2.classList.remove('show');
})
// drop down menu hover end*/


//product slider
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }
});
//product slider
