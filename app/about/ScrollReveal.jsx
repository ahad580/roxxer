"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const opts = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.12,
    };

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          // reveal
          el.classList.add('reveal');
          // lazy-load images with data-src
          if (el.tagName === 'IMG' && el.dataset.src) {
            el.src = el.dataset.src;
            el.removeAttribute('data-src');
          }
          // for containers, check images inside
          el.querySelectorAll && el.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          });
          observer.unobserve(el);
        }
      });
    }, opts);

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      // make sure starting state
      el.classList.remove('reveal');
      io.observe(el);
    });

    // cleanup
    return () => io.disconnect();
  }, []);

  return null;
}
