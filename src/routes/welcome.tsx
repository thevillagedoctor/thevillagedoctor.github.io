import React from 'react';
import 'styles/welcome.css';
import 'styles/welcome-mobile.css';

export function Welcome() {
	return (
		<div>
			<div id='slogan'>
				<h2>Evidence-Based Medicine...</h2>
				<h2>Old-Fashioned Care</h2>
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
							<a href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" target="blank"><img id="map" src="./images/map.jpg" alt="map"/></a>
							<p>50439 Independence St</p>
							<p>Canton MI, 48188</p>
							<div className="flexContainer">
								<a className="button" href="https://www.google.com/maps/dir//50439+Independence+St,+Canton,+MI+48188/@42.3058103,-83.5380666,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x883b54397a655555:0xa6d679841bc9491f!2m2!1d-83.5358779!2d42.3058064!3e0" target="blank">Get Directions</a>
								<img id="carIcon" src="./images/car.png" alt="car icon" />
							</div>
						</div>
					</div>
				</div>
				<div className="infoParagraph" id="infoP1">
					<h1>Welcome...</h1>
					<p>
						Welcome to The Village Doctor at Cherry Hill, the Family Practice of Dr. Ken Grimm. 
						We specialize in offering evidence-based medicine and old-fashioned care to our patients of all ages. 
						We are very happy that you have visited us here on the web. Feel free to look around. 
						We are sure you will be happy with what you find, and we look forward to welcoming you to the practice in person soon!
					</p>	
					<p>
						The practice can be called The Village Doctor, The Village Doctor at Cherry Hill, or Cherry Hill Village Family Medicine. 
						Whichever of the names you might hear or read you can rest assured that they are all the same practice.
					</p>
				</div>
				<img id="image1" src="./images/reception.jpg" alt="Reception Desk"/>
				<img id="image2" src="./images/waitingroom.jpg" alt="Waiting Room"/>
				<div className="infoParagraph" id="infoP2">
					<h1>Make Yourself at Home</h1>
					<p>
					After signing in at the Reception Desk please make yourself comfortable in our waiting room.
					There is a children's area where the little ones are welcome to read, 
					play or color while still being close to a parent or guardian. 
					There is a desk for doing homework and a quiet area with cards and "older" games. 
					Some of these games have smaller parts which might be dangerous for young children to play with so please 
					keep them in the quiet area. If you should need to use the internet while here we have a guest network available.
					</p>	
				</div>
			</div>
		</div>
	);
}