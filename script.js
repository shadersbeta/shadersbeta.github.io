document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Bar
    const scrollBar = document.getElementById('scrollBar');
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / height) * 100;
        scrollBar.style.width = scrolled + '%';
    });

    // 2. Fade In Animation (Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
