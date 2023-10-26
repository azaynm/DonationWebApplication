import { Button } from "react-bootstrap";
import ClothDonation from "./pages/ClothDonation";
import DonationDisplay from "./pages/DonationDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodDonation from "./pages/FoodDonation";
import EditClothDonation from "./pages/EditClothDonation";
import EditFoodDonation from "./pages/EditFoodDonation";
import Dashboard from "./pages/Dashboard";
import Stationery from "./pages/Stationery/Stationery";
import AddStationery from "./pages/Stationery/AddStationery";
import Medical from "./pages/Medical";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from 'react';
import Login from "./pages/Login";
import RoleProtected from "./RoleProtected";
import { useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const checkLogin = () => {
    
    if(localStorage.getItem("username") === 'admin' && localStorage.getItem("password") === 'password'){
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("password");
    window.location.reload();
  };


  return (
    <BrowserRouter>
      <Navbar logout={logout} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Dashboard />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/addStationery" element={<AddStationery />} />

          <Route path="donate-cloth" element={<ClothDonation />} />

          <Route path="donate-food" element={<FoodDonation />} />
          {/* <Route path="donation-list" element={<DonationDisplay />} /> */}
          <Route path="edit-food/:id" element={<EditFoodDonation />} />
          <Route path="edit-cloth/:id" element={<EditClothDonation />} />
          <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          

          <Route path='/donation-list'
            element={
              <RoleProtected isLoggedIn={isLoggedIn}>
                <DonationDisplay />
              </RoleProtected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
