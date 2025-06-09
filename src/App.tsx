// import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
