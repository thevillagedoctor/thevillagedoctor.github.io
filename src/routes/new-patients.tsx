import React from 'react';
import 'styles/patients.css';
import 'styles/patients-mobile.css';
import { EmailText, Hours, NewAppointmentText } from 'components';

export function NewPatients() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>New Patient Resources</h1>
				<div className="infoBody">	
					<div className="infoBox">
							<div>
								<img id="phoneIcon" src="./images/phoneBlue.png" alt="phone icon"/>
								<p id="phoneNum"><a href="tel:7348791068">(734) 879-1068</a></p>
								<p>CALL FOR AN APPOINTMENT</p>
								<p id="faxNum">Fax: (734) 554-4574</p>
								<p id="hours">Hours:</p>
								<Hours/>
							</div>
					</div>
					<h2>Make an Appointment</h2>
					<NewAppointmentText/>
					<br/>
					<div className='button-container'>
						<a className="button" href="https://thevillagedoctor.hint.com/signup" target="_blank" rel="noreferrer">New Patient Registration</a>
						<a className="button" href="./pdfs/Patient Contract December 2024.pdf" target="_blank">View Contract</a>
					</div>
					<h2>Email</h2>
					<EmailText/>
				</div>
			</div>
		</div>
	);
}