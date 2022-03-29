import React from 'react';
import { NavBar } from 'components';
import 'styles/insurance.css';
import 'styles/insurance-mobile.css';

export function Insurance() {
	return (
		<div>
			<div className="insurance-page">
			<h1>Insurance Information</h1>
				<div className="infoBody">
					<p>
						Below are lists common insurance plans that we either accept or do not.  If you have questions about other
						insurance plans, please give our office a call and we would be happy to work with you.
					</p>
					<h2>Insurance Plans We Accept</h2>
					<ul>
						<li>Aetna (PPO, HMO, EPO)</li>
						<li>Assurant Health / Health Smart</li>
						<li>Blue Care Network (Medicare and Commercial)</li>
						<li>Blue Cross Blue Shield (Medicare and Commercial)</li>
						<li>Blue Cross Complete</li>
						<li>Cigna</li>
						<li>Cofinity</li>
						<li>First Health Network</li>
						<li>Health Alliance Plan (Medicare, Medicaid, and Commercial)</li>
						<li>Medicaid</li>
						<li>Medicare</li>
						<li>Meridian (Medicaid and Commercial)</li>
						<li>Molina (Medicare, Medicaid, and Commercial)</li>
						<li>Priority Health (Medicare, Medicaid, and Commercial)</li>
						<li>Tricare</li>
						<li>United Health Care (Medicare, Medicaid, and Commercial)</li>
					</ul>
					<h2>Common Insurance Plans We DO NOT Accept</h2>
					<ul>
						<li>Aetna Better Health</li>
						<li>BCBS Ascension Narrow Network</li>
						<li>Community Care Associates</li>
						<li>Coventry (Unless underwritten by HAP)</li>
						<li>Harbor Health</li>
						<li>HAP Henry Ford Narrow Network</li>
						<li>Health Plus Medicare</li>
						<li>Wellcare</li>
					</ul>
				</div>	
			</div>
		</div>
	);
}