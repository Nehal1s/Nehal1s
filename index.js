
var secondSection = document.querySelector('.projects')
var details = document.querySelector('.details')
var smallCont = document.querySelectorAll(".small-cont");
var myAudio = new Audio('sengeki.mp3')

function load(){
    document.querySelector('.name').style.opacity = "0";
    document.querySelector('.carrera').style.opacity = "0"; 
    document.querySelector('.picture').style.opacity = "0"; 
    console.log('loaded');
    myAudio.volume = 0.05
    myAudio.play();
    if (typeof myAudio.loop == 'boolean')
    {
        myAudio.loop = true;
    }
    else
    {
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}

var a = true
function grab() {
    document.querySelector('.grab').classList.toggle( a ? 'snap' : '')
    a != a
}

document.querySelector('.audioWaves').addEventListener('click', (e)=>{
    if(!myAudio.paused){
        document.querySelectorAll('.loading .x').forEach(element => {
                element.style.animationPlayState = 'paused'
        });
        var vol = 0.05
        var setup = setInterval(() => {
            if (vol >= 0) {
                myAudio.volume = vol
                vol -= 0.01
            }
            else{
                myAudio.pause()
                clearInterval(setup)
            }
        }, 100);
    }
    else{
        document.querySelectorAll('.loading .x').forEach(element => {
                element.style.animationPlayState = 'running'
        });
        var vol = 0.0
        myAudio.play()
        var setup = setInterval(() => {
            if (vol <= 0.08) {
                myAudio.volume = vol
                vol += 0.01
            }
            else{
                clearInterval(setup)
            }
        }, 100);
    }

})
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
        smallCont[i].style.animationDelay = 0.8/(i + 03)  +'s';
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

//scrolling to views

const scrollContainer = document.querySelector(".container");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 10;
    console.log(evt.deltaY * 10);
    damn()
});



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
    var epp = setInterval(() => {
        var isIn = isInViewport(secondSection);
        console.log(isIn);
        isIn ? fadeup() : fadeupnot()
    }, 500);
    setTimeout(() => {
        clearInterval(epp)
    }, 1000);
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

// other shits

document.getElementById('toSecond').addEventListener('click',()=>{
    fadeup()
})

document.querySelectorAll('.flusshout').forEach(element => {
    element.addEventListener('click',()=>{
        fadeupnot()
    })
});

// Some shit that can't do in css or even in scss

const names = ["Mungaliya Haat", "Burnout-predictor", "Car number plate detection model", "My Porfolio", "SOS Location Sharing App", "mAyAnK's portfolio"];
const info = ['This is an informational website about a village, situated in Madhya Pradesh known as Mughaliya Hat. It presents the names, along with the pictures of all the places to visit in and around the village, information on influential people, families and members of the Gram Panchayat.\n\nMoreover, a graph that constitutes the total population of the village over the years.', 'Burnout-predictor is a machine learning model specifically trained to predict burnout rates (stress level) in employees.\n\nIt takes input from the user and according to the input value, it provides predicted burnout rate, as the output.\n\nTo make things effortless, we also created a user friendly frontend and connected our model to it.', "This project is a neural network model which detects number plates on vehicles (more accurately on cars), Identifies the digits, then stores it into the database. You either upload clips or pictures into the system and the program provides the contents of the the number plate(s).\n\nIt is time saving and makes life easier for theft catching authorities.\n\nWe can further improve this system, if we're able to connect this program directly to the security cameras, it would print the numbers on the spot, furthermore, it would eliminate the need to manually upload clips/images, however this option would still be there, but secondary.", 'This is my portfolio as you can see', 'The app delievers an sos message to your close ones to rescue you when shit get real', 'This is a portfolio i made in my early days of learning Web Development']

const images = ['']


var image = document.querySelector('.image')
var aName = document.querySelector('.p-name')
var brief = document.querySelector('.brief')
var img = document.querySelector('.image')
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
