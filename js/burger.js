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
menun8 = document.querySelector('.can1 svg');
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
        menun8.classList.add('open');

    }
    else {
        mybutton.style.display = "none";
        menun1.classList.remove('open');
        menun2.classList.remove('open');
        menun3.classList.remove('open');
        menun4.classList.remove('open');
        menun5.classList.remove('open');
        menun6.classList.remove('open');
        menun8.classList.remove('open');

    }
}
//top scroll start
function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//top scroll end

//search clear start
c1 = document.querySelector('.can1');

function getsearchvalue(){
    var searchval =document.getElementById("myInput").value;
    if (searchval) {
        c1.classList.add('open');
    }
    else{
        c1.classList.remove('open');
    }
}

function clearsearch(){
    document.getElementById("myInput").value='';
    getsearchvalue()
}
//search clear end

/*scroll left right start*/

scr1 = document.querySelector('.containe');
bt1 = document.querySelector('.btn-left');
bt2 = document.querySelector('.btn-right');
scrollFuncion1()

var maxscrollleft = $(scr1).width()-6.5;

scr1.onscroll = function () { scrollFuncion1() };
function scrollFuncion1() {
    if (scr1.scrollLeft > 30 || scr1.scrollLeft > 30) {
        bt1.classList.add('open');
    }
    else{
       bt1.classList.remove('open');
    }

    if (scr1.scrollLeft > maxscrollleft || scr1.scrollLeft > maxscrollleft) {
        bt2.classList.remove('open');
    }
    else{
       bt2.classList.add('open');
    }

}


var sc=0;

function rightfunction(){
    sc+=50;
    scr1.scrollLeft = sc;
    scr1.scrollLeft = sc;
}

function leftfunction(){
    sc=sc-50;
    scr1.scrollLeft = sc;
    scr1.scrollLeft = sc;
}

/*scroll left right end*/



/*scroll left right start 2*/

scr21 = document.querySelector('.containe2');
bt21 = document.querySelector('.btn2-left');
bt22 = document.querySelector('.btn2-right');
scrollFuncion2()

var maxscrollleft2 = $(scr1).width()-6.5;

scr21.onscroll = function () { scrollFuncion2() };

function scrollFuncion2() {
    if (scr21.scrollLeft > 30 || scr21.scrollLeft > 30) {
        bt21.classList.add('open');
    }
    else{
       bt21.classList.remove('open');
    }

    if (scr21.scrollLeft > maxscrollleft2 || scr21.scrollLeft > maxscrollleft2) {
        bt22.classList.remove('open');
    }
    else{
       bt22.classList.add('open');
    }

}


var sc2=0;

function rightfunction2(){
    sc2+=50;
    scr21.scrollLeft = sc2;
    scr21.scrollLeft = sc2;
}

function leftfunction2(){
    sc2=sc2-50;
    scr21.scrollLeft = sc2;
    scr21.scrollLeft = sc2;
}

/*scroll left right 2 end*/



// drop down menu hover end
drop1 = document.querySelector('.d1');
m1 = document.querySelector('.s-1');


drop1.addEventListener('mouseover', function () {
    m1.classList.add('shoow');
})

drop1.addEventListener('mouseout', function () {
    m1.classList.remove('shoow')
})


drop2 = document.querySelector('.d2');
m2 = document.querySelector('.s-2');

z2 = document.querySelector('.s11');
drop2.addEventListener('mouseover', function () {
    m2.classList.add('shoow');
    z2.classList.add('s111');
})

drop2.addEventListener('mouseout', function () {
    m2.classList.remove('shoow');
    z2.classList.remove('s111');
})

// drop down menu hover end

//product slider
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});
//product slider
