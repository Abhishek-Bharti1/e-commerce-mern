import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
const Footer = lazy(() => import('./components/Footer'));
const CheckoutPage = lazy(() => import('./components/CheckoutPage'));
const Login = lazy(() => import('./components/Login'));
const OrderPlaced = lazy(() => import('./components/OrderPlaces'));
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const App = () => {

  return (
    <BrowserRouter>
    <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<OrderPlaced />} />
      </Routes>
      <Footer />
    </Suspense>
  </BrowserRouter>
  );
};

export default App;
