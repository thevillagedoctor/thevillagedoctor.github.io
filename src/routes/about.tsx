import React from 'react';
import 'styles/about.css';
import 'styles/about-mobile.css';



export function About() {
		return(
			<div>
				<div className="about-page">
					<h1>About the Practice</h1>
					<img id="buildingLogo" src="./images/BuildingLogo.jpg" alt="Building"/>
					<div className="infoBody">
						<p>The Village Doctor at Cherry Hill was established in 2012 by Dr. Ken Grimm. 
							We are located at the entrance to Cherry Hill Village, a beautiful neighborhood on the west side of Canton. 
							Our goal is to provide outstanding primary care medical services to the people of the Village, Canton, and the surrounding areas.
						</p>
						<p>	
							Here, we still believe in the personal relationship that you and your family have with your doctor! 
							We want to get to know you individually, because that helps us to offer you the most appropriate care. 
							Our practice can be an extension of your family! Whether you are healthy and seeking advice on maximizing wellness, 
							or you need a partner in managing chronic medical problems such as diabetes, high blood pressure, 
							heart disease, or depression, you will find what you are looking for here.
						</p>
						<p>
							We care for patients of all ages, from "cradle to grave". Whether you are a mother with a newborn, 
							or a son with an elderly parent, we are trained and ready to help you and your family with your health care needs. 
							In fact, we even care for very little ones before they are born, by taking care of our patients throughout pregnancy, 
							including delivering the baby at one of our local hospitals! We provide women's health services, 
							well child care, adolescent medicine, and care for elderly patients. 
							We perform most office-based procedures right here, meaning that you will rarely have to be referred to a doctor you don't know.
						</p>
						<p>
							We understand that when our patients are sick enough to require hospitalization, that is when they need us the most. 
							That is why we personally provide hospital care for the patients in our practice, 
							rather than turning them over to a "hospitalist" who doesn't know them. If you need to be in the hospital, we will be there, 
							providing the same personal care that you have come to know from the office.
						</p>
						<p>
							We believe that we should help you with all of your healthcare needs, and we have been designated as a Patient Centered Medical Home.
							Click <a href="https://www.bcbsm.com/content/dam/public/Providers/Documents/value/patient-centered-medical-home-fact-sheet.pdf" target="blank">here</a> to learn more about Patienct Centered Medical Homes. 
						</p>
						<p>
							Here at The Village Doctor, we truly do provide <span className="italics">evidence-based medicine, old-fashioned care</span>.
						</p>
					</div>
					<div className="imageGalery">
						<figure>
							<img src="./images/exam-room.jpg" alt="Exam Room"/>
							<figcaption>Exam Room</figcaption>
						</figure>
						<figure>
						<img src="./images/nurses-station.jpg" alt="Nurses Station"/>
							<figcaption>Front Desk</figcaption>
						</figure>
						<figure>
						<img src="./images/procedure-room.jpg" alt="Procedure Room"/>
							<figcaption>Procedure Room</figcaption>
						</figure>
						
						
					</div>
				</div>
			</div>
		)
}
