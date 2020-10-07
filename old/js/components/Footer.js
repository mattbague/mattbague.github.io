import React from 'react';

const Footer = React.createClass({
  render() {
    return <div>
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-4">
                <h3>Location</h3>
                <p>
                  Westlake Village, CA 91362
                </p>
              </div>
              <div className="footer-col col-md-4">
                <h3>Around the Web</h3>
                <ul className="list-inline">
                  <li>
                    <a target="_blank" href="//github.com/mattbague" className="btn-social btn-outline"><i className="fa fa-fw fa-github-alt"/></a>
                  </li>                 
                  <li>
                    <a target="_blank" href="//www.linkedin.com/in/matthewbague" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"/></a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-md-4">
                <h3>Like This Layout?</h3>
                <p>Check out the source code <a target="_blank" href="//github.com/mattbague/mattbague.github.io">here</a>.
                  Originally based on <a target="_blank" href="//github.com/BlackrockDigital/startbootstrap-freelancer">Freelancer</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Thanks for checking me out!
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a className="btn btn-primary" href="#page-top">
          <i className="fa fa-chevron-up"/>
        </a>
      </div>
    </div>;
  }
});

export default Footer;
