import React from 'react';
import 'styles/patients.css';
import 'styles/patients-mobile.css';
import { OnlinePaymentText } from 'components';

export function OnlinePayments() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>Online Payments</h1>
                <div className="infoBody">	
                <div className='paragraph'>
                    {/* <h2>Online Payments</h2> */}
                    <OnlinePaymentText/>
                    <a className="button" href="https://pay.balancecollect.com/m/chvfm" rel="noreferrer" target={"_blank"}>Make an Online Payment</a>	
                    <p className="italics">DCP patients, please use the <a className="bold" href="https://thevillagedoctor.hint.com/login/request" rel="noreferrer" target={"_blank"}>Hint Patient Portal</a> to manage your membership payments!</p>
                </div>
            </div>
            </div>
		</div>
	);
}