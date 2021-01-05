import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pic from '../../assets/img/profile.jpg';

function Contactperson(){
	return(
		<div className="heading-wrapper">
			<Row>
				<Col sm={6} md={6} lg={4}>
					<div className="info">
						<i className="icon ion-ios-location-outline"></i>
						<div className="right-area">
							<h5>Bogor, Bogor district</h5>
							<h5>st. Jabaru 02,  Komplek Mekar Baru, No. D9</h5>
						</div>
					</div>
				</Col>
					
				<Col sm={6} md={6} lg={4}>
					<div className="info">
						<i className="icon ion-ios-telephone-outline"></i>
						<div className="right-area">
							<h5>0838-9501-8847</h5>
						</div>
					</div>
				</Col>
					
				<Col sm={6} md={6} lg={4}>
					<div className="info">
						<i className="icon ion-ios-chatboxes-outline"></i>
						<div className="right-area">
							<h5>klaus.hutasuhut@gmail.com</h5>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}

function Profile(){
	return(
		<div className="intro">
			<Row>
				<Col sm={8} md={4} lg={3}>
					<div className="profile-img margin-b-30">
						<img src={Pic} alt=""/>
					</div>
				</Col>	
				<Col sm={10} md={5} lg={6}>		
					<h2><b>Klaus H. Hutasuhut</b></h2>
					<h4 className="font-yellow">Web Programmer</h4>
						<ul className="information margin-tb-30">
							<li><b className="font-yellow">BORN</b> : November 19, 1998</li>
							<li><b className="font-yellow">EMAIL</b> : klaus.hutasuhut@gmail.com</li>
							<li><b className="font-yellow">MARITAL STATUS</b> : Single</li>
						</ul>
						<ul className="social-icons">
							<li><a href="https://id.pinterest.com/hernandohutasuhut/"><i className="ion-social-pinterest"></i></a></li>
							<li><a href="https://www.linkedin.com/in/klaus-hernando-45b10a165/"><i className="ion-social-linkedin"></i></a></li>
							<li><a href="https://github.com/Klaus1Hutasuhut"><i className="ion-social-github"></i></a></li>
							<li><a href="https://www.facebook.com/klaus.hutasuhut"><i className="ion-social-facebook"></i></a></li>
							<li><a href="https://www.youtube.com/channel/UCCxITcIJF9jIt1vFJCU1DTQ"><i className="ion-social-youtube"></i></a></li>
						</ul>
				</Col>	
				<Col sm={10} md={3} lg={3}>
					<a className="downlad-btn" href="#">Download CV</a>
				</Col>
			</Row>	
		</div>
	);
}

function Home(){
    return(
        <section className="intro-section">
			<Container>	
				<Contactperson/>
				<Profile/>
			</Container>
		</section>
    );
}

export default Home;