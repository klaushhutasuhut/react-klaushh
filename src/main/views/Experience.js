import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExpTitle(){
	return(
		<Col sm={12} md={3}>
			<div className="heading">
				<h3><b>Work Experience</b></h3>
				<h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
			</div>
		</Col>
	);
}

function ExpHistory(){
	return(
		<Col sm={12} md={9}>
			<div className="experience margin-b-50">
				<h4><b>FREELANCE - DATA ENTRY & SOFTWARE TESTER</b></h4>
				<h5 className="font-yellow"><b>BITLABS ACADEMY</b></h5>
				<h6 className="font-lite-black margin-t-10">JANUARY 2019 - PRESENT</h6>
				<p className="margin-tb-30">Input lesson in website sometimes checking bug in the website and data.</p>
				<ul className="list margin-b-30">
					<li>Website: <a href="https://bitlabs.id/">https://bitlabs.id/</a></li>
				</ul>
			</div>		
			<div className="experience margin-b-50">
				<h4><b>INTERN - NATIONAL LAND AGENCY</b></h4>
				<h5 className="font-yellow"><b>DATA ADMINISTRATOR</b></h5>
				<h6 className="font-lite-black margin-t-10">Augustus 2014 - November 2015</h6>
				<p className="margin-tb-30">As a data administrator my job is to secure data I/O in website application database, and save it to ms.excel and also make a report in form ms.word, also i build application desktop to make system I/O much efficient than before. why i created application? because there is a problem in registration land, so i created a desktop application and is called Maillist.</p>
				<ul className="list">
					<li>Website: <a href="https://mpp.kotabogor.go.id/">https://mpp.kotabogor.go.id/</a></li>
				</ul>
			</div>			
		</Col>
	);
}

function Experience(){
    return(
    	<section className="experience-section section">
			<Container>
				<Row>
					<ExpTitle/>
					<ExpHistory/>		
				</Row>
			</Container>
		</section>
    );
}

export default Experience;