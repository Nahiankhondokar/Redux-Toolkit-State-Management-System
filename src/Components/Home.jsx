import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail, changeName, changePhoto } from '../redux/userSlice';



const Home = () => {

  const dispatch = useDispatch();  
  const data = useSelector(state => state.user);

  return (
    <>
    
    <Container>
        <Row className='justify-content-center my-5'>
            <Col md={6}>
                <Card className='shadow'>
                    <Card.Body>
                        <h2>Create an User</h2>
                        <hr />
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={data.name} onChange={ e => dispatch(changeName({name : e.target.value})) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={data.email} onChange={ e => dispatch(changeEmail({email : e.target.value})) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo</Form.Label>
                                <Form.Control value={data.photo} onChange={ e => dispatch(changePhoto({photo : e.target.value})) }></Form.Control>
                            </Form.Group>
                                <br/>
                            <Form.Group>
                                <Button variant='info'> Add User</Button>
                            </Form.Group>
                            <Card.Footer>
                                name : {data.name} | email : {data.email} | Photo : {data.photo}
                            </Card.Footer>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    
    </>
  )
};

export default Home;