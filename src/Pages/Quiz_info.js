import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css'

const QuizInfoPage = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
      <Row>
        <Col md={12} className='mx-auto'>
          <Card className='form shadow '>
            <Card.Body >
              <Card.Title>Информация о квизе</Card.Title>
              <Card.Subtitle className='mb-4'>Познавательный тест</Card.Subtitle>
              <p>
                Пройдите наш интересный квиз и проверьте свои знания! Вас ждут увлекательные вопросы на разные темы.
              </p>
              <Row>
                <Col md={6}>
                  <Card.Text>
                    <strong>Количество вопросов:</strong> 5
                  </Card.Text>
                  <Card.Text>
                    <strong>Время на прохождение:</strong> 10 минут
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Text>
                    <strong>Тематика:</strong> Общие знания
                  </Card.Text>
                  <Card.Text>
                    <strong>Сложность:</strong> Легкая
                  </Card.Text>
                </Col>
              </Row>
              <div className='d-flex justify-content-center  mt-3'>
                <Button className='button' href='/team'>Начать квиз</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizInfoPage;
