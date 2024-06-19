import React, { Component } from 'react'
import { Container} from 'react-bootstrap'
import '../App.css'

export default class Personal_account extends Component {
  render() {

    return (
      <>
        <Container className='d-flex justify-content-center align-items-center row' style={{ height: '100vh' }}>
          <div  className='col-md-6   col-12 offset-1'>
            <h1 className=' textBig'>На стадии разработки</h1>
          <text className='textLitle'>Обещаю, к диплому все будет готово</text>
          </div>
        </Container>
      </>
    )
  }
}
