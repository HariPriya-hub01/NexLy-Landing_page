import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateBoardHeading = (headingRef) => {
  gsap.fromTo(
    headingRef.current,
    {
      rotation: -10,
      opacity: 0,
    },
    {
      rotation: 0,
      opacity: 1,
      duration: 1.2,
      ease: "bounce.out",
      transformOrigin: "top center",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    }
  );

  // Add a small swing effect after entrance
  gsap.to(headingRef.current, {
    rotation: 2,
    duration: 0.6,
    ease: "power2.inOut",
    yoyo: true,
    repeat: 3,
    delay: 1.2,
    transformOrigin: "top center",
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 80%",
    },
  });
};