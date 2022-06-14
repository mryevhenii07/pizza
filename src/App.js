import { Routes, Route, Navigate } from "react-router-dom";

import "./scss/app.scss";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import FullPizza from "./component/FullPizza/FullPizza";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/pizza" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizzas/:pizzaId" element={<FullPizza />} />
          <Route path="/" element={<Navigate to="/pizza" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
