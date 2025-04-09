import { Routes, Route } from "react-router-dom";
import Navbar from './components/molecules/Navbar';
import Footer from './components/molecules/Footer';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16"> {/* pt-16 to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
