import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHeading = (headingRef, spanRef) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  });

  tl.fromTo(headingRef.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: "power4.out" }).fromTo(
    spanRef.current,
    { x: 300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)", // bounce effect
    },
    "-=0.5" // starts half a second after heading
  );
};
