const animatedText = $(".animated-text");

function animate(element) {
    const textArray = element.innerText.split("");
    element.firstChild.remove();

    const elArray = textArray.map((letter, index) => {
        if (letter == " ") letter = "&nbsp;";
        const el = document.createElement("span");
        el.className = "letter";
        el.innerHTML = letter;
        el.style.animationDelay = index / textArray.length + "s";
        element.appendChild(el);
        return el;
    });

    element.innerHtml = elArray;
}

function text_reveal(method) {
    const textWidget = "h2.animated-text";
    const singleLetter = "span.letter";

    const changeText = (newtext) => {
        jQuery(textWidget).text(newtext);
    };

    const tl = gsap.timeline({ repeat: -1, duration: 0.2 });

    tl.fromTo(
        singleLetter,
        { rotateX: "90deg" },
        { rotateX: "0deg", stagger: 0.1, ease: "power.out" },
        ">25%"
    );

    tl.call(changeText, ["Consistently/Reliably/Profitably"], "+=5");
    // tl.call(changeText, ["Consistently", "Reliably", "Profitably"], "+=5");

    tl.call(method);
    tl.fromTo(
        singleLetter,
        { rotateX: "90deg" },
        { rotateX: "0deg", stagger: 0.1, ease: "power.out" },
        ">25%"
    );
    tl.call(changeText, ["With Our Proven Practice Programs"], "+=5");
    tl.call(method);
}

text_reveal(Array.from(animatedText).map(animate));
