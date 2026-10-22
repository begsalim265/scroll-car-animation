gsap.registerPlugin(ScrollTrigger);


/* =========================
   ELEMENTS
========================= */

const car = document.getElementById("car");

const trail = document.getElementById("trail");

const letters = gsap.utils.toArray(".value-letter");

const valueText = document.getElementById("valueText");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");


/* =========================
   CAR SETTINGS
========================= */

const carWidth = 150;

const roadWidth = window.innerWidth;

const endX = roadWidth - carWidth;


/* =========================
   LETTER POSITIONS
========================= */

const valueRect = valueText.getBoundingClientRect();

const letterOffsets = letters.map(
    letter => letter.offsetLeft
);


/* =========================
   MAIN CAR ANIMATION
========================= */

gsap.to(car, {

    x: endX,

    ease: "none",

    scrollTrigger: {

        trigger: ".section",

        start: "top top",

        end: "bottom top",

        scrub: true,

        pin: ".track"

    },

    onUpdate: function () {

        /* Current car position */

        const carX =
            gsap.getProperty(car, "x")
            + carWidth / 2;


        /* =====================
           REVEAL LETTERS
        ===================== */

        letters.forEach((letter, index) => {

            const letterX =
                valueRect.left
                + letterOffsets[index];


            if (carX >= letterX) {

                letter.style.opacity = "1";

            } else {

                letter.style.opacity = "0";

            }

        });


        /* =====================
           GREEN TRAIL
        ===================== */

        gsap.set(trail, {

            width: carX

        });

    }

});


/* =========================
   STATISTIC 1
========================= */

gsap.to(box1, {

    opacity: 1,

    scrollTrigger: {

        trigger: ".section",

        start: "top+=400 top",

        end: "top+=600 top",

        scrub: true

    }

});


/* =========================
   STATISTIC 2
========================= */

gsap.to(box2, {

    opacity: 1,

    scrollTrigger: {

        trigger: ".section",

        start: "top+=600 top",

        end: "top+=800 top",

        scrub: true

    }

});


/* =========================
   STATISTIC 3
========================= */

gsap.to(box3, {

    opacity: 1,

    scrollTrigger: {

        trigger: ".section",

        start: "top+=800 top",

        end: "top+=1000 top",

        scrub: true

    }

});


/* =========================
   STATISTIC 4
========================= */

gsap.to(box4, {

    opacity: 1,

    scrollTrigger: {

        trigger: ".section",

        start: "top+=1000 top",

        end: "top+=1200 top",

        scrub: true

    }

});