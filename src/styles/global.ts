import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Theme */
    --black: #0a1929;
    --black-light: #102a43;
    --white: #f8fafc;
    --gray: #94a3b8;

    /* Accent colors */
    --green: #23ce6b;
    --blue: #016fb9;
    --pink: #e31f71;

    /* Layout */
    --container-width: 1200px;
    --header-height: 8rem;

    /* Effects */
    --transition: 0.25s ease;

    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
  }

  /*
   * Reset
   */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 320px;
    min-height: 100vh;

    background-color: var(--black);
    color: var(--white);

    font-family: "Red Hat Display", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }

  /*
   * Typography
   */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    color: inherit;
  }

  /*
   * Links
   */
  a {
    color: inherit;
    text-decoration: none;
  }

  /*
   * Lists
   */
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /*
   * Images
   */
  img {
    display: block;
    max-width: 100%;
  }

  /*
   * Buttons
   */
  button,
  .button {
    border: 0;
    border-radius: 0.8rem;

    background-color: var(--green);
    color: var(--black);

    font: inherit;
    font-weight: 600;

    cursor: pointer;

    transition:
      transform var(--transition),
      filter var(--transition),
      background-color var(--transition);

    &:hover {
      filter: brightness(0.9);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
    }
  }

  /*
   * Form elements
   */
  input,
  textarea,
  select,
  button {
    font-family: inherit;
  }

  /*
   * Selection
   */
  ::selection {
    background-color: var(--green);
    color: var(--black);
  }

  /*
   * Scrollbar
   */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--black);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border-radius: 999px;

    &:hover {
      background-color: var(--green);
    }
  }

  /*
   * Light theme
   */
  .light {
    --black: #f8fafc;
    --black-light: #e2e8f0;
    --white: #0f172a;
    --gray: #475569;

    --green: #16a34a;
    --blue: #0369a1;
    --pink: #db2777;
  }

  .light body {
    background-color: var(--black);
    color: var(--white);
  }

  /*
   * Accessibility
   */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /*
   * Responsive typography
   */
  @media (max-width: 960px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 56%;
    }
  }
`;