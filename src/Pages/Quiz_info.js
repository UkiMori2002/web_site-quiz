import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css'

const QuizInfoPage = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} md={6}  className='mx-auto'>
          <Card className='rounded-5 p-4 shadow form' >
            <Card.Body >
              <Card.Title className='d-flex justify-content-center textLitle1 mb-3'>Информация о квизе</Card.Title>
              <Card.Subtitle className='mb-4 textLitle'>Познавательный тест</Card.Subtitle>
              <p className=' textInfo '> 
                Пройдите наш интересный квиз и проверьте свои знания! Вас ждут увлекательные вопросы на разные темы.
              </p>
              <Row>
                <Col md={6}>
                  <Card.Text className='textLitle'>
                    <strong>Количество вопросов:</strong> 5
                  </Card.Text>
                  <Card.Text className='textLitle'>
                    <strong>Время на прохождение:</strong> 10 минут
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Text className='textLitle'>
                    <strong>Тематика:</strong> Общие знания
                  </Card.Text>
                  <Card.Text className='textLitle'>
                    <strong>Сложность:</strong> Легкая
                  </Card.Text>
                </Col>
              </Row>
              <div className='d-flex justify-content-center  mt-5'>
                <Button className='button' href='/quiz_play'>Начать квиз</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizInfoPage;
