import React from 'react';

const AboutMe = React.createClass({
  render() {
    return <section className="success" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>About</h2>
            <hr className="star-light"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-lg-offset-2 text-justify">
            <p>
              I'm a programmer / developer / engineer / whatever people are calling us these days :).
              I graduated with a Computer Science degree from Cal Poly, San Luis Obispo back in 2014.
              Luckily, I've had the pleasure of working at places where I could explore multiple parts of
              software engineering. Such as writing Spark jobs to process big data to using Ansible to deploy
              code in a consistent and automated manner.
            </p>
          </div>
          <div className="col-lg-4 text-justify">
            <p>
              As someone who's curious and interested in learning new things, I couldn't have asked for a better career
              path.
            </p>
            <p>
              When I'm not programming, I like to play video games, practice cooking, or just browse the internet's
              abundance of information. Some of my favorite video games include the Dark Souls / Bloodborne series
              and the Legend of Zelda series.
            </p>
          </div>
          <div className="col-lg-8 col-lg-offset-2 text-center">
          </div>
        </div>
      </div>
    </section>;
  }
});

export default AboutMe;