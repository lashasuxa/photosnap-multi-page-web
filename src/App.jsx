import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Stories from './Pages/Stories';
import Features from './Pages/Features';
import Pricing from './Pages/Pricing';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;