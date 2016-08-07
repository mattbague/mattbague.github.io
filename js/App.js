import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from 'components/NavBar';
import Header from 'components/Header';

const App = React.createClass({
  render () {
    return <div>
      <NavBar/>
      <Header/>
    </div>;
  }
});

ReactDOM.render(<App/>, document.getElementById("container"));
