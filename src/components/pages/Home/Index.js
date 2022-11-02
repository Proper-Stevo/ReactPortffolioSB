import React from 'react';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Home() {
  return (
    <div className='frontPage'>
      <div className='nameID'>I am Steven Barrios</div>
      <p>
        I am a Full Stack Developer. I like dabbing in various frontend development and backend devlopment projects.
        I love to learn about new technologies, learn about technical advances, nature and dogs.
      </p>
          <CardGroup className='cardsTotal'>
            <Card className='cardOne'>
              <Card.Body>
                <Card.Title>Space Odyssey</Card.Title>
                <Card.Text>
                  Come see space in a whole new way!
                  <img src='./img/systembade.png' alt='solar system' height={"300px"} ></img>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cardTwo'>
              <Card.Body>
                <Card.Title>National Park Finder</Card.Title>
                <Card.Text>
                  A simple way to see your favorite National Park!
                  <img src='./img/nationalPark.jpeg' alt='National Park Badge' height={"300px"}></img>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='cardThree'>
              <Card.Body>
                <Card.Title>Resume Creator</Card.Title>
                <Card.Text>
                  A App friendly way to create your resume! Easy fun and fast! 
                  <img src='./img/resume.jpg' alt='resume badge' height={"300px"}></img>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup> 
          </div>
        );
      };

// introduction about yourself