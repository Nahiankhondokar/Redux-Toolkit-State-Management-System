import React from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changePhoto, changeEmail } from '../../redux/teacherSlice';

const Teacher = () => {

    const d = useSelector(state => state.teacher);
    const dispatch = useDispatch();

  return (
    <>
    <Card className='shadow'>
                    <Card.Body>
                        <h2>Create a Teacher</h2>
                        <hr />
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={d.name} onChange={(e) => dispatch(changeName({name : e.target.value}))}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={d.email} onChange={(e) => dispatch(changeEmail({email : e.target.value}))}></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo</Form.Label>
                                <Form.Control value={d.photo} onChange={(e) => dispatch(changePhoto({photo : e.target.value}))}></Form.Control>
                            </Form.Group>
                                <br/>
                            <Form.Group>
                                <Button variant='info'> Add Teacher</Button>
                            </Form.Group>
                            <Card.Footer>
                                name : {d.name} | email : {d.email} | Photo : {d.photo}
                            </Card.Footer>
                        </Form>
                    </Card.Body>
                </Card>
    </>
  )
};

export default Teacher;