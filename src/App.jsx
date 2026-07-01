import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Specifications from "./pages/Specifications";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductCatalogDetail from "./pages/ProductCatalogDetail";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductCatalogDetail />} />
          <Route path="/specifications" element={<Specifications />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
