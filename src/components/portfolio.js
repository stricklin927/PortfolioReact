import React, { useEffect, useState, Link } from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';


export function Portfolio() {
    return (
        <div>
            <Jumbotron className="portfolioJumbotron">
            </Jumbotron>

            <div className="resumeDiv">
                <Container>
                    <div className="resumeText">
                        <h1>Resume</h1>
                        <a href="../pdf/ResumeStricklinAlexandra2020.pdf" download>
                            <Button variant="warning">Download Resume</Button>
                        </a>
                    </div>
                </Container>
            </div>



        











        </div>
      );
    };
  
  export default Portfolio;