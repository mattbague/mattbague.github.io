import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const PortfolioItem = React.createClass({
  getInitialState() {
    return {
      showModal: false
    }
  },
  close() {
    this.setState({
      showModal: false
    })
  },
  open() {
    this.setState({showModal: true});
  },
  render() {
    return <a style={{cursor: "pointer"}} onClick={this.open}>
      <img src={this.props.image} style={{maxWidth: "100%", maxHeight: "260px"}}
           className="img-responsive img-centered" alt=""/>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{this.props.position}</h3>
          <h4>{this.props.startDate} &mdash; {this.props.endDate}</h4>
          <p>{this.props.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </a>;
  }
});

const Portfolio = React.createClass({
  render() {
    return <section id="portfolio" style={{marginBottom: 0, paddingBottom: 0}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Portfolio</h2>
            <hr className="star-primary"/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              company="Storygize"
              position="Software Engineer"
              body="I currently work here"
              startDate="April 2016"
              endDate="Current"
              image="img/portfolio/storygize.png"/>
          </div>
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              company="CJ Affiliate"
              position="Associate Software Engineer"
              body="Initially worked on their mobile SDK for Android and iOS. Later on, joined their Big Data team where
                    I helped the effort to transition to transfer data with Kafka, persist data in Hadoop, and process data
                    using Spark. Did some UI work as necessary throughout my time there as well."
              startDate="June 2014"
              endDate="April 2016"
              image="img/portfolio/cj.png"/>
          </div>
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              company="Cal Poly San Luis Obispo"
              position="Undergraduate Student"
              body="Graduated with a degree in Computer Science with a focus in databases and artificial intelligence."
              startDate="September 2010"
              endDate="June 2014"
              image="img/portfolio/calpoly.png"
            />
          </div>
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              company="Amgen"
              position="Information Systems Intern"
              body="Worked with a team developing a website overlay for their IT service management software.
                    Helped author the specification document. Wrote and ran test scripts. Worked on integrating Webtrends Analytics.
                    Also developed a SharePoint website for our department."
              startDate="June 2013"
              endDate="September 2013"
              image="img/portfolio/amgen.png"
            />
          </div>
        </div>
      </div>
    </section>;
  }
});

export default Portfolio;