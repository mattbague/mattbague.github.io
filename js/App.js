import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from 'components/NavBar';

const App = React.createClass({
  render () {
    return <NavBar/>
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
