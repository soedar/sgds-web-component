import { css } from "lit";

export default css`
.toast-container {
  --sgds-toast-zindex: 1090;
  max-width: 100%;
  pointer-events: none;
  position: absolute;
  width: max-content;
  z-index: var(--sgds-toast-zindex);
}
.toast-container > :not(:last-child) {
  margin-bottom: var(--sgds-toast-spacing);
}
.top-0 {
  top: 0 !important;
}
.top-50 {
  top: 50% !important;
}
.top-100 {
  top: 100% !important;
}
.bottom-0 {
  bottom: 0 !important;
}
.bottom-50 {
  bottom: 50% !important;
}
.bottom-100 {
  bottom: 100% !important;
}
.start-0 {
  left: 0 !important;
}
.start-50 {
  left: 50% !important;
}
.start-100 {
  left: 100% !important;
}
.end-0 {
  right: 0 !important;
}
.end-50 {
  right: 50% !important;
}
.end-100 {
  right: 100% !important;
}
.translate-middle {
  transform: translate(-50%, -50%) !important;
}
.translate-middle-x {
  transform: translateX(-50%) !important;
}
.translate-middle-y {
  transform: translateY(-50%) !important;
}


`