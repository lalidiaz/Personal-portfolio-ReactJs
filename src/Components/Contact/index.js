import React from "react"
import "./style.scss"
import contacto from "../../assets/contact.png"

class Contact extends React.Component {
	render() {
		return (
			<React.Fragment>
				<img className="contactTitle" src={contacto} />
				<div className="contactWrapper">
					<div className="mail">lauradiaz1586@gmail.com</div>
					<div className="linksContainer">
						<li><a className="linkContact" href="#" target="_blank">Resume</a></li>
						<li><a className="linkContact" href="https://github.com/lalidiaz" target="_blank">Github</a></li>
						<li><a className="linkContact" href="https://www.linkedin.com/in/laura-diaz-a661a617a/" target="_blank">Linkedin</a></li>
					</div>
				</div>
			</React.Fragment>


		)
	}
}
export default Contact