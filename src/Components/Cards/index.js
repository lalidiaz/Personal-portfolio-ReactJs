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
import project9 from '../../assets/project9.png'
import project10 from'../../assets/project10.png'
import project11 from '../../assets/project11.png'
import project12 from '../../assets/project12.png'
import project13 from '../../assets/project13.png'
import project14 from '../../assets/project14.png'


class Cards extends React.Component {
  render() {
    const Projects = [
      {
        img: project1,
        title: ' 🎥 Courflix',
        description: 'Work in progress here 🙌. First part of the coding Bootcamp final project. I recreated a similar version of Netflix platform but this is called Courflix.',
        url: 'https://github.com/lalidiaz/Courflix-Project'
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
      // {
      //   img: project6,
      //   title: '📸 Camera for sale!-React',
      //   description: "In this App I brought data with Fetch from an e-commerce public API, the cards display price (also currency), name of the product and picture.",
      //   url:'https://github.com/lalidiaz/ReactJs-FETCH'

      // },
      {
        img: project7,
        title: '🔮 Dynamic Cards-React',
        description: "This cards can change the content dynamically. The cards will display on screen according to the content I add.",
        url:'https://github.com/lalidiaz/StartUP-ReactJs'

      },
      {
        img: project8,
        title: '🏗 La Muralla Roja Blog',
        description: "I created an architecture blog about La Muralla Roja, an amazing piece of architecture built in the 60s.",
        url:'https://efecto-parallax-3nd21jqki.vercel.app/'

      },
      {
        img: project9,
        title: '🔍 Search Engine',
        description: "This is a search engine built in ReactJs. I brought info from a Public API, you will be able to see price, products and name.",
        url:'https://fetch-mercadolibre.lalidiaz.vercel.app/'
      },
      {
        img: project10,
        title: '🥕 Recipe App',
        description: "This is a recipe App, you can search for any food you like and will show you a variety of recipes.",
        url:'https://food-recipe-app.vercel.app'
      },
      {
        img: project11,
        title: '🐶 Tigram',
        description: "This is a pet Tigram, a social media for pets, you can create a user and register, also like the pictures and when you finish, just log out!",
        url:'https://tigram-app.lalidiaz.vercel.app/'
      },
      {
        img: project12,
        title: '✏️ To Do List',
        description: "This is a To Do List app, you can do your shopping list or your duties of the day!",
        url:'https://react-todolist.lalidiaz.vercel.app/'
      },
      {
        img: project13,
        title: '📝 REDUX + REACT - To Do List',
        description: "This is a To Do List build in React + Redux. ",
        url:'https://todolist-redux.vercel.app'
      },
      {
        img: project14,
        title: 'Devtter 🐦',
        description: "A twitter clon build in NextJs + hooks + Firebase, login with github authentification.",
        url:'https://github.com/lalidiaz/devtter-NextJs-hooks-firebase'
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

