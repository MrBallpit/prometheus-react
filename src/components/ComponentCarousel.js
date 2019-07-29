import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

class BuildCarousel extends React.Component {
    render () {
      return (
        <Carousel style={{width: 1000, height:1000, align:"center"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Clock_24_J.jpg/220px-Clock_24_J.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2_playing_cards.jpg/250px-2_playing_cards.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shield-Trinity-Scutum-Fidei-English.svg/220px-Shield-Trinity-Scutum-Fidei-English.svg.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  }

export default BuildCarousel;