import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Store from "./components/Store";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ProductDetails from './components/ProductDetails';
import NotFound from './components/NotFound';

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/aboutus" element={<AboutUs />}></Route>
               <Route path="/faq" element={<FAQ />}></Route>
               <Route path="/store" element={<Store />}></Route>
               <Route path="/contact" element={<ContactUs />}></Route>
               <Route path="/store/:id" element={<ProductDetails />}></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Routes>
         </div>
         <Footer />
      </div>
   );
}

export default App;
