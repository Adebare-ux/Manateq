import { PRIMARY } from "../constants";

export const GLOBAL_CSS = `
@keyframes kenburns {
  0%   { transform: scale(1) translate(0,0); }
  100% { transform: scale(1.08) translate(-2%,-1.5%); }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(22px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes rippleAnim {
  to { transform:scale(4); opacity:0; }
}
@keyframes popIn {
  0%   { opacity:0; transform:scale(0.55); }
  70%  { transform:scale(1.08); }
  100% { opacity:1; transform:scale(1); }
}
.svc-card {
  border:1px solid #f0e8e8; border-radius:12px; padding:28px 24px;
  cursor:pointer; position:relative; overflow:hidden; background:#fff;
  transition:transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.svc-card::before {
  content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
  background:${PRIMARY}; transform:scaleY(0); transform-origin:bottom;
  transition:transform 0.25s ease;
}
.svc-card:hover { transform:translateY(-5px); box-shadow:0 12px 36px rgba(139,26,46,0.13); border-color:#f0c0c8; }
.svc-card:hover::before { transform:scaleY(1); }
.ripple-wrap { position:relative; overflow:hidden; }
.ripple-dot {
  position:absolute; border-radius:50%; background:rgba(255,255,255,0.3);
  transform:scale(0); animation:rippleAnim 0.55s linear; pointer-events:none;
}
`;

export function injectCSS() {
  if (!document.getElementById("mq-styles")) {
    const s = document.createElement("style");
    s.id = "mq-styles";
    s.textContent = GLOBAL_CSS;
    document.head.appendChild(s);
  }
}