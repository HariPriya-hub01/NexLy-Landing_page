import gsap from "gsap";

export const animateHeroSection = (containerRef, wordRef, words) => {
  const heading = containerRef.current.querySelector("h1");
  const paragraph = containerRef.current.querySelector("p");
  const buttons = containerRef.current.querySelectorAll("a");
  const video = containerRef.current.querySelector("video");

  // Animate heading
  gsap.fromTo(heading, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });

  // Animate paragraph
  gsap.fromTo(paragraph, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" });

  // Animate buttons
  gsap.fromTo(
    buttons,
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 1,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }
  );

  // Animate video fade in
  if (video) {
    gsap.fromTo(
      video,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 1.2,
        ease: "power2.out",
      }
    );
  }

  // Word carousel animation (fade in/out)
  let index = 0;
  if (wordRef.current) wordRef.current.textContent = words[0];

  setInterval(() => {
    if (!wordRef.current) return;

    gsap.to(wordRef.current, {
      duration: 0.5,
      onComplete: () => {
        index = (index + 1) % words.length;
        wordRef.current.textContent = words[index];
        gsap.to(wordRef.current, { opacity: 1, duration: 0.9 });
      },
    });
  }, 3000);
};
