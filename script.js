/*==========================================
NIKITA HYDRAULIC
Premium JavaScript
==========================================*/

/* Sticky Navbar */

window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(255,255,255,.97)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.90)";
header.style.boxShadow="none";

}

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});


/* Fade Animation */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});


document.querySelectorAll(
".why-card,.product-card,.industry-card,.step,.faq-box,.trust-box,.contact-card"
).forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition=".8s";

observer.observe(el);

});


/* Counter */

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=40;

const timer=setInterval(()=>{

count++;

counter.innerText=count+"+";

if(count>=target){

counter.innerText=target+"+";

clearInterval(timer);

}

},speed);

}

update();

});


/* Floating Button */

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.12)"

},

{

transform:"scale(1)"

}

],{

duration:1200

});

},2500);



console.log("Nikita Hydraulic Website Loaded Successfully");
