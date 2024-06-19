import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header"
import Team from './Pages/Team';
import About_us from './Pages/About_us.js';
import Personal_account from './Pages/Personal_account.js';
import Choice_of_quiz from './Pages/Choice_of_quiz';
import Quiz_info from './Pages/Quiz_info.js'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div style={{ backgroundColor: ' #7362CA' }}>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Choice_of_quiz/>} />
            <Route path="/team" element={<Team/>}/> 
            <Route path="/unformation_about_us" element={<About_us/>}/> 
            <Route path="/personal_account" element={<Personal_account/>}/> 
            <Route path="/quiz_info" element={<Quiz_info/>} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
