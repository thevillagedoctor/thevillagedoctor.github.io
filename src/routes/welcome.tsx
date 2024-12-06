import React from 'react';
import 'styles/welcome.css';
import 'styles/welcome-mobile.css';
import { Hours, WelcomeDisclaimer, WelcomeText1, WelcomeText2 } from 'components';

export function Welcome() {
	return (
		<div>
			<div id='slogan'>
				<h2>Evidence-Based Medicine...</h2>
				<h2>Old-Fashioned Care</h2>
				{/* <br/>
				<br/>
				<h3>Our website is being updated to reflect the upcoming changes in the practice.  Please visit again soon!</h3> */}
			</div>
			<div className="welcome-page" >
				<img id="buildingLogo" src="./images/BuildingLogo.jpg" alt="Building"/>
				<div id="contactInfo">
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
				</div>
				<div className="infoParagraph" id="infoP1">
					<h1>Welcome...</h1>
					<WelcomeText1 />
				</div>
				<img id="image1" src="./images/reception.jpg" alt="Reception Desk"/>
				<img id="image2" src="./images/waitingroom.jpg" alt="Waiting Room"/>
				<div className="infoParagraph" id="infoP2">
					<h1>Proud to be Canton’s First Direct Primary Care Practice!</h1>
					<WelcomeText2 />	
					<p>To learn about Direct Primary Care in general and how it is being implemented at The Village Doctor, 
					you can read more <a href="/direct-primary-care">here</a>.</p>
				</div>
				<div className="infoParagraph" id="covidDisclaimer">
					<WelcomeDisclaimer />
				</div>
			</div>
		</div>
	);
}