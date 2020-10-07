import React from 'react';
import 'App.css';
import Resume from "Resume";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

export default class App extends React.Component<any, any> {

  render() {
    return <Router>
      <Switch>
        <Route exact path="/"><HomeView/></Route>
        <Route exact path="/resume"><Resume standaloneView/></Route>
        <Redirect to="/"/>
      </Switch>
    </Router>;
  }
}

const HomeView = () => {
  return <div>
    <div className="text-center text-3xl font-medium mt-10">Site is getting a makeover. Check back soon!</div>
    <div className="text-center text-lg my-8">Take a look at my resume in the meantime</div>
    <Resume/>
  </div>;
}