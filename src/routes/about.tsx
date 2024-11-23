import React from 'react';
import 'styles/about.css';
import 'styles/about-mobile.css';
import { AboutText } from 'components';



export function About() {
		return(
			<div>
				<div className="about-page typical-content">
					<h1>About the Practice</h1>
					<img id="buildingLogo" src="./images/BuildingLogo.jpg" alt="Building"/>
					<div className="infoBody">
						<AboutText />
						<p>
							We believe that we should help you with all of your healthcare needs, and we have been designated as a Patient-Centered Medical Home.
							Click <a href="./pdfs/pcmh-fact-sheet.pdf" target="_blank">here</a> to learn more about Patient-Centered Medical Homes. 
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
