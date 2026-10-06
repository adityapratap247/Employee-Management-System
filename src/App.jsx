import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () =>{

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
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
        setUser('admin')
        localStorage.setItem('LoggedInUser',JSON .stringify({role: 'admin'}))
      }else if (authData) {
        const employee = authData.employee.find((employee) => email === employee.email && password === employee.password)
          if(employee){
            setUser(employee);
            setLoggedInUserData(employee);
            localStorage.setItem('loggedInUser',JSON.stringify({role: 'employees'}))
          }
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