import { Col, Container, Row } from 'react-bootstrap';
import About from './Components/About';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Staff from './Components/Staff/Staff';
import Teacher from './Components/Teacher/Teacher';
import './App.css';
import StaffAbout from './Components/Staff/StaffAbout';
import StaffShop from './Components/Staff/StaffShop';
import TeacherAbout from './Components/Teacher/TeacherAbout';
import TeacherShop from './Components/Teacher/TeacherShop';



function App() {
  return (
    <>

    <Container>
      <Row>
        <Col md={4}>
          <Home></Home>
          <br />
          <About></About>
          <Shop></Shop>
        </Col>
        <Col md={4}>
          <Staff></Staff>
          <br />
          <StaffAbout></StaffAbout>
          <StaffShop></StaffShop>
        </Col>
        <Col md={4}>
          <Teacher></Teacher>
          <br />
          <TeacherAbout></TeacherAbout>
          <TeacherShop></TeacherShop>
        </Col>
      </Row>
    </Container>
    
    
    



    </>
  );
}

export default App;
