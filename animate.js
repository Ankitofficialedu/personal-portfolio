// ✅ Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ✅ Wait until the page is fully loaded
window.addEventListener("load", () => {
  // Create the scroll animation
  gsap.fromTo("#hide",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#hide",
        start: "top 20%", // when the top of #hide is 80% down the viewport
        toggleActions: "play none none reverse",
        markers: false,
         // 👈 shows debug markers; remove later
      }
    }
  );
});
