import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { GetLocalStorage, SetLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () =>{

  const [user, setUser] = useState(null);

  const handleLogin = (email,password) =>{
      if(email == 'admin@me.com' && password == '123'){
        setUser('admin');
      }else if (email == 'user@me.com' && password == '123') {
        setUser('employee');
      }else{
        alert("Invalid credentials");
      }
  };

  // useEffect(() =>{
  //   GetLocalStorage()
  // },)

  const data = useContext(AuthContext);
  console.log(data);

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