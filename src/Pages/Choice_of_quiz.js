import '../App.css'
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

  const Choice_of_quiz = () => {
    const [quizCode, setQuizCode] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (quizCode === '1234') {
        window.location.href = "/quiz_info";
        
      } else {
        alert('К сожалению, мы не можем найти такой квиз. Попробуйте еще раз <3');
      }
    };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <Form onSubmit={handleSubmit} className=" d-flex justify-content-center rounded-pill p-4 shadow form" style={{ padding: '2rem' }}>
              <Form.Group controlId="quizCode" className=" mb-4">
                <Form.Label className='d-flex justify-content-center text'>Введите код квиза</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введи кодик :D"
                  value={quizCode}
                  onChange={(e) => setQuizCode(e.target.value)}
                  required
                  className="rounded-pill "
                  style={{ width: 435 }}
                />
                <Button type="submit" className='button mx-auto mt-3'>Присоединиться</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Choice_of_quiz;