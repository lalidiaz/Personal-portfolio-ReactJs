import React from 'react';
// import Header from './Components/Header'
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Cards from './Components/Cards'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css';




class App extends React.Component {
  render(){
    return (
    <div className="App">
      <Main />
      <AboutMe />
      <Skills />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}
}
export default App
