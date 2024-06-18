import React, { Component } from 'react'
import '../App.css'
import { CardGroup, CardDeck, Card, Button, Container, ListGroup, Body, Spacer, Table } from 'react-bootstrap';
import team7 from '../pictures/team7.jpg';
import team10 from '../pictures/Team10.jpg';
import team4 from '../pictures/Team_Gai.jpg';

export default class Team extends Component {
  render() {
    return (
      <>
        <Container className='mx-auto pad'>
          <h2 className='text-center'>Список команд</h2>
          <CardGroup className="mb-4 ">
            <Card cl>
              <Card.Img variant="top"
                src={team7}
                height='360'
                width='120'
                className='logo-block-header'
                alt='Logo'
              />
              <Card.Body>
                <Card.Title className='text-center' >Команда номер 7</Card.Title>
                <Card.Text>
                 <h6>Капитан команды:</h6> Какаси Хатакэ
                 <h6>Количество человек:</h6> 4
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="outline-primary" >Посмотреть команду</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top"
                src={team10}
                height='360'
                width='120'
                className='logo-block-header'
                alt='Logo'
              />
              <Card.Body>
                <Card.Title className='text-center' >Команда номер 10</Card.Title>
                <Card.Text>
                 <h6>Капитан команды:</h6> Асума Сарутоби
                 <h6>Количество человек:</h6> 4
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="outline-primary" >Посмотреть команду</Button>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top"
                src={team4}
                height='360'
                width='120'
                className='logo-block-header'
                alt='Logo'
              />
              <Card.Body>
                <Card.Title className='text-center' >Команда номер 4</Card.Title>
                <Card.Text>
                 <h6>Капитан команды:</h6>Майто Гай
                 <h6>Количество человек:</h6> 4
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <Button variant="outline-primary" >Посмотреть команду</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Container>
      </>
    )
  }
}
