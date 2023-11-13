import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";


import Error from "./components/Error";
import Dashboard from "./pages/Dashboard";
import Authentication from "./pages/Authentication";
import PrivatPageLayout from "./layouts/PrivatPageLayout";
import TimeTable from "./pages/TimeTable";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import YourComponent from "./pages/Marksheet";

const App = () => {
  return (
    <div className="   bg-[#F5EFE8] w-full h-[100vh]">
      {/* <Navbar/> */}
      <Routes>
        {/*   */}
        <Route path="/" element={<Home />} />

        {/* auth pages  */}
        <Route path="/auth" element={<Authentication />} />

        <Route path="*" element={Error} />
        {/* private pages */}
        <Route element={<PrivatPageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/timeTable" element={<TimeTable />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marksheets" element={<YourComponent />} />
          
        </Route>
      </Routes>
    </div>
  );
};

export default App;
