import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit/static-html.js";
import SgdsElement from "../../base/sgds-element";
import alertLinkStyle from "./alert-link.style";
import styles from "./sgds-alert-link.scss?inline";
/**
 * @summary Alert link are used within the alert's message that is passed into the default slot of `<sgds-alert>`
 *
 * @slot default - The text content of the anchor element
 * @cssproperty --alert-link-anchor-color - The margin-right css of icon slot, to position the gap between icon and alert message
 */
export class SgdsAlertLink extends SgdsElement {
  static styles = [alertLinkStyle, styles];
  /** Forwards to href attribute of anchor element */
  @property({ type: String, reflect: true }) href: string;
  /** Tells the browser where to open the link */
  @property() target: "_blank" | "_parent" | "_self" | "_top";

  render() {
    return html`
      <a class="alert-link" href=${ifDefined(this.href)} target=${ifDefined(this.target)}><slot></slot> </a>
    `;
  }
}

export default SgdsAlertLink;
