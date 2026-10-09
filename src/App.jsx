import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

 const handleLogin = (email, password) => {
  if (authData?.admins?.find((admin) => email === admin.email && password === admin.password)) {
    setUser('admin');
    localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }));
  } else if (authData?.employees) {
    const employee = authData.employees.find((emp) => email === emp.email && password === emp.password);
    if (employee) {
      setUser('employees');
      setLoggedInUserData(employee);
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert("Invalid credentials");
    }
  } else {
    alert("Invalid credentials");
  }
};

    
  };

  if (user === "admin") {
    return <AdminDashBoard />;
  }

  if (user === "employees") {
    return <EmployeeDashboard data={loggedInUserData} />;
  }

  return <Login handleLogin={handleLogin} />;
};

export default App;