import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Welcome, About, Providers, EstablishedPatients, NewPatients, Insurance, Resources, Contact } from 'routes';

export default class App extends React.Component {
	render() {
		return (
      <div>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="providers" element={<Providers/>}/>
          <Route path="established-patients" element={<EstablishedPatients/>}/>
          <Route path="new-patients" element={<NewPatients/>}/>
          <Route path="insurance" element={<Insurance/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </div>
		)
	}
}