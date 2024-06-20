    import { Container, Row, Col, Card, Button } from 'react-bootstrap';
    import React, { useState } from 'react';
    import ResultsForm from './ResultsForm';
    import '../App.css'

    const Quiz_play = () => {
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [results, setResults] = useState({ correct: 0, incorrect: 0 });
        const [showResults, setShowResults] = useState(false);
        const [answerSelected, setAnswerSelected] = useState(false);

        const questions = [
            {
                question: "Какая планета Солнечной системы считается самой большой?",
                options: [
                    { text: "Юпитер", isCorrect: true },
                    { text: "Сатурн", isCorrect: false },
                    { text: "Нептун", isCorrect: false },
                    { text: "Уран", isCorrect: false }
                ]
            },
            {
                question: "Что такое полярное сияние?",
                options: [
                    { text: "Извержение вулкана", isCorrect: false },
                    { text: "Красивые световые эффекты в ночном небе", isCorrect: true },
                    { text: "Прохождение кометы", isCorrect: false },
                    { text: "Необычное явление в океане", isCorrect: false }
                ]
            },
            {
                question: "Кто изобрел первую электрическую лампочку?",
                options: [
                    { text: "Томас Эдисон", isCorrect: true },
                    { text: "Никола Тесла", isCorrect: false },
                    { text: "Александр Белл", isCorrect: false },
                    { text: "Уильям Гилберт", isCorrect: false }
                ]
            },
            {
                question: "Какая часть человеческого тела не имеет костей?",
                options: [
                    { text: "Ухо", isCorrect: false },
                    { text: "Язык", isCorrect: true },
                    { text: "Глаз", isCorrect: false },
                    { text: "Сердце", isCorrect: false }
                ]
            },
            {
                question: "Из какого элемента состоит большинство живых организмов на Земле?",
                options: [
                    { text: "Кислород", isCorrect: false },
                    { text: "Азот", isCorrect: false },
                    { text: "Водород", isCorrect: false },
                    { text: "Углерод", isCorrect: true }
                ]
            }
        ];

        const handleAnswer = (isCorrect) => {
            setSelectedAnswer(isCorrect);
            setAnswerSelected(true); 
        };

        const nextQuestion = () => {
            if (selectedAnswer === true) {
                setResults({ ...results, correct: results.correct + 1 });
            } else if (selectedAnswer === false) {
                setResults({ ...results, incorrect: results.incorrect + 1 });
            }
            setSelectedAnswer(null);
            setAnswerSelected(false);   
            if (currentQuestion < 4 ) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }   
        };

        const restartQuiz = () => {
            setCurrentQuestion(0);
            setResults({ correct: 0, incorrect: 0 });
            setShowResults(false);
        }; 
 
        return (
            <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
                {showResults ? (
                    <ResultsForm results={results} restartQuiz={restartQuiz} />
                ) : (
                    <Row className="w-100">
                        <Col xs={12} md={6} className='mx-auto'>
                            <Card className='rounded-5 p-4 shadow form'>
                                <Card.Body className='d-flex flex-column justify-content-center'>
                                    <Card.Title className='d-flex justify-content-center mb-4 text'>{questions[currentQuestion].question}</Card.Title>
                                    <ul className='list-group list-group-flush active mb-3'>
                                        {questions[currentQuestion].options.map((option, optionIndex) => (
                                            <li
                                                key={optionIndex}
                                                className={`list-group-item list-group-item-action ${selectedAnswer === option.isCorrect ? (option.isCorrect ? 'bg-success' : 'bg-danger') : ''}`}
                                                onClick={() => {
                                                    if (!answerSelected) { // тут проверка сделан ли выбор, если да
                                                        handleAnswer(option.isCorrect);
                                                    }
                                                }}
                                            >
                                                {option.text}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        className='mx-auto button'
                                        onClick={nextQuestion}
                                        disabled={selectedAnswer === null}
                                    >
                                        {currentQuestion === questions.length - 1 ? "Завершить" : "Следующий вопрос"}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    };


    export default Quiz_play;