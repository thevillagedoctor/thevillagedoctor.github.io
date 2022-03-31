import React from 'react';
import 'styles/patients.css';
import 'styles/patients-mobile.css';

export function EstablishedPatients() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>Established Patient Resourses</h1>
				<div className="infoBody">	
					<div className="infoBox">
							<div>
								<img id="phoneIcon" src="./images/phoneBlue.png" alt="phone icon"/>
								<p id="phoneNum"><a href="tel:7348791068">(734) 879-1068</a></p>
								<p>CALL FOR AN APPOINTMENT</p>
								<p id="hours">Hours:</p>
								<p>Monday ... 8am - 8pm</p>
								<p>Tuesday ... 8am - 8pm</p>
								<p>Wednesday ... 8am - 5pm</p>
								<p>Thursday ... 8am - 8pm</p>
								<p>Friday ... 8am - 5pm</p>
								<p>Saturday ... 8am - Noon</p>
								<p>Sunday ... Closed</p>
							</div>
					</div>
					<h2>Make an Appointment</h2>
					<p>
						You can schedule an appointment to be seen during our normal office hours.
						For routine visits, please call in advance so we can give you an appointment that best matches your schedule. 
						When urgent problems come up unexpectedly we will do our best to see you within one business day. 
						Unless you have a life-threatening emergency, it is always better for you to see a medical provider who knows you, 
						rather than going to the urgent care or emergency room.
					</p>
					<p>
						We value your time, and we make special efforts to keep to our scheduled appointment times. 
						In order to do this, we ask you to arrive at the office 15 minutes before your appointment 
						so that we can have you in the room and ready to see the doctor as close to your appointment time as possible.
					</p>
					<h2>Patient Portal</h2>
					<p>
						The system also allows us to communicate with you electronically, 
						through a portal that protects your personal information in a way that is 
						compliant with the latest healthcare privacy laws and regulations. 
						Through this portal, you can send us secure messages, 
						as well as receive messages and test results from us. 
						If you are interested in communicating with us through the portal please contact the office. 
						As long as we have an email address on file in your chart already we can set up a portal account for you. 
					</p>
					<p className="italics">
						Never use the portal for urgent questions or emergencies. It may take a day to respond to you, 
						or several days during the weekend or holidays.
					</p>
					<a className="button" href="https://www.myupdox.com/portal/thevillagedoctor/html/index.html" target="blank">Enter Patient Portal</a>
					<h2>Online Payments</h2>
					<p>
						We are now able to accept card payments online.
						The link below will take you to a safe off-site page owned by our payment vendor. 
						You will need to complete the information, including your patient number, on the first page and then you will be taken to the payment page.
						Please note, you can still pay your bill via mail (card or check) and in the office (card, cash, check, or apple/google pay).
					</p>
					<p className='italics'>
						If you should currently be experiencing monetary hardships due to job loss, covid, etc., then please contact the office to work out a payment plan.
					</p>
					<a className="button" href="https://quickclick.com/r/vi9b2" target="blank">Make an Online Payment</a>	
				</div>
			</div>
		</div>
	);
}