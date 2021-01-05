import React from 'react';
import {LoaderHtml, LoaderJava, LoaderJavaScript, LoaderPhp} from '../components/CircularLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Aboutme(){
	return(
		<Row>
			<Col sm={12} md={3}>
				<div className="heading">
					<h3><b>About me</b></h3>
					<h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
				</div>
			</Col>
			<Col sm={12} md={9}>
				<p className="margin-b-50">I used not to know about programming or software development, until i become high school student when my teacher it's teach us programming using C++ as language, at first is really hard to understand it, but finally i getting used to it. i still remember created basic calculator, learn GUI and used database management system sql in application to look dynamic.
				So i finally find my passion in programming language and studied more language like java, php, javascript, and learning algorithms, then i decide to took collage as information management at University. then i learned truly there was more yet to learn.
				When i had intern in land agency i build project application to make land certificate, that was first time i used my skill to this industry and then build more project application for a company. I feel that I still have a lot potential in programming because there certainly yet more to learn and yet more to build.
				</p>
				<Skill/>
			</Col>
		</Row>
	);
}

function Skill(){
	return(
		<Row>
			<Col sm={6} md={6} lg={3}>
				<div className="radial-prog-area margin-b-30">
					<div className="radial-progress" data-prog-percent=".97">
						<LoaderHtml/>
					</div>
				</div>
			</Col>	
			<Col sm={6} md={6} lg={3}>
				<div className="radial-prog-area margin-b-30">
					<div className="radial-progress" data-prog-percent=".91">
						<LoaderJava/>
					</div>
				</div>
			</Col>
			<Col sm={6} md={6} lg={3}>
				<div className="radial-prog-area margin-b-30">
					<div className="radial-progress" data-prog-percent=".71">
						<LoaderJavaScript/>
					</div>
				</div>
			</Col>
			
			<Col sm={6} md={6} lg={3}>
				<div className="radial-prog-area margin-b-50">
					<div className="radial-progress" data-prog-percent=".82">
						<LoaderPhp/>
					</div>
				</div>
			</Col>
		</Row>
	);
}

function About(){
    return(
        <section className="about-section section">
			<Container>
				<Aboutme/>
			</Container>
		</section>
    );
}

export default About;