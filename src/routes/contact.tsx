import React from 'react';
import { NavBar } from 'components';
import 'styles/contact.css';
import 'styles/contact-mobile.css';


export function Contact() {
		return(
			<div>
				<NavBar/>
				<div className="contact-page">
					<h1>Contact Us</h1>
					<div className='infoBody'>
					<div className="infoBox">
						<div id="info1">
							<p>Kenneth J. Grimm MD, MS, FAAFP</p>
							<p>Cherry Hill Village Family Medicine</p>
							<img id="phoneIcon" src="./images/phoneBlue.png" alt="phone icon"/>
							<p id="phoneNum">(734) 879-1068</p>
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
						<div id="info2">
							<a href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" target="blank"><img id="map" src="./images/map.png" alt="map"/></a>
							<p>50439 Independence St</p>
							<p>Canton MI, 48188</p>
							<div className="flexContainer">
								<a className="button" href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" target="blank">Get Directions</a>
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
						<h2>Email</h2>
						<p>
							If you would like to send us an email please address it to info@thevillagedoctor.net and we will get back with you as soon as possible. 	
							Please do not use email to ask specific questions about your health or your medical care as email is not secure enough to use for this purpose. 
							Kindly note that emails will not be answered during the weekend, and never use email for urgent questions or emergencies.
						</p>
						<h2>Find Us</h2>
						<p>
							Please be aware that although our street is officially named Independence Street, some mapping sites may still call it Consititution Street.
						</p>
						<p>
							The way to know you are in the right place is that Independence Street is at the intersection of Cherry Hill and Ridge Roads, 
							at the traffic light outside The Village Theatre, and our office is right above Coldstone Creamery.
						</p>
						<p>
							The access to our 2nd floor office is either from the external stairway to the balcony (facing the village fountain), 
							then use the middle set of doors and turn left, or by using the elevator (access is under the archway) to the 2nd floor and then follow the hallway around to the office.
						</p>
					</div>
						
				</div>
			</div>
		)
}
