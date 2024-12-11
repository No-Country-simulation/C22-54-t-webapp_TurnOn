
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import DatesCalendar from "./pages/DatesCalendar";
import Welcome from "./pages/Home/Welcome";
import { Servicios } from "./pages/Servicios/Servicios";

function App() {
  return (
    <Router>
      <main>
        <Routes>    
          <Route path="/" element={<Welcome/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/calendar" element={<DatesCalendar />} />
          <Route path="/services" element={<Servicios/>} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
