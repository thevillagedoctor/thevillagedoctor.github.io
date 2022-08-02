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
						</ul>
					</div>
				</div>
			</div>
		)
}
