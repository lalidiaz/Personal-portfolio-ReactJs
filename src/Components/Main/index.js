import React from 'react'
import '../Main/style.scss'
import name from '../../assets/name.png'
import name2 from '../../assets/nameMobile.png'

class Main extends React.Component {
    render() {
        return (
            <div className='Wrapper'>

                <header className='header'>
                    <div className="btnMobile">
                        {/* <img className='btnJs' alt="" src="" /> */}
                    </div>
                    <ul className="list">
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </header>
                <div className="Landing">
                    <img className='nameDesktop' src={name} />
                    <img className='nameMobile' src={name2} />
                    <h3 className='frontEnd'>FRONT END DEVELOPER </h3>
                    
                    {/* <img className='nameMobile' src="" alt="" /> */}

                </div>

            </div >
        )
    }
}
export default Main 