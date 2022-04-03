import React from 'react';
import 'styles/resources.css';
import 'styles/resources-mobile.css';
import { ResourceList } from 'components';



export function Resources() {
		return(
			<div>
				<div className="typical-content resource-page">
					<h1>Resources</h1>
					<div className="infoBody">
						<p>Resources we think you will find helpful will be listed here, so please plan on coming back to see what links have been posted</p>
						<ul>
							<ResourceList />
							{/* <li>Headstart is a program to provide resources for families with young children, to support their early development: <a href='http://www.michheadstart.org/'>www.michheadstart.org</a></li>
							<li>Patient Education/Handouts regarding a wide variety of health conditions: <a href='https://patienteducation.vivacare.com/toolkit'>www.thevillagedoctor.fromyourdoctor.com</a></li>
							<li>Mayo Clinic Health information site: <a href='http://www.mayoclinic.com/health-information/'>www.mayoclinic.com/health-information</a></li>
							<li>Web MD site: information about health, diseases, medications: <a href='http://webmd.com/'>www.webmd.com</a></li>
							<li>Information about diseases, prevention/wellness, medications, and useful health tools:  <a href='http://www.familydoctor.org/'>www.familydoctor.org</a></li>
							<li>Health information resources from the National Institutes for Health: <a href='http://health.nih.gov/'>www.health.nih.gov</a></li>
							<li>Information about vaccinations: <a href='http://www.vaccines.gov/'>www.vaccines.gov</a></li>
							<li>Information specifically for our younger patients and their families: <a href='http://www.healthychildren.org/'>www.healthychildren.org</a></li>						 */}
						</ul>
					</div>
				</div>
			</div>
		)
}
