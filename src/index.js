import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components'
import { ModalProvider,light,dark, ResetCSS } from '@yuki_kurosawa/uikit'
import App from './App';
import reportWebVitals from './reportWebVitals';


const ThemeProviderWrapper = (props) => {
  //const [isDark] = 0;
  return <ThemeProvider theme={light} {...props} />
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderWrapper>
    <ModalProvider>
      <App />
    </ModalProvider>
    </ThemeProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
