import React from 'react'
import './style.scss'
import userImage from '../../assets/userImage.jpg'


class AboutMe extends React.Component {
    render() {
        return (
            <div className='AboutMe' id='AboutMe'>
                <img className='me' src={userImage} alt='' />
                <p className="description">I am currently working as a Junior Front end Developer for a Dubai based company. I would like to have a chance to keep improving my skills and
            acquiring experience as a developer.</p>
            </div>
        )
    }
}
export default AboutMe