// ===============================
// Sticky Navbar
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Typing Animation
// ===============================

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner",
    "UI Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.querySelector(".home-content h3");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent = currentWord.substring(0, letterIndex--);

        if (letterIndex == 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex == words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


// ===============================
// Scroll Reveal
// ===============================

const reveal = document.querySelectorAll(".about,.skills,.services,.portfolio,.education,.contact");

function revealSection() {

    reveal.forEach(sec => {

        const windowHeight = window.innerHeight;

        const revealTop = sec.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            sec.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();


// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};
