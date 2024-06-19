import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import gif from '../pictures/gif.gif';

export default class extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center row' style={{ height: '98vh' }}>
        <Container className='row' >
          <div className='col-md-6   col-12 offset-1'>
            <h1 className=' textBig'>Информация о нас</h1>
            <text className='textLitle'>Полное наименование: </text>
            <text className='text fw-light'>«Информационная система по организации и проведению кризов»</text><br />
            <text className='textLitle'>Разработчик: </text>
            <text className='text fw-light'>Митруева Екатерина 🧿</text><br />
            <text className='textLitle'>Фактический адрес: </text>
            <text className='text fw-light'>664056, город Иркутск, Академическая ул., д. 56/1</text><br />
            <text className='textLitle'>Телефон/ Факс:</text>
            <text className='text fw-light'>+7 952 639-94-40</text>
          </div>
          <div className='col-md-4 col-12 d-flex justify-content-end'>
            <img
              className='img-fluid'
              src={gif}
            />
          </div>
        </Container>
      </div>
    )
  }
}
