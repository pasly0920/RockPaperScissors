import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { ColorCode } from '@utils/constants';

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root{
        background : radial-gradient(${ColorCode.BACKGROUND1}, ${ColorCode.BACKGROUND2});
        font-family: 'Barlow Semi Condensed';
    }
    a{
        text-decoration : none;
    }
`;

export default GlobalStyle;
