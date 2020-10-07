import React from 'react';

const Contact = React.createClass({
  render() {
    return <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Contact Me</h2>
            <hr className="star-primary"/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <form action="https://formspree.io/info@mattbague.com"
                  method="POST">
              <div className="row control-group has">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Name</label>
                  <input name="name" type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Email Address</label>
                  <input name="_replyto" type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Subject</label>
                  <input name="_subject" type="text" className="form-control" placeholder="Subject" id="subject" required data-validation-required-message="Please enter a subject."/>
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Message</label>
                  <textarea name="message" rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."/>
                </div>
              </div>
              <br/>
                <div id="success"></div>
                <div className="row">
                  <div className="form-group col-xs-12">
                    <button type="submit" className="btn btn-success btn-lg">Send</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
  }
});

export default Contact;