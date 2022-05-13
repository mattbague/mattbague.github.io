import React, {useEffect} from 'react';
import 'App.css';
import {HashRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Navigation, {routes} from "./Navigation";

export default function App() {
  return <Router>
    <ScrollToTop/>
    <div className="p-2">
      <Navigation/>
      <Routes>
      {routes}
        <Route path={"/not-found"} element={PageNotFound}/>
        <Route path="/*" element={<Navigate to="/not-found"/>}/>
      </Routes>
    </div>
  </Router>;
}

const PageNotFound = <div>
  Not Found
</div>

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}