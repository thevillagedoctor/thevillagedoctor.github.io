import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles/typical-content.css';
import './styles/typical-content-mobile.css';
import { Welcome, About, DirectPrimaryCare, Providers, EstablishedPatients, NewPatients, Insurance, OnlinePayments, Resources, Contact } from 'routes';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Welcome />} />
        <Route path="about" element={<About />} />
        <Route path="direct-primary-care" element={<DirectPrimaryCare />} />
        <Route path="providers" element={<Providers />} />
        <Route path="established-patients" element={<EstablishedPatients />} />
        <Route path="new-patients" element={<NewPatients />} />
        <Route path="online-payments" element={<OnlinePayments />} />
        {/* <Route path="insurance" element={<Insurance />} /> */}
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();