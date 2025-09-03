import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Navbar />

      {/* Main content area - full width */}
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;