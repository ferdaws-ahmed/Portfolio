import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children, isLoading }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12, // Slightly faster responsiveness
      wheelMultiplier: 0.9, // Reducing input stress
      gestureOrientation: "vertical",
      smoothWheel: true,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rfId;
    function raf(time) {
      lenis.raf(time);
      rfId = requestAnimationFrame(raf);
    }

    rfId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rfId);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      isLoading ? lenisRef.current.stop() : lenisRef.current.start();
    }
  }, [isLoading]);

  return <>{children}</>;
};

export default SmoothScroll;