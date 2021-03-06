import React, { useEffect, useState, Link } from 'react';
import { Jumbotron, Container, Form, Col, Button } from 'react-bootstrap';


export function Contact() {
    return (
        <div>
            <Jumbotron className="contactJumbotron">
        </Jumbotron>
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="text" placeholder="First Name" defaultValue="Wanda" />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="text" placeholder="Last Name" defaultValue="Maximoff" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" defaultValue="ScarletWitch@MCU.com" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Comments</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </Container>
            <br></br>
        </div>
      );
    };
  
  export default Contact;