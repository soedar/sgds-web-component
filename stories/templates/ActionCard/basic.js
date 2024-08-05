import { html } from "lit-html";
import { ifDefined } from "lit/directives/if-defined.js";

export const Template = args =>
  html`
    <sgds-action-card
      active=${ifDefined(args.active)}
      bgColor=${ifDefined(args.bgColor)}
      borderColor=${ifDefined(args.borderColor)}
      textColor=${ifDefined(args.textColor)}
      disabled=${ifDefined(args.disabled)}
      type=${ifDefined(args.type)}
      checked=${ifDefined(args.checked)}
      name=${ifDefined(args.name)}
      value=${ifDefined(args.value)}
    >
      <svg
        slot="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-box"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
        />
      </svg>
      <span slot="card-subtitle">Laptop</span>
      <span slot="card-title">Apple</span>
      <span slot="card-text">Macbook Pro M1</span>
    </sgds-action-card>
  `;

export const args = {};

export const parameters = {};
