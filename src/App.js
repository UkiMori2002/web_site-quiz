import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header"
import Team from './Pages/Team';
import About_us from './Pages/About_us.js';
import Personal_account from './Pages/Personal_account.js';
import Choice_of_quiz from './Pages/Choice_of_quiz';
import Quiz_info from './Pages/Quiz_info.js'
import Quiz_play from './Components/Quiz_play.js';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#7362ca';
    document.body.style.backgroundSize = 'cover';
  })
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Choice_of_quiz />} />
          <Route path="/team"  element={<Team />}/>
          <Route path="/unformation_about_us" element={<About_us />} />
          <Route path="/personal_account" element={<Personal_account />} />
          <Route path="/quiz_info" element={<Quiz_info />} />
          <Route path="/quiz_play" element={<Quiz_play />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
