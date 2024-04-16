import { css } from "lit";

export default css`
  .btn-sm {
    --sgds-btn-padding-y: 0.25rem;
    --sgds-btn-padding-x: 0.5rem;
    --sgds-btn-font-size: 0.875rem;
    --sgds-btn-border-radius: var(--sgds-border-radius-sm);
  }
  .fade {
    transition: opacity 0.15s linear;
  }
  @media (prefers-reduced-motion: reduce) {
    .fade {
      transition: none;
    }
  }
  .fade:not(.show) {
    opacity: 0;
  }
  .alert {
    --sgds-alert-bg: transparent;
    --sgds-alert-padding-x: 1rem;
    --sgds-alert-padding-y: 1rem;
    --sgds-alert-margin-bottom: 1rem;
    --sgds-alert-color: inherit;
    --sgds-alert-border-color: transparent;
    --sgds-alert-border: var(--sgds-border-width) solid var(--sgds-alert-border-color);
    --sgds-alert-border-radius: var(--sgds-border-radius);
    --sgds-alert-link-color: inherit;
    background-color: var(--sgds-alert-bg);
    border: var(--sgds-alert-border);
    border-radius: var(--sgds-alert-border-radius);
    color: var(--sgds-alert-color);
    margin-bottom: var(--sgds-alert-margin-bottom);
    padding: var(--sgds-alert-padding-y) var(--sgds-alert-padding-x);
    position: relative;
  }
  .alert-heading {
    color: inherit;
  }
  .alert-link {
    color: var(--sgds-alert-link-color);
    font-weight: 700;
  }
  .alert-dismissible {
    padding-right: 3rem;
  }
  .alert-dismissible .btn-close {
    padding: 1.25rem 1rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
  .alert-primary {
    --sgds-alert-color: var(--sgds-primary-text-emphasis);
    --sgds-alert-border-color: var(--sgds-primary-border-subtle);
    --sgds-alert-link-color: var(--sgds-primary-text-emphasis);
  }
  .alert-secondary {
    --sgds-alert-color: var(--sgds-secondary-text-emphasis);
    --sgds-alert-border-color: var(--sgds-secondary-border-subtle);
    --sgds-alert-link-color: var(--sgds-secondary-text-emphasis);
  }
  .alert-success {
    --sgds-alert-color: var(--sgds-success-text-emphasis);
    --sgds-alert-border-color: var(--sgds-success-border-subtle);
    --sgds-alert-link-color: var(--sgds-success-text-emphasis);
  }
  .alert-info {
    --sgds-alert-color: var(--sgds-info-text-emphasis);
    --sgds-alert-border-color: var(--sgds-info-border-subtle);
    --sgds-alert-link-color: var(--sgds-info-text-emphasis);
  }
  .alert-warning {
    --sgds-alert-color: var(--sgds-warning-text-emphasis);
    --sgds-alert-border-color: var(--sgds-warning-border-subtle);
    --sgds-alert-link-color: var(--sgds-warning-text-emphasis);
  }
  .alert-danger {
    --sgds-alert-color: var(--sgds-danger-text-emphasis);
    --sgds-alert-border-color: var(--sgds-danger-border-subtle);
    --sgds-alert-link-color: var(--sgds-danger-text-emphasis);
  }
  .alert-light {
    --sgds-alert-color: var(--sgds-light-text-emphasis);
    --sgds-alert-border-color: var(--sgds-light-border-subtle);
    --sgds-alert-link-color: var(--sgds-light-text-emphasis);
  }
  .alert-dark {
    --sgds-alert-color: var(--sgds-dark-text-emphasis);
    --sgds-alert-border-color: var(--sgds-dark-border-subtle);
    --sgds-alert-link-color: var(--sgds-dark-text-emphasis);
  }
  [data-bs-theme="dark"] .alert-primary {
    --sgds-alert-bg: var(--sgds-primary-800);
    --sgds-alert-border-color: var(--sgds-primary-500);
  }
  [data-bs-theme="dark"] .alert-secondary {
    --sgds-alert-bg: var(--sgds-secondary-800);
    --sgds-alert-border-color: var(--sgds-secondary-500);
  }
  [data-bs-theme="dark"] .alert-success {
    --sgds-alert-bg: var(--sgds-success-800);
    --sgds-alert-border-color: var(--sgds-success-500);
  }
  [data-bs-theme="dark"] .alert-info {
    --sgds-alert-bg: var(--sgds-info-800);
    --sgds-alert-border-color: var(--sgds-info-500);
  }
  [data-bs-theme="dark"] .alert-warning {
    --sgds-alert-bg: var(--sgds-warning-800);
    --sgds-alert-border-color: var(--sgds-warning-500);
  }
  [data-bs-theme="dark"] .alert-danger {
    --sgds-alert-bg: var(--sgds-danger-800);
    --sgds-alert-border-color: var(--sgds-danger-500);
  }
  [data-bs-theme="dark"] .alert-light {
    --sgds-alert-color: var(--sgds-gray-600);
    --sgds-alert-bg: var(--sgds-gray-100);
    --sgds-alert-border-color: var(--sgds-light);
    --sgds-alert-link-color: var(--sgds-body-bg);
  }
  [data-bs-theme="dark"] .alert-dark {
    --sgds-alert-color: var(--sgds-white);
    --sgds-alert-bg: var(--sgds-gray-700);
    --sgds-alert-border-color: var(--sgds-dark);
  }
  .alert-primary {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-primary-bg-subtle);
    --sgds-alert-border-color: var(--sgds-primary-400);
  }
  .alert-secondary {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-secondary-bg-subtle);
    --sgds-alert-border-color: var(--sgds-secondary-400);
  }
  .alert-success {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-success-bg-subtle);
    --sgds-alert-border-color: var(--sgds-success-400);
  }
  .alert-info {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-info-bg-subtle);
    --sgds-alert-border-color: var(--sgds-info-400);
  }
  .alert-warning {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-warning-bg-subtle);
    --sgds-alert-border-color: var(--sgds-warning-400);
  }
  .alert-danger {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-danger-bg-subtle);
    --sgds-alert-border-color: var(--sgds-danger-400);
  }
  .alert-light {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-light-bg-subtle);
    --sgds-alert-border-color: var(--sgds-light);
  }
  .alert-dark {
    --sgds-alert-color: var(--sgds-body-color);
    --sgds-alert-bg: var(--sgds-dark-bg-subtle);
    --sgds-alert-border-color: var(--sgds-dark);
  }
  .btn-close {
    --sgds-btn-close-color: #909090;
    --sgds-btn-close-bg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23909090'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E");
    --sgds-btn-close-opacity: 0.5;
    --sgds-btn-close-hover-opacity: 0.75;
    --sgds-btn-close-focus-shadow: 0 0 0 0.25rem rgba(89, 66, 219, 0.25);
    --sgds-btn-close-focus-opacity: 1;
    --sgds-btn-close-disabled-opacity: 0.25;
    --sgds-btn-close-white-filter: invert(1) grayscale(100%) brightness(200%);
    background: transparent var(--sgds-btn-close-bg) center/1em auto no-repeat;
    border: 0;
    border-radius: 0.3125rem;
    box-sizing: content-box;
    height: 1em;
    opacity: var(--sgds-btn-close-opacity);
    padding: 0.25em;
    width: 1em;
  }
  .btn-close,
  .btn-close:hover {
    color: var(--sgds-btn-close-color);
  }
  .btn-close:hover {
    opacity: var(--sgds-btn-close-hover-opacity);
    text-decoration: none;
  }
  .btn-close:focus {
    box-shadow: var(--sgds-btn-close-focus-shadow);
    opacity: var(--sgds-btn-close-focus-opacity);
    outline: 0;
  }
  .btn-close.disabled,
  .btn-close:disabled {
    opacity: var(--sgds-btn-close-disabled-opacity);
    pointer-events: none;
    user-select: none;
  }
  .btn-close-white {
    filter: var(--sgds-btn-close-white-filter);
  }
  .btn-close:hover {
    background: transparent
      url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%235D5D5D'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E")
      50%/1em auto no-repeat;
  }
  .d-flex {
    display: flex !important;
  }
  .align-items-center {
    align-items: center !important;
  }
  .sgds.alert > i {
    align-self: flex-start !important;
  }
`;
