import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css'

const ResultsForm = ({ results, restartQuiz }) => (
  <Card className='rounded-5 p-3 shadow form'>
    <Card.Body>
      <Card.Title className='d-flex justify-content-center mb-4 textLitle1'>Результаты квиза</Card.Title>
      <p className='textLitle'>Правильных ответов: {results.correct}</p>
      <p className='textLitle'>Неправильных ответов: {results.incorrect}</p>
      <Button className='button mx-auto ' onClick={restartQuiz}>Перезапустить квиз</Button>
    </Card.Body>
  </Card>
);

export default ResultsForm;