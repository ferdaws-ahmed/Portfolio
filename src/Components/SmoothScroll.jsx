import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children, isLoading }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      // --- THE SECRET SAUCE ---
      duration: 1.5, // 1.2 theke 1.5 er moddhe thakle smooth feel ashe
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom Cubic Easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1, // High sensitivity-r jonno 1 e thaka bhalo
      touchMultiplier: 2, 
      infinite: false,
    });

    lenisRef.current = lenis;

    // --- REFRESH LOGIC ---
    const resizeObserver = new ResizeObserver(() => {
      lenis.dimensions.onWindowResize(); // Lenis-er built-in method call kora better
    });
    resizeObserver.observe(document.body);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rfId = requestAnimationFrame(raf);

    // Click behavior (Anchor links) smoothly handle korar jonno
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        lenis.scrollTo(id, { offset: 0, duration: 1.5 });
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rfId);
      resizeObserver.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (isLoading) {
        lenisRef.current.stop();
        document.body.style.overflow = 'hidden';
      } else {
        // Halka delay dile content render hobar por scroll smooth hoy
        setTimeout(() => {
          lenisRef.current.start();
          document.body.style.overflow = 'auto';
          lenisRef.current.resize(); 
        }, 100);
      }
    }
  }, [isLoading]);

  return <>{children}</>;
};

export default SmoothScroll;