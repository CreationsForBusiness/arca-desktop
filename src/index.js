import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"


import App from './app';
import reportWebVitals from './reportWebVitals';

const optionsColor = {
  useSystsemColorMode: true
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider options={optionsColor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ColorModeProvider>
    </ThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();