import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () =>{

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() =>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser");
    }
  })

  const handleLogin = (email,password) =>{
      if (authData?.admins?.find((admin) => email === admin.email && password === admin.password)) {
        setUser('admin');
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else if (authData?.employees?.find((employee) => email === employee.email && password === employee.password)) {
        setUser('employee');
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else{
        alert("Invalid credentials");
      }
  };

  return(
    <div>
        {!user ? <Login handleLogin={handleLogin} />:''}
        {user == 'admin' ?<AdminDashBoard /> :<EmployeeDashboard />}      
        {/* < EmployeeDashboard /> */}
        {/* < AdminDashBoard /> */}
    </div>
  )

};

export default App;