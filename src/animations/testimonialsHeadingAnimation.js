import gsap from "gsap";

export const animateTestimonialsHeading = (headingRef) => {
  const text = "What People are saying";
  const target = headingRef.current;
  target.innerHTML = ""; // Clear initial text

  const letters = text.split("");
  const tl = gsap.timeline();

  letters.forEach((letter, index) => {
    tl.to(target, {
      duration: 0.05,
      onUpdate: () => {
        target.innerHTML = text.slice(0, index + 1);
      },
    });
  });

  // After typing, add animated dots
  tl.to({}, { duration: 0.5 }).call(() => {
    const dotSpan = document.createElement("span");
    dotSpan.classList.add("dots");
    target.appendChild(dotSpan);

    gsap.to(dotSpan, {
      keyframes: [
        { textContent: ".", duration: 0.4 },
        { textContent: "..", duration: 0.4 },
        { textContent: "...", duration: 0.4 },
      ],
      repeat: -1,
    });
  });
};
