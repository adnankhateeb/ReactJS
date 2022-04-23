import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Store from './components/Store';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
