import React, {useEffect} from "react";
import Home from "Home";
import Resume from "Resume";
import {NavLink, Route} from "react-router-dom";
import Contact from "Contact";

type RouteDef = {
  title: string;
  path: string;
  component: React.ComponentType;
}

const routeDefs: RouteDef[] = [
  {
    title: "Home",
    path: "/",
    component: Home
  },
  {
    title: "Resume",
    path: "/resume",
    component: Resume
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact
  }
]

export const routes = routeDefs.map(rd => {
  return <Route
    key={rd.title}
    path={rd.path}
    element={<rd.component/>}
  />;
});

const navLinks = routeDefs.map(rd => {
  return <NavLink key={rd.title} className={(navData) => `px-1 ${navData.isActive ? "border-b border-indigo-400 text-indigo-500" : "hover:border-b hover:border-black"}`} to={rd.path}>
      {rd.title}
    </NavLink>
});


export default function Navigation() {
  return <div className="flex flex-row justify-center gap-2 text-xl mb-8">
    {navLinks}
  </div>
}