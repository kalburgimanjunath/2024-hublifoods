import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { CategoryWise, Home } from "./pages";
import { Footer, Header } from "./components";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryWise />} />
        <Route path="/products/:id" element={<ProductWise />} />
      </Routes>
      <Footer />
    </div>
  );
}
