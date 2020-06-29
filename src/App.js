import React from 'react';
// import Header from './Components/Header'
import Main from './Components/Main'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Cards from './Components/Cards'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Main />
      <AboutMe />
      <Skills />
      <Cards />
      <Contact />
      <Footer />
      {/* <Router >
        <Route path='/AboutMe' exact component={AboutMe} />
       
      </Router>  */}

    </div>
  );
}

export default App;
