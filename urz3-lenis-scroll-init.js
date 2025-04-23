const lenis = new Lenis({ 
  lerp: 0.1, 
  wheelMultiplier: 0.87 
});

requestAnimationFrame(function raf(t) {
  lenis.raf(t);
  requestAnimationFrame(raf);
});
