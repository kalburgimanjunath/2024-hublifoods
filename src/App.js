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
  Register,
  Signin,
  UserProfile,
  Commondity,
  MarketPlace,
} from "./pages";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Footer, Header } from "./components";
import { useLocation } from "react-router-dom";
export default function App() {
  const location = useLocation();
  return (
    <div className="mx-20 sx:mx-10">
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={{ enter: 400, exit: 200 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/commodity" element={<Commondity />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<UserProfile />} />
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
