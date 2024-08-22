let taglineAnimation = gsap.fromTo(
    ".tagline",
    {
      y: -10,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "sine.out"
    }
  );
  
  //on hover animation
  //this part doesnt work as i intended lol
  gsap.utils.toArray(".para").forEach((para) => {
    let animateThis = para.querySelector(".tagline");
  
    let hoverAnimation = gsap.to(animateThis, { y: -10, paused: true });
  
    para.addEventListener("mouseenter", () => {
      hoverAnimation.play();
    });
    para.addEventListener("mouseleave", () => {
      hoverAnimation.reverse();
    });
  });
  
  //the intended animation was to only animate the span im hovering over while ignoring the rest.