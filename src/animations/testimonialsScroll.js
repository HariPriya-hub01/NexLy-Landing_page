import gsap from "gsap";
import { ModifiersPlugin } from "gsap/dist/gsap";

gsap.registerPlugin(ModifiersPlugin);

export const animateTestimonials = () => {
  const row = document.querySelector(".testimonial-row");
  const cards = row.querySelectorAll(".testimonial-card");

  // Duplicate cards to make the loop seamless
  row.append(...Array.from(cards).map((card) => card.cloneNode(true)));

  gsap.to(".testimonial-card", {
    xPercent: -100,
    ease: "none",
    duration: 30,
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0),
    },
  });
};
