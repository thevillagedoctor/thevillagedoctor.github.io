import React from 'react';
import 'styles/providers.css';
import 'styles/providers-mobile.css'
import { DrGrimmText } from 'components';


export function Providers() {
  return (
    <div>
      <div className=" typical-content providers-page">
        <h1>Meet Dr. Grimm</h1>
          <div className="provider">
            <img src="./images/dr-grimm.jpg" alt="Dr. Grimm"/>
            <DrGrimmText/>
          </div>
      </div>
    </div>
  );
}