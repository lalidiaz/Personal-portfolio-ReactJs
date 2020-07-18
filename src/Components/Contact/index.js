import React from "react"
import "./style.scss"
import contacto from "../../assets/contact.png"
import Resume from '../../assets/LauraDiazCV.pdf'

class Contact extends React.Component {
	render() {
		return (
			<div className="contactContainer">
			<img className="contactTitle" src={contacto} id='Contact'/>
				<div className="contactWrapper">
					<div className="mail">lauradiaz1586@gmail.com</div>
					<div className="linksContainer">
						<li><a className="linkContact" href={Resume} download>Resume</a></li>
						<li><a className="linkContact" href="https://github.com/lalidiaz" target="_blank">Github</a></li>
						<li><a className="linkContact" href="https://www.linkedin.com/in/laura-diaz-a661a617a/" target="_blank">Linkedin</a></li>
					</div>
				</div>
			</div>


		)
	}
}
export default Contact