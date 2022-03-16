import React from 'react';
import { NavBar } from 'components';

export function Welcome() {
	return (
		<div>
			<NavBar/>
			<div className="welcome-page" >
				<img id="buildingLogo" src="./images/BuildingLogo.jpg" alt="Building"/>
				<div id="contactInfo">
					<h2>Cutting Edge Treatment... Old Fassioned Care</h2>
					<div id="infoBox">
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
							<img id="map" src="./images/map.png" alt="map"/>
							<p>50439 Independence St</p>
							<p>Canton MI, 48188</p>
							<a href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0">Get Directions</a>
							<img id="carIcon" src="./images/car.png" alt="car icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}