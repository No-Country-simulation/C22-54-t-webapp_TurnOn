import Header from "./components/Header";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShiftControl from "./components/ShiftControl/ShiftControl";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/home" element={<Home />} />
        </Routes>
        <ShiftControl></ShiftControl>
        <Footer/>    
    </Router>
  );
}

export default App;
