import React from 'react';
import NavCont from './NavCont';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import WeatherFetch from './WeatherFetch';
import MovieAPI from './MovieAPI';
import RenderTodo from './RenderTodo';


function App() {
  return (
      <Router>
      <div className="App">
        <NavCont />
        <Routes>

            <Route exact path="/" element={<MovieAPI/>}></Route>
            <Route exact path="/TodoList" element={<RenderTodo />}></Route>
            <Route exact path="/weather" element={<WeatherFetch />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
