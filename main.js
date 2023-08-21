gsap.registerPlugin(ScrollTrigger);

// Hero Section
const heroTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top bottom",
        toggleActions: "play none restart nonee"
    },
});

heroTl.from(".gsap-nav-item", {
    y: -30,
    opacity: 0,
    ease: "back",
    stagger: 0.2,
});

heroTl.from(".gsap__hero__item", {
    y: 30,
    opacity: 0,
    stagger: 0.2,
});

heroTl.from(".hero__illustration", {
    y: 30,
    opacity: 0,
});

heroTl.from(".hero__illustration__img", {
    rotate: 90,
    repeat: -1,
    yoyo: true,
    duration: 15
});

gsap.to(".hero__illustration__text", {
    y: "-115px",
    repeat: -1,
    duration: 10,
    yoyo: true,
    opacity: 1,
    delay: 2,
});


// Project Section -- Horizontal scroll
const horizontalSections = gsap.utils.toArray(".horizontal");
horizontalSections.forEach(section => {
    let animeWrap = section.querySelector(".horizontal__animation-wrap");
    let animeContentWrap = section.querySelector(".animation__content__wrap");

    let getToValue = () => -(animeContentWrap?.scrollWidth - window.innerWidth / 2);

    // On mobile
    if (window.innerWidth < 650) {
        getToValue = () => -(animeContentWrap?.scrollWidth - window.innerWidth / 2 - 140);
    }
    // Animating anime wrap
    gsap.fromTo(
        animeWrap,
        {x : () => (animeWrap.classList.contains("to--right") ? 0 : getToValue())},
        {x : () => (animeWrap.classList.contains("to--right") ? getToValue() : 0),
            ease: "none",
            scrollTrigger: {
                trigger: animeWrap,
                start: "top top",
                end: () => "+=" + (animeContentWrap?.scrollWidth - window.innerWidth / 2 - 120),
                pin: animeWrap,
                invalidateOnRefresh: true,
                scrub: true,
            },
        }
    );
});

const projectsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top bottom",
        toggleActions: "restart none none none",
    }
});

// Title animation
projectsTl.from(".projects__main__title",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back",
});

// Card animation
projectsTl.from(".gsap-project__item",{
    y: 30,
    opacity: 0,
    stagger: 0.2,
});

// Profile Section animation
const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        toggleActions: "restart none restart none",
    },
});

aboutTl.from(".gsap-about__item",{
    y: 30,
    opacity: 0,
    stagger: 0.3,
});

// Tech section
const techTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".tech",
        start: "top bottom",
        toggleActions: "restart none restart none",
    },
});

techTl.from(".gsap-tech__item",{
    opacity: 0,
    scale: 0.5,
    ease: "back",
    duration: 0.5,
    stagger: 0.3,
});

// Contact section
const conactTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top bottom",
        toggleActions: "restart none restart none",
    },
});

conactTl.from(".gsap-contact__item",{
    y: 30,
    opacity: 0,
    delay: 0.5,
    stagger: 0.3,
});