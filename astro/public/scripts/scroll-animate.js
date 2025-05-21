document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fadein-up');
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          // 一度だけアニメしたい場合はunobserve
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  targets.forEach((el) => observer.observe(el));
});
