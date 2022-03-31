import React from 'react';
import 'styles/patients.css';
import 'styles/patients-mobile.css';

export function NewPatients() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>New Patient Resourses</h1>
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
						Welcome new patients! Please download the forms linked below and fill them out to 
						bring to your first appointment. We look forward to meeting you.
					</p>
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
					<a className="button" href="./pdfs/adult-form-set.pdf" target="blank">New Patient Adult Form (ages 18+)</a>
					<a className="button" href="./pdfs/pediatric-form-set.pdf" target="blank">New Patient Pediatrics Form (ages 0-17)</a>
					<h2>Email</h2>
					<p>
						If you would like to send us an email please address it to info@thevillagedoctor.net and we will get back to you as soon as possible. 	
						Please do not use email to ask specific questions about your health or your medical care as email is not secure enough to use for this purpose. 
						Kindly note that emails will not be answered during the weekend, and never use email for urgent questions or emergencies.
					</p>
				</div>
			</div>
		</div>
	);
}