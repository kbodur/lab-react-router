import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import NotFound from "./components/common/NotFound";
import OwnersList from "./components/owners/OwnersList.jsx";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";

const AppContent = () => {
  const location = useLocation();
  const [notFound, setNotFound] = useState(false);
  const [owners, setOwners] = useState(ownerData);
  const validPaths = ["/", "/staff", "/pets", "/pets/cats", "/pets/dogs", "/owners"];

  useEffect(() => {
    if (!validPaths.includes(location.pathname)) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [location.pathname]);

  return (
    <div className="wrapper">
      <Nav />
      {notFound ? (
        <NotFound />
      ) : (
        <Routes>
          <Route path="/" element={<Home employees={employeeData} owners={ownerData} pets={petData} />} />
          <Route path="/staff" element={<StaffList employees={employeeData} />} />
          <Route path="/pets" element={<Navigate to="/pets/cats" />} />
          <Route path="/pets/cats" element={<PetsList pets={petData} kind="cat" />} />
          <Route path="/pets/dogs" element={<PetsList pets={petData} kind="dog" />} />
          <Route path="/owners" element={<OwnersList owners={owners} />} />

        </Routes>
      )}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
