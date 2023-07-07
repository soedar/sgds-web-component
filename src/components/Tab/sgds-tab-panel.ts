import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { watch } from "../../utils/watch";
import styles from "./sgds-tab-panel.scss";

let id = 0;

/**
 * @summary Tab panels are used inside tab groups to display tabbed content.
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --tab-panel-padding - The tab panel's padding.
 */
@customElement("sgds-tab-panel")
export class SgdsTabPanel extends LitElement {
  static styles = styles;
  private readonly attrId = ++id;
  private readonly componentId = `sgds-tab-panel-${this.attrId}`;

  /** The tab panel's name. */
  @property({ reflect: true }) name = "";

  /** When true, the tab panel will be shown. When used with tab-group, this property is already being managed */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }

  @watch("active")
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          "tab-panel": true,
          "tab-panel--active": this.active
        })}
      ></slot>
    `;
  }
}

export default SgdsTabPanel;
