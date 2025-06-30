// animations/spreadCards.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const spreadCards = (cardsRef, containerRef) => {
  if (!cardsRef.current || !containerRef.current) return;

  gsap.set(cardsRef.current, {
    opacity: 0,
    y: 60,
  });

  ScrollTrigger.batch(cardsRef.current, {
    start: "top 85%",
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.in",
      });
    },
  });
};
