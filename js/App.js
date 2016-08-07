import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Portfolio from 'components/Portfolio';
import AboutMe from 'components/AboutMe';

const App = React.createClass({
  render () {
    return <div>
      <NavBar/>
      <Header/>
      <Portfolio/>
      <AboutMe/>
    </div>;
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
