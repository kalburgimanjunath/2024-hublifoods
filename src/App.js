import "./styles.css";
import { Routes, Route } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";
import {
  CategoryWise,
  ProductWise,
  Home,
  About,
  Cart,
  WatchList,
} from "./pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Footer, Header } from "./components";
import { useLocation } from "react-router-dom";
export default function App() {
  const location = useLocation();
  return (
    <div className="mx-20">
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 400, exit: 200 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/category/:id" element={<CategoryWise />} />
            <Route path="/products/:id" element={<ProductWise />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
