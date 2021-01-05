import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectTitle(){
	return(
		<Col sm={12} md={3}>
			<div className="heading">
				<h3><b>Project</b></h3>
				<h6 className="font-lite-black"><b>Recent Projects</b></h6>
			</div>
		</Col>
	);
}

function ProjectHistory(){
	return(
		<Col sm={12} md={9}>
			<div className="experience margin-b-50">
				<h4><b>WEB APPLICATIONS - IBMN</b></h4>
				<h5 className="font-yellow"><b></b></h5>
				<h6 className="font-lite-black margin-t-10">2020</h6>
				<p className="margin-tb-30"></p>
				<ul className="list margin-b-30">
					<li>Source: <a href=""></a></li>
				</ul>
			</div>
			<div className="experience margin-b-50">
				<h4><b>DESKTOP APPLICATIONS - GARDA INVENTORY</b></h4>
				<h5 className="font-yellow"><b>CV. GARDA AUTO N SPORT</b></h5>
				<h6 className="font-lite-black margin-t-10">2019</h6>
				<p className="margin-tb-30"></p>
				<ul className="list margin-b-30">
					<li>Source: <a href=""></a></li>
				</ul>
			</div>		
			<div className="experience margin-b-50">
				<h4><b>DESKTOP APPLICATIONS - MAIL LIST</b></h4>
				<h5 className="font-yellow"><b>NATIONAL LAND AGENCY BOGOR CITY</b></h5>
				<h6 className="font-lite-black margin-t-10">2018</h6>
				<p className="margin-tb-30"></p>
				<ul className="list">
					<li>Source: <a href=""></a></li>
				</ul>
			</div>			
		</Col>
	);
}

function Project(){
    return(
    	<section className="experience-section section">
			<Container>
				<Row>
					<ProjectTitle/>
					<ProjectHistory/>		
				</Row>
			</Container>
		</section>
    );
}

export default Project;