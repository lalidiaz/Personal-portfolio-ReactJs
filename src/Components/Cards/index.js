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

class Cards extends React.Component {
  render() {
    const Projects = [
      {
        img: project1,
        title: ' 🎥 Courflix',
        description: 'First part of the coding Bootcamp final project, I recreate a similar version of Netflix platform but this is called Courflix.'
      },
      {
        img: project2,
        title: '🌴 Bali Experience',
        description: '3D Cards created with CSS.A small trip to this amazing place called Bali, Indonesia.'
      },
      {
        img: project3,
        title: '🐱 Random Cat',
        description: "Press the button to enjoy random Cat.I used Fetch + API to bring data from the public Cat API. JavaScript vanilla."

      },

      {
        img: project4,
        title: '🌧 Weather App',
        description: "You can check the weather in every City with this App. JavaScript vanilla."

      },

      {
        img: project5,
        title: '🎨 Mom Web Page',
        description: "I create a web page for my Mom, she is an Artist and also Art teacher."

      },
      {
        img: project6,
        title: '📸 Camera for sale!-React',
        description: "In this App I brought data with Fetch from a e-commerce public API, the cards display price(also currency), name of the product and picture."

      },
      {
        img: project7,
        title: '🔍 Dynamic Cards-React',
        description: "This cards can change the content dynamically. I can add more content and more cards will display on screen according to the content you add."

      }

    ]

    return (

      <div className='portfolioWrapper'>
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

