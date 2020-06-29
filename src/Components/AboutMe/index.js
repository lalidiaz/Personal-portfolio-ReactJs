import React from 'react'
import './style.scss'
import userImage from '../../assets/userImage.jpg'


class AboutMe extends React.Component {
    render() {
        return (
            <div className='AboutMe' id='AboutMe'>
                <img className='me' src={userImage} alt='' />
                <p className="description">I have been working as a Flight Attendant Emirates Airline for 4 years and recently
                I started getting into Frontend Development. I would like to have a chance of improving my skills and
            acquiring experience as a developer.</p>
            </div>
        )
    }
}
export default AboutMe