import React, { useRef } from "react";

export function RippleBtn({ children, style, onClick }) {
  const ref = useRef();
  const click = (e) => {
    const b = ref.current;
    const r = b.getBoundingClientRect();
    const sz = Math.max(b.offsetWidth, b.offsetHeight);
    const dot = document.createElement("span");
    dot.className = "ripple-dot";
    dot.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX - r.left - sz / 2}px;top:${e.clientY - r.top - sz / 2}px`;
    b.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
    onClick && onClick(e);
  };
  return (
    <button ref={ref} className="ripple-wrap" style={style} onClick={click}>
      {children}
    </button>
  );
}
