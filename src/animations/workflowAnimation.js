import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateWorkflowItems = (containerRef) => {
  const items = containerRef.current.querySelectorAll(".checklist-item");

  // Optional: adjust scale/rotation based on screen width
  const isMobile = window.innerWidth < 640;
  const startScale = isMobile ? 0.5 : 0;
  const startRotation = isMobile ? -10 : -15;

  gsap.fromTo(
    items,
    { scale: startScale, rotation: startRotation, opacity: 0 },
    {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "restart none none none", // Replays on scroll
      },
    }
  );
};
