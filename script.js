document.addEventListener("DOMContentLoaded", () => {
    // Reveal Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // Parallax Profile Effect
    document.addEventListener("mousemove", (e) => {
        const frame = document.querySelector(".glass-frame");
        if(frame) {
            const x = (window.innerWidth / 2 - e.pageX) / 45;
            const y = (window.innerHeight / 2 - e.pageY) / 45;
            frame.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        }
    });

    // Horizontal Scroll for Mockups using Mouse Wheel
    const scrollContainer = document.querySelector(".mockup-scroll-container");
    if (scrollContainer) {
        scrollContainer.addEventListener("wheel", (evt) => {
            if (evt.deltaY !== 0) {
                evt.preventDefault();
                scrollContainer.scrollLeft += evt.deltaY;
            }
        });
    }
});