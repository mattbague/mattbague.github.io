import React from 'react';

const Header = React.createClass({
  render() {
    return <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="img-responsive" src="img/profile_c.png" alt=""/>
            <div className="intro-text">
              <span className="name">Matt Bague</span>
              <span className="skills">Full-Stack Software Engineer</span>
              <hr className="star-light"/>
              <span className="skills">Frontend - Backend - Big Data - DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  }
});

export default Header;