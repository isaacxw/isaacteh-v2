import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    :root {
        --dark-navy: #020c1b;
        --navy:rgb(27, 73, 141);
        --light-navy: #112240;
        --lightest-navy: #233554;
        --navy-shadow: rgba(2, 12, 27, 0.7);
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --yellow: #FFD300;
        --yellow-tint: rgba(255,255,51, 0.1);

        --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

        --fz-xxs: 12px;
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 32px;

        --border-radius: 4px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    html {
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    ::selection {
        background-color: var(--slate);
        color: var(--lightest-slate);
    }

    body {
        margin: 0;
        width: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: none;
        color: var(--white);
        font-family: var(--font-sans);
        font-size: var(--fz-xl);
        line-height: 1.3;

        @media (max-width: 480px) {
            font-size: var(--fz-lg);
        }

        &.hidden {
            overflow: hidden;
        }

        &.blur {
            overflow: hidden;
        }
    }

    main {
        margin: 0 auto;
        width: 100%;
        height: 100%;
        padding: 200px 150px;

        @media (max-width: 1080px) {
            padding: 200px 100px;
        }

        @media (max-width: 768px) {
            padding: 150px 50px;
        }

        @media(max-width: 480px) {
            padding: 125px 25px;
        }
    }

    section {
        margin: 0 auto;
        padding: 100px 0;
        max-width: 1000px;

        @media (max-width: 768px) {
            padding: 80px 0;
        }

        @media (max-width: 480px) {
            padding: 60px 0;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--lightest-slate);
        line-height: 1.1;
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .medium-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
        cursor: pointer;

        &:hover,
        &:focus {
            color: var(--yellow);
        }

        button {
            cursor: pointer;
            border: 0;
            border-radius: 0;
        }
    }

    p {
        margin: 0 0 15px 0;

        &:last-child,
        &:last-of-type {
            margin: 0;
        }
    }

`;

export default Global;