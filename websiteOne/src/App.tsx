import "./App.css";
import "./index.css";
import Navbar from "./componants/navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./componants/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 w-full h-full">404 - Page Not Found</h1>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
