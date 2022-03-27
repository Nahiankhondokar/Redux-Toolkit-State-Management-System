import React from 'react';
import { Card, Col, Container, Form, Row, Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const StaffAbout = () => {

    const data = useSelector(state => state.staff);

  return (
    <>
    
                <Card className='shadow'>
                    <Card.Body>
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
                </>
  )
};

export default StaffAbout;