import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Comment from './components/comments/comments'
import Responsepage from './components/responsepage/responsepage'
import ExcellentResponse from './components/excellentresponse/excellentresponse'
import SurveyForm from './components/surveyform/surveyform'
import Header from './components/header/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      
      <Router>
      <div className="App">
        <Header/>
        <div className="content">         
           <Routes>
            <Route exact path="/:surveyID" element={<SurveyForm/>}></Route>   
            <Route  path="/comment" element={<Comment/>}></Route> 
            <Route  path="/responsepage" element={<Responsepage/>}></Route>  
            <Route  path="/excellentresponsepage" element={<ExcellentResponse/>}></Route>                  
          </Routes>
        </div>  
      </div>
    </Router>
    </div>
  )
}

export default App
