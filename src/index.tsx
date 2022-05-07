import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import GlobalStyle from '@styles/global';
import './index.css';
import App from './App';

const RootContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RootContainer>
      <App />
    </RootContainer>
  </React.StrictMode>
);
