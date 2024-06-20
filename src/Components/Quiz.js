import React, { useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Quiz_play() {
    const questions = [
        { question: "Кто является создателем манги 'Наруто'?", answer: "Масаси Кисимото" },
        { question: "Какой прием является фирменным для Наруто?", answer: "Расенган" },
        { question: "Кто первый друг Наруто в академии?", answer: "Ирука Умино" },
        { question: "Как называется деревня, в которой живет Наруто?", answer: "Коноха (Деревня Скрытого Листа)" },
        { question: "Какое существо запечатано внутри Наруто?", answer: "Девятихвостый лис (Кьюби)" }
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [results, setResults] = useState([]);

    const handleChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);
    }; 
 
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const results = questions.map((item, index) => {
            return {
                question: item.question,
                yourAnswer: answers[index],
                correctAnswer: item.answer,
                isCorrect: answers[index].toLowerCase() === item.answer.toLowerCase()
            };
        });
        setResults(results);
    };

    return (
        <Container className='d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit}>
                {questions.map((item, index) => (
                    <FormGroup key={index}>
                        <Label>{item.question}</Label>
                        <Input type="text" value={answers[index]} onChange={(e) => handleChange(index, e)} />
                    </FormGroup>
                ))}
                <Button type="submit" color="primary">Проверить ответы</Button>
            </Form>
            {results.length > 0 && (
                <div>
                    <h2>Результаты</h2>
                    {results.map((result, index) => (
                        <div key={index}>
                            <p>Вопрос: {result.question}</p>
                            <p>Ваш ответ: {result.yourAnswer}</p>
                            <p>Правильный ответ: {result.correctAnswer}</p>
                            <p>{result.isCorrect ? "Правильно" : "Неправильно"}</p>
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
}

export default Quiz_play;
