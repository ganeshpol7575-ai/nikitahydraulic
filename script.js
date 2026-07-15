/* ===========================================
   NIKITA HYDRAULIC
   PREMIUM UI
   SCRIPT PART 1
=========================================== */

/* Mouse Glow */

const mouseLight = document.querySelector(".mouse-light");

document.addEventListener("mousemove", (e) => {
    mouseLight.style.left = e.clientX + "px";
    mouseLight.style.top = e.clientY + "px";
});


/* Header Scroll */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background="rgba(5,5,5,.95)";
        header.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

    }else{

        header.style.background="rgba(5,5,5,.55)";
        header.style.boxShadow="none";

    }

});


/* Quote Popup */

const popup=document.getElementById("quotePopup");

const quoteBtn=document.getElementById("quoteBtn");

const quoteBtn2=document.getElementById("quoteBtn2");

const closeBtn=document.querySelector(".close-popup");

quoteBtn.onclick=()=>{

popup.style.display="flex";

}

quoteBtn2.onclick=()=>{

popup.style.display="flex";

}

closeBtn.onclick=()=>{

popup.style.display="none";

}

/* Close Outside */

window.onclick=(e)=>{

if(e.target==popup){

popup.style.display="none";

}

}

/* ESC Close */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

popup.style.display="none";

}

});


/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* Hero Animation */

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});
