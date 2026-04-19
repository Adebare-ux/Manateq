import { useRef, useState, useEffect } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    if (!ref.current || vis) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          io.disconnect();
        }
      },
      {
        threshold: options.threshold ?? 0.18,
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px",
      }
    );

    io.observe(ref.current);
    return () => io.disconnect();
  }, [vis, options.threshold, options.root, options.rootMargin]);

  return [ref, vis];
}