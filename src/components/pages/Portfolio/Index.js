import React from 'react';
import "./Portfolio.css";
import Carousel from 'react-bootstrap/Carousel';



export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio Page</h1>
      < br />
      < hr />
      < br />
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block mx-auto w-50"
            src="./img/systembade.png"
            alt="Second slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>Orbital Odyssey</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="https://github.com/Proper-Stevo/SpaceInvaders">
              <button >GitHub</button>
            </a>
            < a href="https://stormy-sands-64982.herokuapp.com/">
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block mx-auto w-50"
            src="./img/cards.webp"
            alt="First slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>Card Game</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            < a href="https://nameless-sierra-87070.herokuapp.com/notes">
              <button >GitHub</button>
            </a>
            < a href="https://nameless-sierra-87070.herokuapp.com/notes">
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block mx-auto w-50"
            src="./img/nationalPark.jpeg"
            alt="Second slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>National Park Finder</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            < a href="https://github.com/Proper-Stevo/ThePonderosaPines">
              <button >GitHub</button>
            </a>
            < a href="https://proper-stevo.github.io/ThePonderosaPines/">
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="./img/noteimage.png"
            alt="Third slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>Note Taker Applcation</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            < a href="https://github.com/Proper-Stevo/NoteTaker">
              <button >GitHub</button>
            </a>
            < a href="https://nameless-sierra-87070.herokuapp.com/notes">
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="./img/Calculator_PNG.png"
            alt="Third slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>Calculator</h3>
            <p>
              Very Simple Calculator
            </p>
            < a href='https://github.com/Proper-Stevo/calculator'>
              <button >GitHub</button>
            </a>
            < a href='https://proper-stevo.github.io/calculator/'>
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto w-50"
            src="./img/forcast.png"
            alt="Third slide"
            height={"400px"}
            width={'400px'}
          />
          <Carousel.Caption className='caption'>
            <h3>Weather Guide</h3>
            <p>
              A Weather Guide that lets you select a city as an input and show's you the current weather and the next
              5 day forcast as well!
            </p>
            < a href='https://github.com/Proper-Stevo/WeatherGuide'>
              <button >GitHub</button>
            </a>
            < a href='https://proper-stevo.github.io/WeatherGuide/'>
              <button >Website</button>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
