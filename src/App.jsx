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
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918419050267"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        {/* WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 relative z-10" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.494 2.027 7.805L0 32l8.418-2.007A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.3 13.3 0 01-6.795-1.858l-.487-.29-5.001 1.193 1.217-4.863-.318-.5A13.264 13.264 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.293-9.907c-.4-.2-2.366-1.167-2.732-1.3-.367-.133-.634-.2-.9.2s-1.033 1.3-1.267 1.567c-.233.267-.467.3-.867.1-.4-.2-1.687-.622-3.213-1.98-1.187-1.058-1.988-2.364-2.221-2.764-.234-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.673-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5s-1.4 1.367-1.4 3.333 1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.04.954.413 1.698.66 2.279.844.957.304 1.828.261 2.516.158.767-.115 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.367-.267-.767-.467z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us
        </span>
      </a>
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
