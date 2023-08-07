import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/home';
import Movie from './pages/movie/Movie';
import ContactUs from './pages/contact/ContactUs';
import Login from './pages/login/Login';
import Payment from "./pages/payment/Payment"

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/contact" element = {<ContactUs />} />
            <Route path="/login" element= {<Login />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
      
  );
}

export default App;
