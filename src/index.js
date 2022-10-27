import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import Header from './components/BaiTapThucHanhLayout/Header';
import Body from './components/BaiTapThucHanhLayout/Body';
import Footer from './components/BaiTapThucHanhLayout/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><Header /><Body /><Footer /></>
);

