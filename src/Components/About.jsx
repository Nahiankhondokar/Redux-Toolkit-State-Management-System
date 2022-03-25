import React from 'react';
import { Card, Col, Container, Form, Row, Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const About = () => {

    const data = useSelector(state => state.user)

  return (
    <>
    
    <Container>
        <Row className='justify-content-center my-5'>
            <Col md={6}>
                <Card className='shadow'>
                    <Card.Body>
                        <h2>User Table</h2>
                        <hr />
                        <Table>
                            <tr>
                                <td>Name</td>
                                <td>{ data.name }</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>{ data.email }</td>
                            </tr>

                            <tr>
                                <td>Photo</td>
                                <td>{ data.photo }</td>
                            </tr>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
    </>
  )
};

export default About;