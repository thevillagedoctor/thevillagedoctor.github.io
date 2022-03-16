import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import './navbar-mobile.css';

window.addEventListener('scroll', event => {
	if (window.pageYOffset > 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 100");
	} else if (window.pageYOffset <= 50) {
		document.getElementById('return-up').setAttribute("style", "opacity: 0");
	}
});

type NavBarState = {
	menuVisible: boolean,
}

let navMenuVisible: boolean = false;

export default class NavBar extends React.Component<{}, NavBarState> {
	constructor(props: object) {
		super(props)
		this.returnUp = this.returnUp.bind(this);
		this.burgerMenu = this.burgerMenu.bind(this);
	}

	returnUp() {
		window.scroll(
			{
				top: 0,
				left: 0,
				behavior: 'smooth'
			}
		);
	}


	burgerMenu() {
		if (window.innerWidth <= 1000) {
			if (navMenuVisible === true) {
				document.getElementById('mobileNav').setAttribute("style", "display: none");
				navMenuVisible = false;
			} else if (navMenuVisible === false) {
				document.getElementById('mobileNav').setAttribute("style", "display: flex");
				navMenuVisible = true;
			}
		}
	}

	renderButton(key: string, url: string) {
		return <NavButton key={key} buttonName={key} url={url} />
	}

	render() {
		var buttons = [
			this.renderButton('Welcome', '/'),
			this.renderButton('About the Pracitce', '/about'),
			this.renderButton('Meet our Providers', '/providers'),
			this.renderButton('Established Patients', '/established-patients'),
			this.renderButton('New Patients', '/new-patients'),
			this.renderButton('Insurance', '/insurance'),
			this.renderButton('Resources', '/resources'),
			this.renderButton('Contact Us', '/contact'),
		];

		return (
			<div id="nav-bar">
				<div id="logo-container">
					<img id="logo" src="./images/Logo.png" alt="Village Doctor Logo"/>
					<div>
						<p>THE VILLAGE DOCTOR</p>
						<p>AT CHERRY HILL</p>
					</div>
				</div>
				<nav id="desktopNav">{buttons}</nav>
				<nav id="mobileNav">{buttons}</nav>
				<div id="icons">
					<img id="return-up" onClick={this.returnUp} src="./images/return-up-arrow.png" alt="Up Arrow" />
					<img className="icon" onClick={this.burgerMenu} src="./images/bars-solid.png" alt="Menu Bar" />
				</div>
				<div className="footer">
					<div>
						<p>Kenneth J. Grimm, MD, MS, FAAFP</p>
						<p>Cherry Hill Village Family Medicine</p>
					</div>
					<div>
						<img id="phoneIcon" src="./images/phone.png" alt="phone icon"/>
						<p id="phoneNum">(734) 879-1068</p>
						<p>CALL FOR AN APPOINTMENT</p>
					</div>
				</div>
			</div>
		);
	}
}

type NavButtonProps = {
	buttonName: string;
	url: string;
}

class NavButton extends React.Component<NavButtonProps> {
	onButtonPressed() {
		document.getElementById('mobileNav').setAttribute("style", "display: none");
		navMenuVisible = false;
	}

	render() {
		return (
			<Link key={this.props.buttonName} to={this.props.url} className="navbutton" onClick={() => this.onButtonPressed()}>{this.props.buttonName}</Link>
		);
	}
}