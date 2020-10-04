import React from 'react'
import './style.scss'
import CSS from '../../assets/css.png'
import Github from '../../assets/github.png'
import Git from '../../assets/Git.png'
import HTML5 from '../../assets/html5.png'
import Javascript from '../../assets/js.png'
import reactjs from '../../assets/react.png'
import Sass from '../../assets/sass.png'
import responsive from '../../assets/responsive.png'
import title from '../../assets/skills.png'
import ReactTooltip from "react-tooltip";
import Redux from '../../assets/redux.png'
import Nextjs from '../../assets/nextjs.png'

class Skills extends React.Component {
	render() {
		return (

			<div className='skillsWrapper' id='Skills'>
				<ReactTooltip />
				<img className='skillsTitle' alt="title" src={title} />

				<div className="skillsContainer">
					<div data-tip="HTML5">
						<img src={HTML5} />
					</div>
					<div data-tip="CSS3">
						<img src={CSS} />
					</div>
					<div data-tip="SASS">
						<img src={Sass} />
					</div>
					<div data-tip="Javscript">
						<img src={Javascript} />
					</div>
					<div data-tip="React Js">
						<img src={reactjs} />
					</div>
					<div data-tip="Github">
						<img src={Github} />
					</div>
					<div data-tip="Git">
						<img src={Git} />
					</div>
					<div data-tip="Responsive designs">
						<img src={responsive} />
					</div>
					<div data-tip="Redux">
						<img src={Redux} />
					</div>
					<div data-tip="NextJs">
						<img src={Nextjs} />
					</div>
				</div>
			</div>
		)
	}
}
export default Skills