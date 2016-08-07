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
      <img src={this.props.image} style={{maxWidth: "360px", maxHeight: "260px"}}
           className="img-responsive img-centered" alt=""/>
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    return <section id="portfolio">
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
              title="Storygize"
              body="I currently work here"
              startDate="April 2016"
              endDate="Current"
              image="img/portfolio/storygize.png"/>
          </div>
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              title="CJ Affiliate"
              body="I worked here"
              startDate="June 2014"
              endDate="April 2016"
              image="img/portfolio/cj.png"/>
          </div>
          <div className="col-sm-4 portfolio-item">
            <PortfolioItem
              title="Cal Poly San Luis Obispo"
              body="I went to university here"
              startDate="September 2010"
              endDate="June 2014"
              image="img/portfolio/calpoly.png"
            />
          </div>
        </div>
      </div>
    </section>;
  }
});

export default Portfolio;