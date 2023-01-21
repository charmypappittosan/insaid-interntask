import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Authentication/Login/Login';
import RequireAuth from './Authentication/Login/RequireAuth';
import Signup from './Authentication/SignUp/Signup';
import Contactus from './Contactus/Contactus';
import Homepage from './Home/Homepage/Homepage';
import Navbar from './Home/Navbar/Navbar';
import Services from './Shared/Services/Services';

function App() {
  return (
    <div className="px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/contactus"
          element={
            <RequireAuth>
              <Contactus></Contactus>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
