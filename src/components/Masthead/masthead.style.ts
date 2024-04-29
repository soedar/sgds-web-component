import { css } from "lit";
export default css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  b {
    font-weight: bolder;
  }
  a {
    color: #0f71bb;
    text-decoration: underline;
  }
  a:hover {
    color: #0c5a96;
  }
  svg {
    vertical-align: middle;
  }
  [role="button"] {
    cursor: pointer;
  }
  a {
    text-underline-offset: 0.25rem;
  }
  a[target="_blank"]:after {
    content: "";
    display: inline-block;
    font-family: bootstrap-icons;
    padding-left: 0.25rem;
    text-decoration-line: none;
  }
  .container,
  .container-fluid {
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--sgds-gutter-x, 0.75rem);
    padding-right: var(--sgds-gutter-x, 0.75rem);
    width: 100%;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1320px;
    }
  }
  .row {
    --sgds-gutter-x: 1.5rem;
    --sgds-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(var(--sgds-gutter-x) * -0.5);
    margin-right: calc(var(--sgds-gutter-x) * -0.5);
    margin-top: calc(var(--sgds-gutter-y) * -1);
  }
  .row > * {
    flex-shrink: 0;
    margin-top: var(--sgds-gutter-y);
    max-width: 100%;
    padding-left: calc(var(--sgds-gutter-x) * 0.5);
    padding-right: calc(var(--sgds-gutter-x) * 0.5);
    width: 100%;
  }
  .col {
    flex: 1 0 0%;
  }
  /*! CSS Used from: Embedded */
  .container {
    display: flex;
    flex-direction: column;
  }

  /**scss */

  :host {
    --masthead-font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
      "Liberation Sans", sans-serif;
    --masthead-text-color: hsl(0, 0%, 28%);
    --masthead-link-color: hsl(222, 63%, 50%);
    --masthead-link-color-hover: hsl(221, 64%, 55%);
    --masthead-mobile-font-size: 0.6875rem;
    --masthead-mobile-padding-x: 0.75rem;
    --masthead-fluid-padding-x: 0.75rem;
    --masthead-crest-color: rgb(239, 51, 32);
  }

  .sgds-masthead {
    font-size: 0.875rem;
    background-color: hsl(0, 0%, 94%);
    font-family: var(--masthead-font-family);
    color: var(--masthead-text-color);
    @media screen and (max-width: 1023px) {
      font-size: var(--masthead-mobile-font-size);
      .col,
      .row {
        padding-left: 0;
        padding-right: 0;
      }
      .row {
        margin-right: 0;
        margin-left: 0;
      }
    }
  }

  .sg-crest {
    width: 1.25rem;
    height: 1.75rem;
    path {
      fill: var(--masthead-crest-color);
    }
  }

  .masthead-layout {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .sgds-masthead-identify-icon {
    width: 12px;
    height: 21px;
    display: block;
    transform: rotate(180deg);
    user-select: none;
    transition: all 0.3s ease-in-out 0s;
    align-self: center;
    &.show {
      transform: rotate(0deg);
    }
  }

  .sgds-masthead-button {
    display: flex;
    color: var(--masthead-link-color);
    align-items: center;
    cursor: pointer;
    &-text {
      text-decoration: underline;
      &:hover {
        color: var(--masthead-link-color-hover);
      }
    }
  }

  .sgds-masthead-content {
    padding-top: 2.5rem;
    padding-bottom: 3rem;
    display: none;
    @media screen and (max-width: 1023px) {
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
    .content-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 10rem;
      @media screen and (max-width: 1023px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        .banner-icon-inline {
          width: 0.6rem;
          height: 0.6rem;
          margin-bottom: 0.1875rem;
        }
      }
      .icon {
        margin-top: -0.1em;
      }
    }

    .wrapper {
      display: flex;
      gap: 1rem;
      font-size: 1rem;
      @media screen and (max-width: 1023px) {
        font-size: var(--masthead-mobile-font-size);
        gap: 0.5rem;
      }
      .content {
        .title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          @media screen and (max-width: 1023px) {
            margin-bottom: 0.25rem;
          }
        }
        article {
          line-height: 1.5rem;
          @media screen and (max-width: 1023px) {
            line-height: 1.2rem;
          }
        }
      }
      .banner-icon {
        width: 1.125rem;
        path {
          fill: var(--masthead-text-color);
        }

        @media screen and (max-width: 1023px) {
          width: 0.75rem;
        }
        svg {
          line-height: 1.5rem;
          @media screen and (max-width: 1023px) {
            width: 1.25rem;
          }
        }
      }
      .banner-icon-inline {
        path {
          fill: var(--masthead-text-color);
        }
        @media screen and (max-width: 1023px) {
          width: 0.6rem;
          height: 0.6rem;
          margin-bottom: 0.1875rem;
        }
      }
    }

    &.show {
      display: block;
    }
  }

  a[target="_blank"] {
    text-decoration: none;
    &::after {
      content: none;
    }
  }

  a.trusted-websites-link {
    display: inline-flex;
    align-items: center;
    color: var(--masthead-link-color);
    margin-left: 0.125rem;
    svg {
      margin-left: 0.125rem;
      fill: var(--masthead-link-color);
    }
    &:hover {
      color: var(--masthead-link-color-hover);
      svg {
        fill: var(--masthead-link-color-hover);
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .trusted-websites-icon {
      width: 0.75rem;
    }
  }

  .sgds-masthead {
    > .container {
      @media screen and (max-width: 1023px) {
        padding-left: var(--masthead-mobile-padding-x);
        padding-right: var(--masthead-mobile-padding-x);
      }
    }
    > .container-fluid {
      padding-left: var(--masthead-fluid-padding-x);
      padding-right: var(--masthead-fluid-padding-x);
      @media screen and (max-width: 1023px) {
        padding-left: var(--masthead-mobile-padding-x);
        padding-right: var(--masthead-mobile-padding-x);
      }
    }

    &:not([fluid]) {
      @media screen and (max-width: 1023px) {
        .container {
          margin: 0;
        }
      }
    }
  }
  /**scss */
`;
