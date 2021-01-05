import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EducationTitle(){
	return(
		<Row>
			<Col sm={12} md={3}>
				<div className="heading">
					<h3><b>Education</b></h3>
					<h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
				</div>
			</Col>
			<EducationExp/>
		</Row>
	);
}

function EducationExp(){
	return(
		<Col sm={12} md={9}>
			<div className="education-wrapper">
				<div className="education margin-b-50">
					<h4><b>ASSOCIATE DEGREE</b></h4>
					<h5 className="font-yellow"><b>UNIVERSITY BSI - INFORMATION SYSTEM</b></h5>
					<h6 className="font-lite-black margin-t-10">GRADUATED IN NOV 2019</h6>
					<p className="margin-tb-30">I had created a project website application with my college friends, the type of website we made is e-learning. ande we gave it name is UBAC, basically is website learn TOEFL and IELTS. Oh and also i had joined HIMNI as a member organization, what i do in HIMNI is made an event and gather sponsor to it.</p>
				</div>		
			</div>
		</Col>
	);
}

function Education(){
    return(
        <section className="education-section section">
			<Container>
				<EducationTitle/>
			</Container>
		</section>
    );
}

export default Education;