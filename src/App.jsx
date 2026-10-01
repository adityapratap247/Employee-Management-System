import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { GetLocalStorage, SetLocalStorage } from "./utils/localStorage";

const App = () =>{

  useEffect(() =>{
    GetLocalStorage()
  },)

  return(
    <div>
        < Login />
        {/* < EmployeeDashboard /> */}
        {/* < AdminDashBoard /> */}
    </div>
  )

};

export default App;