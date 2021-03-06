import React, { useEffect, useState, Link } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import profilePic from '../images/profilepic.png';

export function Home() {
    return (
        <div>
            <Jumbotron className="homeJumbotron">
            </Jumbotron>
            <Container>
                <Row>
                    <Col md={4} className="text-center">
                        <img src={profilePic} alt="Profile Picture" />
                    </Col>
                    <Col>
                        <br></br>
                        <h2><b>Alexandra Stricklin </b></h2>
                        <h4>About Me</h4>
                        <p className="text-justify">Alexandra is currently enrolled in the Michigan State University coding bootcamp, in hopes of pursuing a career in software development. She has a Bachelor's degree in Spanish Language and French Language from Saginaw Valley State University.</p>
                        <p className="text-justify">Alexandra enjoys teaching and tutoring individuals in both Spanish and French. She also enjoys traveling, whether it's a short trip in the beautiful state of Michigan or a more extensive trip abroad. </p>
                        <p className="text-justify">In her free time, she enjoys trying globally-inspired recipes and spending time with her husband, two sons, and Siberian husky named Maya.</p>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    };
  
  export default Home;