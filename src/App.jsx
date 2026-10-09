import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      } catch (e) {
        console.error("Failed to parse loggedInUser", e);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData?.admins?.find((admin) => email === admin.email && password === admin.password)) {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData?.employees) {
      const employee = authData.employees.find((emp) => email === emp.email && password === emp.password);
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("LoggedInUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  if (user === "admin") {
    return <AdminDashBoard changeUser={setUser} />;
  }

  if (user === "employee" || user === "employees") {
    return <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />;
  }

  return <Login handleLogin={handleLogin} />;
};

export default App;