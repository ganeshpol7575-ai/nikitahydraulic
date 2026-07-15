/* ==========================================
   NIKITA HYDRAULIC
   PREMIUM WEBSITE
   SCRIPT PART 1
========================================== */

// ===============================
// Cursor Glow
// ===============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    if(glow){

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    }

});

// ===============================
// Header Scroll Effect
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(7,7,7,.92)";
        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.40)";

    }else{

        header.style.background = "rgba(7,7,7,.65)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".about-card,.product-card,.why-card,.industry-card,.stat-card,.process-card,.info-box"
);

const reveal = () => {

    revealElements.forEach((item)=>{

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";

        }

    });

};

reveal();

window.addEventListener("scroll",reveal);

// Initial Style

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".7s ease";

});

// ===============================
// Contact Form
// ===============================

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank You!\n\nYour enquiry has been received.\nOur team will contact you shortly."
);

form.reset();

});

}
/* ==========================================
   NIKITA HYDRAULIC
   SCRIPT PART 2
========================================== */

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show");

});

}


// ===============================
// Floating Animation
// ===============================

const cards = document.querySelectorAll(".hero-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ===============================
// Contact Form → WhatsApp
// ===============================

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const data=this.querySelectorAll("input,textarea");

const name=data[0].value;
const company=data[1].value;
const mobile=data[2].value;
const email=data[3].value;
const product=data[4].value;
const req=data[5].value;

const msg=

`*NEW ENQUIRY*

Name : ${name}

Company : ${company}

Mobile : ${mobile}

Email : ${email}

Product : ${product}

Requirement :

${req}`;

window.open(

`https://wa.me/918149002309?text=${encodeURIComponent(msg)}`,

"_blank"

);

this.reset();

});

}


// ===============================
// Footer Year
// ===============================

const year=document.querySelector(".footer-copy");

if(year){

year.innerHTML=

`© ${new Date().getFullYear()} NIKITA HYDRAULIC. All Rights Reserved.`;

}


// ===============================
// Console Message
// ===============================

console.log(

"NIKITA HYDRAULIC WEBSITE LOADED SUCCESSFULLY"

);
