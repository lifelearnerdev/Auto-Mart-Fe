import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './components/App';
import AppTheme from './assets/styles/index';
import './assets/styles/home.scss';
import store from './components/store';

const theme = AppTheme;


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('root'));
