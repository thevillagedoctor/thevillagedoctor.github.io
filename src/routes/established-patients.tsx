import React from 'react';
import 'styles/patients.css';
import 'styles/patients-mobile.css';
import { EstAppointmentText, Hours, OnlinePaymentText, PatientPortalText } from 'components';

export function EstablishedPatients() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>Established Patient Resources</h1>
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
					<div className='paragraph'>
						<h2>Make an Appointment</h2>
						<EstAppointmentText/>
						{/* <a className="button" href="link" rel="noreferrer" target={"_blank"}>Schedule Appointment</a> */}
					</div>
					<div className='paragraph'>
						<h2>Electronic Communication</h2>
						<PatientPortalText/>
						<p className="italics">
							Never use the portal for urgent questions or emergencies. It may take a day to respond to you, 
							or several days during the weekend or holidays.
						</p>
						<div className='button-container'>
							<a className="button" href="https://thevillagedoctor.hint.com/login/request" rel="noreferrer" target={"_blank"}>Hint (Patient Portal)</a>
						</div>
					</div>
					{/* <div className='paragraph'>
						<h2>Online Payments</h2>
						<OnlinePaymentText/>
						<p className='italics'>
							If you are experiencing financial hardships due to job loss, covid, etc., then please contact the office to work out a payment plan.
						</p>
						<a className="button" href="https://pay.balancecollect.com/m/chvfm" rel="noreferrer" target={"_blank"}>Make an Online Payment</a>	
					</div> */}
				</div>
			</div>
		</div>
	);
}