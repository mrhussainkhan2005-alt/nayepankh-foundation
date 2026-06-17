// DARK MODE

const darkBtn = document.getElementById("darkBtn");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark");

if(darkBtn){
darkBtn.innerHTML="☀️";
}

}

if(darkBtn){

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");
darkBtn.innerHTML="☀️";

}else{

localStorage.setItem("theme","light");
darkBtn.innerHTML="🌙";

}

});

}

// COUNTERS

const counters =
document.querySelectorAll(".counter");

let started = false;

function startCounters(){

if(started) return;

started = true;

counters.forEach(counter=>{

const target =
+counter.dataset.target;

let count = 0;

const increment =
target / 100;

const update = ()=>{

count += increment;

if(count < target){

counter.innerText =
Math.floor(count)
.toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText =
target.toLocaleString()+"+";

}

};

update();

});

}

// INTERSECTION OBSERVER

const counterSection =
document.querySelector(".hero-right");

if(counterSection){

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounters();

observer.disconnect();

}

});

},{threshold:0.3});

observer.observe(counterSection);

}

// CONTACT FORM

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener(
"submit",
(e)=>{

e.preventDefault();

alert(
"Thank you for contacting NayePankh Foundation."
);

contactForm.reset();

});

}

// HERO BUTTONS

const heroButtons =
document.querySelectorAll(
".primary-btn"
);

heroButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

const contact =
document.getElementById(
"contact"
);

if(contact){

contact.scrollIntoView({
behavior:"smooth"
});

}

});

});

// TOP BUTTON

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 400){

topBtn.style.display =
"block";

}else{

topBtn.style.display =
"none";

}

}
);

if(topBtn){

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}

// REVEAL ANIMATION

const revealElements =
document.querySelectorAll(
".bento-card,.program-card,.story,.cta"
);

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},{
threshold:0.1
});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(70px)";

el.style.transition=
"all 1.1s cubic-bezier(.22,1,.36,1)";

revealObserver.observe(el);

});

// NAVBAR ACTIVE LINKS

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 200;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove(
"active"
);

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add(
"active"
);

}

});

});

const glow =
document.getElementById(
"cursorGlow"
);

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener(
"mousemove",
(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});

function animateGlow(){

currentX +=
(mouseX-currentX)*0.08;

currentY +=
(mouseY-currentY)*0.08;

glow.style.left =
currentX + "px";

glow.style.top =
currentY + "px";

requestAnimationFrame(
animateGlow
);

}

animateGlow();

const cards =
document.querySelectorAll(".bento-card");

cards.forEach(card => {

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
(x / rect.width - 0.5) * 10;

const rotateX =
(y / rect.height - 0.5) * -10;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
`
perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0)
`;

});

});