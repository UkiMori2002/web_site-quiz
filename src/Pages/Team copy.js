import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'
import { Container, ListGroup } from 'react-bootstrap';

export default class Team extends Component {
  render() {
    return (
      <>
       <Header />
        <Container className='d-flex justify-content-center' >
          <h2>Список команд</h2>
          <Card style={{ width: '60rem' }}>
            <Card.Img src="h" />
            <Card.Body>
              <Card.Title>Команда</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Назваение команды:</ListGroup.Item>
                <ListGroup.Item>Слоган:</ListGroup.Item>
                <ListGroup.Item>Капитан команды:</ListGroup.Item>
                <ListGroup.Item>Количество участников:</ListGroup.Item>
              </ListGroup>
              <Button pill variant="outline-primary" className='d-flex justify-content-center'>Посмотреть команду</Button>
            </Card.Body>
          </Card>
        </Container>
      </>


    )
  }
}
