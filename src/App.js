import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

const Home = lazy(() => import("./Home"));
const Product = lazy(() => import("./Product"));
const Testapi = lazy(() => import("./Testapi"));
const Company = lazy(() => import("./Company"));
const Halface = lazy(() => import("./Halface"));
const Footer = lazy(() => import("./Footer"));
const Galery = lazy(() => import("./Galery"));
const News = lazy(() => import("./News"));
const Americas = lazy(() => import("./Americas"));
const Italy = lazy(() => import("./Italy"));
const Suport = lazy(() => import("./Suport"));

const App = () => (
  <div>
    <Navbar />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Testapi" element={<Testapi />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Halface" element={<Halface />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Galery" element={<Galery />} />
          <Route path="/News" element={<News />} />
          <Route path="/Americas" element={<Americas />} />
          <Route path="/Italy" element={<Italy />} />
          <Route path="/Suport" element={<Suport />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

export default App;
