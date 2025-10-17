import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  //  Show loader when route changes
  useEffect(() => {
    setLoading(true);
    // Wait for full page load (all assets, CSS, JS)
    const handleLoad = () => {
      setLoading(false);
    };

    // Case 1: If the page is already loaded (cached)
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Case 2: Wait for everything to load
      window.addEventListener("load", handleLoad);
    }

    // Cleanup on unmount
    return () => window.removeEventListener("load", handleLoad);
  }, [location.pathname]);
  return (
    <div>
      {loading && <Loader />} {/* Show loader */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
