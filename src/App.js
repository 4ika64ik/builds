import React, { useEffect } from 'react';
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
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import TheForm from "./pages/Form/TheForm";

function App() {
  useDocTitle("Euro follow");

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  // Объявляем хук useLocation() внутри компонента AppRoutes
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

    // Перемещаем инициализацию Facebook Pixel внутрь useEffect
    const searchParams = new URLSearchParams(location.search);
    const pixelId = searchParams.get('px');

    // Если параметр px найден в адресной строке, инициализируем Facebook Pixel с его значением
    if (pixelId) {
      ReactPixel.init(pixelId);
    } else {
      // Если параметр px отсутствует, инициализируем Facebook Pixel с вашим основным идентификатором
      ReactPixel.init('235345345345');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<TheForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
