import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import SgdsElement from "../../base/sgds-element";
import { watch } from "../../utils/watch";
import alertStyle from "./alert.css";

export type AlertVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light";
/**
 * @summary Alerts provide short, timely, and relevant information for your users. It can be a simple text message or customised HTML content with paragraphs, headings and links.
 *
 * @slot default - The alert's main content.
 * @slot icon - An icon to show in the alert. Pass in SVG elements.
 *
 * @event sgds-show - Emitted when the alert appears.
 * @event sgds-hide - Emitted after the alert closes.
 *
 * @cssproperty --alert-icon-margin-right - The margin-right css of icon slot, to position the gap between icon and alert message
 */
export class SgdsAlert extends SgdsElement {
  static styles = [...SgdsElement.styles, alertStyle];

  /** Controls the appearance of the alert  */
  @property({ type: Boolean, reflect: true }) show = false;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) dismissible = false;

  /** The alert's theme variant. */
  @property({ type: String, reflect: true }) variant: AlertVariant = "primary";

  /** Closes the alert  */
  public close() {
    this.show = false;
  }
  /**@internal */
  @watch("show")
  _handleShowChange() {
    this.show ? this.emit("sgds-show") : this.emit("sgds-hide");
  }
  render() {
    return html`
      <div
        class="${classMap({
          sgds: true,
          alert: true,
          fade: true,
          show: this.show,
          [`alert-${this.variant}`]: this.variant,
          [`alert-dismissible`]: this.dismissible,
          "d-flex": true,
          "align-items-center": true
        })}"
        role="alert"
        aria-hidden=${this.show ? "false" : "true"}
      >
        <i><slot name="icon"></slot></i>
        <slot></slot>
        ${this.dismissible
          ? html`<button class="btn-close btn-sm" aria-label="close the alert" @click=${this.close}></button>`
          : null}
      </div>
    `;
  }
}

export default SgdsAlert;
