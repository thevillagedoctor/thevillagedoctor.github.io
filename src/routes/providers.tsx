import React from 'react';
import { NavBar } from 'components';
import 'styles/providers.css';
import 'styles/providers-mobile.css'


export function Providers() {
  return (
    <div>
		  <NavBar/>
      <div className="providers-page">
        <h1>Meet our Providers</h1>
          <div className="provider">
            <img src="./images/dr-grimm.jpg" alt="Dr. Grimm"/>
            <h2>Dr. Grimm</h2>
            <p>
              Dr. Ken Grimm is board certified in Family Medicine. He grew up in Pittsburgh, Pennsylvania, but has made Michigan his home since 1994. 
              He lives in Cherry Hill Village, less than one mile from the practice, with his wife and two children. 
              His bachelor's degree is from The Johns Hopkins University, and his medical degree is from the University of Pennsylvania. 
              He completed his residency at the University of Michigan, where he served as chief resident in his final year. 
              He has been in practice in the area since 1997. He has taught medical students from both the University of Michigan and Wayne State University, 
              and resident physicians at both the Oakwood and Saint Mary Mercy Hospitals' Family Medicine Residency Programs.
            </p>
            <p>
              Dr. Grimm believes his role is to be a partner with his patients in their health care. 
              He is an advisor, offering medical facts and expert opinions to his patients, 
              allowing them to make their own best, most informed decisions regarding their healthcare.
            </p>
            <p>
              Dr. Grimm has a special interest in Preventive Medicine, realizing that it is far better to prevent a disease or a complication from happening, 
              than it is to manage it later. He is an expert in the science of Preventive Medicine. 
              He can offer you advice on what the latest research has taught us, and how it applies to your own personal preventive health plan.
            </p>
            <p>
              Dr. Grimm believes deeply in the model of the true Family Doctor, 
              where patients and their families have a personal relationship with their physician, 
              who is there to help them with all of their healthcare needs in a comprehensive and continuous way over long periods of time. 
              This has, unfortunately, become rare in healthcare today. If it something that you value too, you can find it here. 
              This is what we mean by <span className="italics">evidence-based medicine, old-fashioned care</span>.
            </p>
          </div>
          <div className="provider">
            <img src="./images/sara-west.jpg" alt="Sara West"/>
            <h2>Sara West</h2>
            <p>
              Sara West is a board-certified Family Nurse Practitioner. 
              She lives in Livonia with her husband and their two sweet and spunky children.
            </p>
            <p>
              She has a bachelor’s degree in Psychology from Albion College and a bachelor’s 
              degree in Nursing from the University of Michigan. Sara also completed her master’s degree to become a Family Nurse Practitioner 
              at the University of Michigan. She enjoys working with people of all ages and spent her time as a nurse working at the 
              University of Michigan’s Mott Children’s Hospital.
            </p>
            <p>
              As an Advanced Practice Registered Nurse, Sara values working as a partner with her patients 
              in their health care decisions. She will offer up-to-date science and expert opinions 
              when helping her patients make informed decisions regarding their healthcare.
            </p>
            <p>
              Sara views health not only as the absence of disease, but also as a sense of balance in one’s life and a feeling of wellness. 
              She believes that when there is illness, optimizing one’s emotional health is essential to treatment and recovery.
            </p>
            <p>
              Sara believes in the importance of a healthy lifestyle from birth through adulthood. 
              This often requires a collaborative effort between all family members. 
              She can help you work toward healthier choices and provides counseling and support for people interested in making positive changes to improve their health.
            </p>
            <p>
              Sara listens intently to her patients’ concerns and strives to create a trusting environment 
              so that the each person’s healthcare needs can be managed in a comprehensive manner.
            </p>
          </div>
          <div className="provider">
            <img src="./images/sydney-hattie.jpg" alt="Sydney Hattie"/>
            <h2>Sydney Hattie</h2>
            <p>
              Sydney L. Hattie is a board-certified Family Nurse Practitioner. She lives in
              Canton with her husband, young daughter, and two dogs.
            </p>
            <p>
              She received her bachelor’s degree in nursing from the University of Michigan 
              and continued on at Michigan to complete her Doctorate of Nursing Practice (DNP). 
              She enjoys treating people of all ages and focuses on the prevention and 
              management of chronic diseases to promote the highest quality of life.
            </p>
            <p>
              Sydney enjoys providing holistic care that is not only supportive of physical health but also mental health. 
              Sydney focused on supporting those with mental illness while completing her doctoral project at Mott Children’s Hospital. 
              She understands that addressing and treating mental illness can drastically improve patient outcomes.
            </p>
            <p>
              Sydney is also passionate about patient-centered care and involving the patient in daily health decisions. 
              By providing a patient with evidence-based healthcare options, 
              patients can be supported to make the best health decisions for themselves and their families.
            </p>
            <p>
              With her DNP, Sydney dedicated extra years of schooling to learning about quality improvement 
              and how to implement best practices into a healthcare setting.
            </p>
            <p>
              Sydney believes through a strong provider-patient relationship, every patient can reach their full health potential.
            </p>
          </div>
      </div>
    </div>
  );
}