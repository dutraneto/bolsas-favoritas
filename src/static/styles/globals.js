import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
    :root {
        --color-white: #FFFFFF;
        --background: #FBFBFB;
        --blue-primary: #18ACC4;
        --blue-secondary: #007A8D;
        --yellow-primary: #FDCB13;
        --yellow-secondary: #DE9E1F;
        --green: #0FA866;
        --text: #1F2D30;
        --overlay-modal: #1F2D30;
    }
    * {
        margin: 0;
        padding: 0;
    }

    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
      }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    a:link,
    a:visited {
        color: currentColor;
        text-decoration: none;
    }

    a:active {
        color: currentColor;
    }

    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`

export default GlobalStyles
