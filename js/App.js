import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Portfolio from 'components/Portfolio';
import About from 'components/About';
import Contact from 'components/Contact';

const App = React.createClass({
  render () {
    return <div>
      <NavBar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
    </div>;
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
