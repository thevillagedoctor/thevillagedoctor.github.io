import React from 'react';
import 'styles/contact.css';
import 'styles/contact-mobile.css';
import { FindUsText, Hours, PatientPortalText, PhoneText } from 'components';


export function Contact() {
		return(
			<div>
				<div className="typical-content contact-page">
					<h1>Contact Us</h1>
					<div className='infoBody'>
					<div className="infoBox">
						<div id="info1">
							<p>Kenneth J. Grimm MD, MS, FAAFP</p>
							<p>Cherry Hill Village Family Medicine</p>
							<img id="phoneIcon" src="./images/phoneBlue.png" alt="phone icon"/>
							<p id="phoneNum"><a href="tel:7348791068">(734) 879-1068</a></p>
							<p>CALL FOR AN APPOINTMENT</p>
							<p id="faxNum">Fax: (734) 554-4574</p>
							<p id="hours">Hours:</p>
							<Hours />
						</div>
						<div id="info2">
							<a href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" rel="noreferrer" target={"_blank"}><img id="map" src="./images/map.jpg" alt="map"/></a>
							<p>50439 Independence St</p>
							<p>Canton MI, 48188</p>
							<div className="flexContainer">
								<a className="button" href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" rel="noreferrer" target={"_blank"}>Get Directions</a>
								<img id="carIcon" src="./images/car.png" alt="car icon" />
							</div>
						</div>
					</div>
						<h2>Phone</h2>
						<PhoneText/>
						<p className='bold'>
							For a medical emergency please call 911.
						</p>
						
						<h2>Find Us</h2>
						<FindUsText/>

						<div className='paragraph'>
						<h2>Patient Portal</h2>
						<PatientPortalText/>
						<p className="italics">
							Never use the portal for urgent questions or emergencies. It may take a day to respond to you, 
							or several days during the weekend or holidays.
						</p>
						<a className="button" href="https://www.myupdox.com/portal/thevillagedoctor/html/index.html" rel="noreferrer" target={"_blank"}>Enter Patient Portal</a>
					</div>
					</div>
						
				</div>
			</div>
		)
}
