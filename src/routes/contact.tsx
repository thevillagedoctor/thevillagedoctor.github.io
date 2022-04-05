import React from 'react';
import 'styles/contact.css';
import 'styles/contact-mobile.css';
import { Hours } from 'components';


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
						<p>
							During our business hours, please call the office at (734) 879-1068 to set up an appointment.
						</p>
						<p>
							For an urgent health concern outside of our business hours please call the office number 
							and you will be connected directly with Dr. Grimm's voice mail. Leave a message and he will call you back as soon as he is able.
						</p>
						<p className='bold'>
							For a medical emergency please call 911.
						</p>
						
						<h2>Find Us</h2>
						<p>
							Please be aware that although our street is officially named Independence Street, some mapping sites may still call it Constitution Street.
						</p>
						<p>
							The way to know you are in the right place is that Independence Street is at the intersection of Cherry Hill and Ridge Roads, 
							at the traffic light outside The Village Theatre, and our office is right above Coldstone Creamery.
						</p>
						<p>
							The access to our second-floor office is either from the external stairway to the balcony (facing the village fountain), 
							then use the middle set of doors and turn left, or by using the elevator (access is under the archway) to the 2nd floor and then follow the hallway around to the office.
						</p>

						<div className='paragraph'>
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
						<a className="button" href="https://www.myupdox.com/portal/thevillagedoctor/html/index.html" rel="noreferrer" target={"_blank"}>Enter Patient Portal</a>
					</div>
					</div>
						
				</div>
			</div>
		)
}
