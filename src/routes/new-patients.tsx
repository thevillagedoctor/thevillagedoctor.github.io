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
					<a className="button" href="./pdfs/adult-form-set.pdf" target="_blank">New Patient Adult Form (ages 18+)</a>
					<a className="button" href="./pdfs/pediatric-form-set.pdf" target="_blank">New Patient Pediatrics Form (ages 0-17)</a>
					<h2>Email</h2>
					<EmailText/>
				</div>
			</div>
		</div>
	);
}