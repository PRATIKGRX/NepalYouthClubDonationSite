import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Documentation from "./pages/Documentation";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  Scroll to top on route change
    window.scrollTo(0, 0);

    setLoading(true);
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(300 - elapsed, 0); // at least 0.3 sec
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [location.pathname]);

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
