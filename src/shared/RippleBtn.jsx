import React, { useRef } from "react";

export function RippleBtn({ children, style, onClick, className }) {
  const ref = useRef();

  const click = (e) => {
    const b = ref.current;
    if (!b) {
      onClick && onClick(e);
      return;
    }

    const r = b.getBoundingClientRect();
    const sz = Math.max(b.offsetWidth, b.offsetHeight);
    const x = e.clientX || r.left + r.width / 2;
    const y = e.clientY || r.top + r.height / 2;

    const dot = document.createElement("span");
    dot.className = "ripple-dot";
    dot.style.cssText = `width:${sz}px;height:${sz}px;left:${x - r.left - sz / 2}px;top:${y - r.top - sz / 2}px`;
    b.appendChild(dot);

    setTimeout(() => dot.remove(), 600);
    onClick && onClick(e);
  };

  return (
    <button
      ref={ref}
      className={`ripple-wrap ${className || ""}`}
      style={style}
      onClick={click}
    >
      {children}
    </button>
  );
}
