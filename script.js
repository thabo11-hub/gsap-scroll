gsap.registerPlugin("ScrollTrigger");

let scene = gsap.timeline();
let intro_t1 = gsap.timeline();
let part1_t1 = gsap.timeline();
let part2_t1 = gsap.timeline();
let part3_t1 = gsap.timeline();
let part4_t1 = gsap.timeline();
let part5_t1 = gsap.timeline();
let outro_t1 = gsap.timeline();

ScrollTrigger.create({
  trigger: "#container",
  pin: true,
  start: "top top",
  end: "+=5700",
});

gsap.set(".specs", {
  x: -160,
  opacity: 0,
});

gsap.set(".chars", {
  x: 260,
});

part2_t1.set(".models li", {
  opacity: 0,
});

part3_t1.set(".specs dt", {
  opacity: 0,
});

part3_t1.set(".specs dd", {
  opacity: 0,
});

part4_t1.set(".chars h2", {
  opacity: 0,
});

part4_t1.set(".chars dt", {
  opacity: 0,
});

part4_t1.set(".chars dd", {
  opacity: 0,
});

intro_t1
  .fromTo(
    "#wrapWin",
    {
      height: 80,
    },
    {
      height: 800,
      duration: 0.1,
    }
  )
  .fromTo(
    "liberty",
    {
      scale: 0.8,
      y: -300,
    },
    {
      scale: 1,
      y: 0,
      duration: 0.1,
    }
  )
  .to("#logo", {
    scrollTrigger: {
      start: 300,
      end: 500,
      scrub: 0.5,
    },
    y: -190,
    scale: 0.6,
    duration: 0.6,
    ease: "expo.out",
  })
  .to("#intro-h1", {
    scrollTrigger: {
      start: 500,
      end: 700,
      scrub: 0.5,
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out",
  })
  .to("#intro-h3", {
    scrollTrigger: {
      start: 550,
      end: 750,
      scrub: 0.5,
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out",
  });

part1_t1.fromTo(
  "#liberty",
  {
    scale: 1,
    y: 0,
  },
  {
    scale: 0.8,
    y: -300,
    duration: 1,
    ease: "sine.out",
    scrollTrigger: {
      start: 1000,
      end: 1200,
      scrub: 0.5,
    },
  }
);
