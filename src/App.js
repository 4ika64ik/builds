import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import TheForm from "./pages/Form/TheForm";

function App() {
  const [pixelId, setPixelId] = useState(null); // State to hold pixelId

  useDocTitle("Euro follow");

  // Fetch and set pixelId when component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const px = searchParams.get('px');
    setPixelId(px || '235345345345'); // Set pixelId or default value
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes pixelId={pixelId} /> {/* Pass pixelId as prop */}
    </Router>
  );
}

function AppRoutes({ pixelId }) { // Destructure pixelId from props
  const location = useLocation();

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });

    if (pixelId) {
      ReactPixel.init(pixelId);
      ReactPixel.track('ViewContent');
    }
  }, [location, pixelId]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Pass pixelId to TheForm component */}
      <Route path="/form" element={<TheForm pixelId={pixelId} />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
