
var secondSection = document.querySelector('#second')
var details = document.querySelector('.details')
var smallCont = document.querySelectorAll(".small-cont");


function load(){
    document.querySelector('.name').style.opacity = "0";
    document.querySelector('.carrera').style.opacity = "0"; 
    document.querySelector('.picture').style.opacity = "0"; 
    console.log('loaded');
}
var a = true
function grab() {
    document.querySelector('.grab').classList.toggle( a ? 'snap' : '')
    a != a
}


// popup Mechnisms and early animation binder
function popclose() {
    document.querySelector('.popup').style.display = 'none'
    document.querySelector('.name').style.animation = "fadeup 0.7s 1 forwards";
    document.querySelector('.carrera').style.animation = "fadeup 0.7s 1 forwards"; 
    document.querySelector('.carrera').style.animationDelay = "0.2s"; 
    document.querySelector('.picture').style.animation = "fadeup 0.7s 1 forwards"; 
    document.querySelector('.picture').style.animationDelay = "0.4s"; 
}

// animation toggler
function fadeup() {
    var i
    for (i = 0; i < smallCont.length; i++) {
        smallCont[i].style.opacity = "0";
        smallCont[i].style.animation = "fadeup 0.7s 1 forwards";
        smallCont[i].style.animationDelay = i/18  +'s';
    }
}

// animation toggler
function fadeupnot() {
    var i
    for (i = 0; i < smallCont.length; i++) {
        smallCont[i].style.opacity = "1";
        smallCont[i].style.animation = "fadedown 0.4s 1 forwards";
        smallCont[i].style.animationDelay = i/18 +'s';
        smallCont[i].addEventListener('mouseover',()=>{
            details.style.opacity = '1'
        })
    }
}



//viewChange inspector
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// conditonal inspector
function damn() {
    setTimeout(() => {
        var isIn = isInViewport(secondSection);
        isIn ? fadeup() : fadeupnot()
    }, 700);
}


// keydown inspector
document.onkeydown = (e)=> {
    switch (e.keyCode) {
        case 37:
            damn();
            break;
        case 39:
            damn();
            break;
    }
}


// Some shit that can't do in css or even in scss

const names = ["Mungaliya Haat", "Burnout Calculator", "Web Novel", "My Porfolio", "SOS Location Sharing App", "None"];
var info = ['It is a promotional Website for Mungaliya Village', 'Burnout Calculator is ML service that predict mental and physiscal stress level of an emplyee', 'Webnovel is a book exchanging platform for BookWorms', 'This is my portfolio as you can see', 'The app delievers an sos message to your close ones to rescue you when shit get real', 'Undefind: OutofIndex']



var image = document.querySelector('.image')
var aName = document.querySelector('.p-name')
var brief = document.querySelector('.brief')
var i
for (i = 0; i < smallCont.length; i++) {
    console.log(i);
    var filles = names[i];
    smallCont[i].setAttribute('id',`${i}`)
    smallCont[i].addEventListener('mouseenter',(e)=>{
            details.style.opacity = '1'
            details.style.zIndex  = '5'
            details.style.background = '#2815338e'
            details.style.backdropFilter = 'blur(10px)'
            image.style.transitionDelay = '0s'
            image.style.opacity = '1'
            image.style.transform = 'translateY(0px)'
            aName.style.transitionDelay = '0.2s'
            aName.style.opacity = '1'
            aName.innerText = names[e.target.id]
            aName.style.transform = 'translateY(0px)'
            brief.style.transitionDelay = '0.4s'
            brief.style.opacity = '1'
            brief.style.transform = 'translateY(0px)'
            brief.innerText = info[e.target.id]
            // console.log(e.target.getAttribute('id'));
    })
    smallCont[i].addEventListener('mouseleave',()=>{
        details.style.opacity = '0'
            image.style.transform = 'translateY(50px)'
            image.style.transitionDelay = '0.4s'
            image.style.opacity = '0'
            aName.style.transform = 'translateY(50px)'
            aName.style.transitionDelay = '0.2s'
            aName.style.opacity = '0'
            brief.style.transform = 'translateY(50px)'
            brief.style.transitionDelay = '0s'
            brief.style.opacity = '0'
            details.style.zIndex = '0'
            details.style.backdropFilter = 'none'
            details.style.background = 'none'        
    })
}