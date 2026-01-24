import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Services />
            <Products />
            <Contact />
          </main>
        } />
        <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
