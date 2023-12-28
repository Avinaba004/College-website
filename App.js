import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
