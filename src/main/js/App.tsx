import React, {useEffect} from 'react';
import 'App.css';
import {HashRouter as Router, Redirect, Switch, useLocation} from 'react-router-dom';
import Navigation, {routes} from "./Navigation";

export default function App() {
  return <Router>
    <ScrollToTop/>
    <div className="p-2">
      <Navigation/>
      <Switch>
        {routes}
        <Redirect to="/"/>
      </Switch>
    </div>
  </Router>;
}

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}