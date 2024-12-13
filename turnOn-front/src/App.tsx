import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Welcome from "./pages/Welcome";
import DatesCalendar from "./pages/DatesCalendar";
import ServicesPage from "./pages/Services";
import CompaniesPage from "./pages/Companies";
import PlansPage from "./pages/PlansPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<DatesCalendar />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
