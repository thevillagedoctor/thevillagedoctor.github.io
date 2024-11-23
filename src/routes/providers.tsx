import React from 'react';
import 'styles/providers.css';
import 'styles/providers-mobile.css'
import { DrGrimmText, SaraWestText } from 'components';


export function Providers() {
  return (
    <div>
      <div className=" typical-content providers-page">
        <h1>Meet our Providers</h1>
          <div className="provider">
            <img src="./images/dr-grimm.jpg" alt="Dr. Grimm"/>
            <h2>Dr. Grimm</h2>
            <DrGrimmText/>
          </div>
          <div className="provider">
            <img src="./images/sara-west.jpg" alt="Sara West"/>
            <h2>Sara West</h2>
           <SaraWestText/>
          </div>
      </div>
    </div>
  );
}