import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root{
        background : radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
        font-family: 'Barlow Semi Condensed';
    }
    a{
        text-decoration : none;
    }
`;

export default GlobalStyle;
