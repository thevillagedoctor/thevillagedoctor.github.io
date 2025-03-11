import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './navbar-mobile.css';

window.addEventListener('scroll', event => {
	if (window.pageYOffset > 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 100");
		document.getElementById('return-up-mobile').setAttribute("style", "opacity: 100");
	} else if (window.pageYOffset <= 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 0");
		document.getElementById('return-up-mobile').setAttribute("style", "opacity: 0");
	}
});


type navBarProps = {
	navMenuVis: boolean,
	mobileMenuCallback: Function,
}

type navBarState = {
	highContrast: boolean,
	contrastText: string,
	logoSource: string,
}

export default class NavBar extends React.Component<navBarProps, navBarState> {
	constructor(props) {
		super(props)
		this.state = {
			highContrast: false,
			contrastText: 'CLICK HERE FOR HIGH CONTRAST',
			logoSource: "./images/BuildingLogo.jpg",
		}
		this.returnUp = this.returnUp.bind(this);
		this.burgerMenu = this.burgerMenu.bind(this);
		this.toggleContrast = this.toggleContrast.bind(this);
	}

	returnUp() {
		window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
	}


	burgerMenu() {
		if (window.innerWidth <= 1250) {
			if (this.props.navMenuVis === true) {
				this.props.mobileMenuCallback(false);
			} else if (this.props.navMenuVis === false) {
				this.props.mobileMenuCallback(true);
			}
		}
	}

	renderButton(key: string, url: string) {
		return <NavButton key={key} buttonName={key} url={url} onClick={this.props.mobileMenuCallback}/>
	}

	

	toggleContrast() {

		if (this.state.highContrast === false) {
			this.setState({
				highContrast: true,
				contrastText: 'CLICK HERE FOR LOW CONTRAST',
				logoSource: "./images/BuildingLogoContrast.jpg"	
			});
		} else {
			this.setState({
				highContrast: false,
				contrastText: 'CLICK HERE FOR HIGH CONTRAST',
				logoSource: "./images/BuildingLogo.jpg"	
			});
		}

	}

	render() {
		var buttons = [
			this.renderButton('Welcome', '/'),
			this.renderButton('About the Practice', '/about'),
			this.renderButton('Direct Primary Care', '/direct-primary-care'),
			this.renderButton('Meet Dr. Grimm', '/providers'),
			this.renderButton('Established Patients', '/established-patients'),
			this.renderButton('New Patients', '/new-patients'),
			this.renderButton('Online Payments', '/online-payments'),
			this.renderButton('Resources', '/resources'),
			this.renderButton('Contact Us/Portal', '/contact'),
		];

		return (
			<div className="nav-bar" id={`contrast-${this.state.highContrast}`}>
				<Link to="/"> 
					<div id="logo-container">
						<img id="logo" src="./images/Logo.png" alt="Village Doctor Logo"/>
						<div>
							<p>The Village Doctor</p>
							<p>at Cherry Hill</p>
						</div>
					</div>
				</Link>
				<nav id="desktopNav">{buttons}</nav>
				<nav id={"mobileNav" + this.props.navMenuVis}>{buttons}</nav>
				<div id="icons">
					<img id="return-up" onClick={this.returnUp} src="./images/return-up-arrow.png" alt="Up Arrow" />
					<img id="return-up-mobile" onClick={this.returnUp} src="./images/return-up-arrow-white.png" alt="Up Arrow" />
					<img className="icon" onClick={this.burgerMenu} src="./images/bars-solid.png" alt="Menu Bar" />
				</div>
				<div id="footer">
					<div>
						<p>Kenneth J. Grimm, MD, MS, FAAFP</p>
						<p>Cherry Hill Village Family Medicine</p>
					</div>
					<div>
						<img id="phoneIcon" src="./images/phone.png" alt="phone icon"/>
						<p id="phoneNum"><a href="tel:7348791068">(734) 879-1068</a></p>
						<p>CALL FOR AN APPOINTMENT</p>
					</div>
					<div id="contrastToggle">
						<p onClick={this.toggleContrast}>{this.state.contrastText}</p>
					</div>
				</div>
			</div>
		);
	}
}

type NavButtonProps = {
	buttonName: string;
	url: string;
	onClick: Function;
}

class NavButton extends React.Component<NavButtonProps> {
	onButtonPressed() {
		this.props.onClick(false);
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	render() {
		return (
			<Link key={this.props.buttonName} to={this.props.url} className="navbutton" onClick={() => this.onButtonPressed()}>{this.props.buttonName}</Link>
		);
	}
}