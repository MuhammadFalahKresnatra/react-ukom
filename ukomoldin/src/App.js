import React from "react";
import Front from "./front/front";
import Aboutus from "./front/aboutus";
import Formdonasi from "./front/form/formdonasi";
import Donasi from "./front/donasi/donasi";
import Ajukandonasi from "./front/ajukandonasi/ajukandonasi";
import Formajukandonasi from "./front/form/formajukandonasi";
// import Sidenav from "./back/sidenav";
import Back from "./back/back";
import Login from "./back/login regis/login";
import Regis from "./back/login regis/regis";
import Detail from "./back/detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tabelprogramdonasi from "./back/tabelprogramdonasi";
import Dashboard from "./back/dashboard/dashboard";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Front/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/formdonasi" element={<Formdonasi/>} />
          <Route path="/detaildonasi" element={<Donasi/>} />
          <Route path="/ajukandonasi" element={<Ajukandonasi/>} />
          <Route path="/formajukandonasi" element={<Formajukandonasi/>} />
          <Route path="/admin" element={<Login/>} />
          <Route path="/registrasi" element={<Regis/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/programdonasi" element={<Tabelprogramdonasi/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/donatur" element={<Back/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
