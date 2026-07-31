/* ==========================
   Smooth Scroll Animation
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });

    });

});


/* ==========================
   Navbar Shadow on Scroll
========================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        nav.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

        nav.style.padding="18px 8%";

    }

    else{

        nav.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

        nav.style.padding="22px 8%";

    }

});


/* ==========================
   Fade Cards In
========================== */

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});


/* ==========================
   Back To Top Button
========================== */

const button=document.createElement("button");

button.innerHTML="↑";

button.id="topBtn";

document.body.appendChild(button);

button.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        button.style.display="block";

    }

    else{

        button.style.display="none";

    }

});