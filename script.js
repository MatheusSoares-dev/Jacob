gsap.registerPlugin(ScrollTrigger)


gsap.fromTo("#titulo", {
    scale: 3,
    y: -190,

}, {
    scale: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#titulo",
        start: "center center",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 2,
        ease: "expoScale(0.5,7,none)"
    }

})