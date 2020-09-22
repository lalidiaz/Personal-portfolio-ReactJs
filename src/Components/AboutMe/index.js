import React from 'react'
import './style.scss'
import userImage from '../../assets/userImage.jpg'


class AboutMe extends React.Component {
    render() {
        return (
            <div className='AboutMe' id='AboutMe'>
                <img className='me' src={userImage} alt='' />
                <p className="description">I am a Front End Developer with passion for coding and building webs/apps.
Always trying to learn something new. I would like to have a chance to keep improving my skills and acquiring experience as a developer.</p>
            </div>
        )
    }
}
export default AboutMe