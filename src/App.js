import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:memeId' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
