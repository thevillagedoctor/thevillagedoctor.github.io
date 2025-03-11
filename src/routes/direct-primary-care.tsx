import React from 'react';
// import 'styles/patients.css';
// import 'styles/patients-mobile.css';
import { DPCIntroText, DPCBenefitsText, DPCPayText, DPCLabText, DPCXRayText } from 'components';

export function DirectPrimaryCare() {
	return (
		<div>
			<div className="typical-content patients-page">
				<h1>Direct Primary Care</h1>
				<div className="infoBody">	
                    <div className='paragraph'>
                        <DPCIntroText/>
						<h3 className="warning"><b>Please note, if you have Medicare, you CANNOT enroll until 1/1/2025</b></h3>
						<div className='button-container'>
						<a className="button" href="https://thevillagedoctor.hint.com/signup" target="_blank" rel="noreferrer">New Patient Registration</a>
						<a className="button" href="./pdfs/Patient Contract December 2024.pdf" target="_blank">View Contract</a>
					</div>
                    </div>
					<div className='paragraph'>
						<h2>The Benefits to our Patients</h2>
						<DPCBenefitsText/>
						<ul>
							<li><p><a href="https://www.goodrx.com/insurance/alternative/direct-primary-care/" rel="noreferrer" target={"_blank"}>https://www.goodrx.com/insurance/alternative/direct-primary-care/</a></p></li>
							<li><p><a href="https://www.aafp.org/about/policies/all/direct-primary-care.html" rel="noreferrer" target={"_blank"}>https://www.aafp.org/about/policies/all/direct-primary-care.html</a></p></li>
							<li><p><a href="https://www.healthinsurance.org/glossary/direct-primary-care/" rel="noreferrer" target={"_blank"}>https://www.healthinsurance.org/glossary/direct-primary-care/</a></p></li>
						</ul>
					</div>
					<div className='paragraph'>
						<h2>How will I pay for health care outside of Primary Care at the Village Doctor?</h2>
						<DPCPayText/>
					</div>
					<div className='paragraph'>
						<h2>Emergency or Specialist Care</h2>
						<ul>
							<li><p><b>A Traditional Health Insurance Plan</b> - Potentially with higher copays and higher deductibles to reduce premiums. Most people are familiar with traditional health insurance programs. These include employer-provided plans, ACA exchange plans, and Medicare. Because your primary care needs, including for chronic conditions, will be covered through your membership with The Village Doctor, you may feel comfortable choosing a plan with a larger upfront deductible and/or larger co-pays – which will likely have a lower premium. Generally, the DPC membership fees that you pay are not counted against your deductible.</p></li>
							<li><p><b>Medical Cost Sharing Programs</b> - These programs, also known as health care sharing programs, are co-operative agreements among individuals with a shared interest. Individuals and families contribute to a common “pot” of money and can then submit expenses for reimbursement if they incur health care expenses. It is important to know that these are not insurance plans, they are not subject to state or federal insurance rules and laws, and there is often no contractual obligation to reimburse all expenses. More information can be found <a href="https://www.goodrx.com/insurance/alternative/medical-cost-sharing-program">here</a>.</p></li>
							<li><p><b>Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs)</b> - These are accounts where you can put pre-tax dollars that can be accessed to cover certain medical and health care expenses. HSAs are available to individuals who purchase a High Deductible Health Plan (which has a precise definition) to cover the deductible, co-pays, and other incidental medical expenses that your insurance does not cover. The account belongs to the individual, is portable (you can take it with you if you change jobs), and the unspent balance rolls over to the next year. FSAs are available from many employers to a broader set of employees – but any remaining balance disappears, and the account does not move with you if you change jobs. Please note that most HSAs cannot currently be used to <a href="https://www.healthcompiler.com/the-hsa-and-dpc-dilemma-can-your-health-savings-account-fund-your-dream-doctor">pay the membership fees for the practice</a>. More information can be found <a href="https://www.investopedia.com/insurance/hsa-vs-fsa/">here</a>.</p></li>
						</ul>
					</div>
					<div className='paragraph'>
						<h2>Medications</h2>
						<p>If you wish to pay cash for one of your prescribed medications, we will work with a local pharmacy where you can get low cash prices for most common, generic medications. <a className="link" href="https://www.goodrx.com">GoodRx</a> and <a href="https://www.simplecare.com">SimpleCare</a> provide coupons for low-cost options for many medications. Of course, you can continue to use insurance to obtain medications through the pharmacy of your choice.</p>
					</div>
					<div className='paragraph'>
						<h2>Laboratory Services</h2>
						<DPCLabText/>
					</div>
					<div className='paragraph'>
						<h2>X-Ray and Imaging Services</h2>
						<DPCXRayText/>
					</div>
					<div className="paragraph">
						<p className='italics'>If you still have questions about the Direct Primary Care Model, please follow this link to: <a href="https://dpcnation.org/faq/" className="normal">www.dpcnation.org/faq/</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}