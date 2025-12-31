"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      inner.style.left = `${e.clientX}px`;
      inner.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      const speed = 0.19;
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * speed;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * speed;

      outer.style.left = `${outerPos.current.x}px`;
      outer.style.top = `${outerPos.current.y}px`;
      

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer"></div>
      <div ref={innerRef} className="cursor-inner"></div>
    </>
  );
}
