import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatePricingCards = (containerRef) => {
  const cards = containerRef.current.querySelectorAll(".pricing-card");

  gsap.fromTo(
    cards,
    { y: 100, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    }
  );
};
