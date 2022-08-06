let i = 0;
let words = ["Grow Your Practice", "Consistently", "Reliably", "Profitably"];

let text = document.querySelector(".animated-text");
text.textContent = words[i];
addSpan(text);

function addSpan(text) {
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
}

const DURATION = 1000 * 1.5;


function myAnim(len) {
    anime
        .timeline({
            changeComplete: function (anim) {
                if (i + 1 < words.length) {
                    text.textContent = words[++i % len];
                    addSpan(text);
                    myAnim(words.length)
                }
            },
        })
        .add({
            targets: ".animated-text span",
            rotateX: [90, 0],
            easing: "easeOutExpo",
            duration: 1000 * 1.5,
            delay: anime.stagger(100),
        });
}

myAnim(words.length);