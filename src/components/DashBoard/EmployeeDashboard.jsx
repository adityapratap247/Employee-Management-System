import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";

const EmployeeDashboard = () =>{
    return (
        <div>
            <div className="p-10 bg-[1C1C1C] h-screen" >
                < Header /> 
                <TaskListNumber />  
            </div>
        </div>
    )
};

export default EmployeeDashboard;