document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    let animations = [
        {
            elements: ".project-box",
            trigger: "#illustration",
            y: 50,
            opacity: 0
        },
        {
            elements: ".poster-box",
            trigger: "#poster",
            scale: 0.8,
            opacity: 0
        },
        {
            elements: ".editorial-box",
            trigger: "#editorial",
            y: 50,
            opacity: 0
        },
        {
            elements: ".web-box",
            trigger: "#web",
            y: 30,
            opacity: 0
        },
        {
            elements: "#internship .internship-card",
            trigger: "#internship",
            y: 30,
            opacity: 0
        },
        {
            elements: ".carousel",
            trigger: "#animation",
            y: 50,
            opacity: 0
        },
        {
            elements: ".carousel-inner img",
            trigger: "#animation",
            scale: 0.9,
            opacity: 0
        }
    ];

    animations.forEach(anim => {
        gsap.from(anim.elements, {
            opacity: anim.opacity,
            y: anim.y || 0,
            scale: anim.scale || 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: anim.trigger,
                start: anim.start || "top 80%",
                toggleActions: "restart none none restart"
            }
        });
    });

    // Efecto de bounce en los botones del carrusel
    document.querySelectorAll(".carousel-control-prev, .carousel-control-next").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "bounce.out" });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });
    });
});
