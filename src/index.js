import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  );
}

renderApp();
