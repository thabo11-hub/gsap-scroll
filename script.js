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
