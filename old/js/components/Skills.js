import React from 'react';
import {Modal, Button} from 'react-bootstrap';


const Skills = React.createClass({
  render() {
    return <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Skills</h2>
            <hr className="star-primary"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img src="img/skills/scala.png"
                 style={{maxWidth: "100%", maxHeight: "260px"}}
                 className="img-responsive img-centered" alt=""/>
          </div>
          <div className="col-sm-3">
            <img src="img/skills/java.png"
                 style={{maxWidth: "100%", maxHeight: "260px"}}
                 className="img-responsive img-centered" alt=""/>
          </div>
          <div className="col-sm-3">
            <img src="img/skills/react.png"
                 style={{maxWidth: "100%", maxHeight: "260px"}}
                 className="img-responsive img-centered" alt=""/>
          </div>
          <div className="col-sm-3">
            <img src="img/skills/kafka.png"
                 style={{maxWidth: "100%", maxHeight: "260px"}}
                 className="img-responsive img-centered" alt=""/>
          </div>
        </div>
      </div>
    </section>;
  }
});

export default Skills;