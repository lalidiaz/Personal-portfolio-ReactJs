import React from 'react'
import Card from '../Card'
import './style.scss'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'
import project7 from '../../assets/project7.png'
import project8 from '../../assets/project8.png'

class Cards extends React.Component {
  render() {
    const Projects = [
      {
        img: project1,
        title: ' 🎥 Courflix',
        description: 'First part of the coding Bootcamp final project. I recreated a similar version of Netflix platform but this is called Courflix.',
        url: 'https://courflix.lalidiaz.now.sh/'
      },
      {
        img: project2,
        title: '🌴 Bali Experience',
        description: '3D Cards created with CSS. A small trip to this amazing place called Bali, Indonesia.',
        url:'https://baliexperience.now.sh/'
      },
      {
        img: project3,
        title: '🐱 Random Cat',
        description: "Press the button to enjoy random Cat. I used Fetch + API to bring data from the public Cat API. JavaScript vanilla.",
        url:'https://fetch-cat-api-apem7ifi6.vercel.app/'
      },

      {
        img: project4,
        title: '🌧 Weather App',
        description: "You can check the weather of any city with this App. Built with JavaScript vanilla.",
        url: 'https://app-weather.vercel.app/'
        
      },

      {
        img: project5,
        title: '🎨 Mom Web Page',
        description: "I created a web page for my Mom, she is an Artist and also Art teacher.",
        url:'https://pagina-mami.lalidiaz.now.sh/'

      },
      {
        img: project6,
        title: '📸 Camera for sale!-React',
        description: "In this App I brought data with Fetch from an e-commerce public API, the cards display price (also currency), name of the product and picture.",
        url:'https://github.com/lalidiaz/ReactJs-FETCH'

      },
      {
        img: project7,
        title: '🔍 Dynamic Cards-React',
        description: "This cards can change the content dynamically. The cards will display on screen according to the content I add.",
        url:'https://github.com/lalidiaz/StartUP-ReactJs'

      },
      {
        img: project8,
        title: '🏗 La Muralla Roja Blog',
        description: "I created an architecture blog about La Muralla Roja, an amazing peace of architecture built in the 60s.",
        url:'https://efecto-parallax-3nd21jqki.vercel.app/'

      }

    ]

    return (

      <div className='portfolioWrapper'id='Cards'>
        <img className='portfolioTitle' src='../assets/portfolio.png' />
        <div className='cardWrapper'>

          {Projects.map((project, key) => {
            return (
              <Card key={key} project={project} />
            )
          })}
        </div>
      </div>

    )
  }
}
export default Cards

