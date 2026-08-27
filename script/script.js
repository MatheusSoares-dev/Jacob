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

const discoverTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".slide",
        scrub: 2,
        start: "center 50%",
        ease: "ease",
        markers: true
    }
})

discoverTl.to(".slideText1", {
    y: 200
})

discoverTl.to(".slideText2", {
    y: 200
})

discoverTl.to(".slideText3", {
    y: 200
})

discoverTl.to(".slideText4", {
    y: 200
})