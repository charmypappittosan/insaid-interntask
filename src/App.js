import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Home/Homepage/Homepage';
import Navbar from './Home/Navbar/Navbar';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
