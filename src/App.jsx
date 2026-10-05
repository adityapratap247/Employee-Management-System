import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () =>{

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData]);

  const handleLogin = (email,password) =>{
      if (authData?.admins?.find((admin) => email === admin.email && password === admin.password)) {
        setUser('admin');
      }else if (authData?.employees?.find((employee) => email === employee.email && password === employee.password)) {
        setUser('employee');
      }else{
        alert("Invalid credentials");
      }
  };

  if(user === 'admin'){
    return <AdminDashBoard />;
  }

  if(user === 'employee'){
    return <EmployeeDashboard />;
  }

  return <Login handleLogin={handleLogin} />;

};

export default App;