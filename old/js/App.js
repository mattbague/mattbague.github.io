import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from 'old/js/components/NavBar.js';
import Header from 'old/js/components/Header.js';
import Portfolio from 'old/js/components/Portfolio.js';
import Skills from 'old/js/components/Skills.js';
import About from 'old/js/components/About.js';
import Contact from 'old/js/components/Contact.js';
import Footer from 'old/js/components/Footer.js';
import "../css/freelancer.css";

const App = React.createClass({
  render () {
    return <div>
      <NavBar/>
      <Header/>
      <Portfolio/>
      <Skills/>
      <About/>
      {/*<Contact/>*/}
      <Footer/>
    </div>;
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
