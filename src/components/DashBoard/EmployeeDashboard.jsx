import React from "react";
import Header from "../Other/Header";
import TaskListNumber from "../Other/TaskListNumber";
import TaskList from "../../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
    return (
        <div>
            <div className="p-10 bg-[#1C1C1C] h-screen">
                <h1>{data?.id ?? "Employee"}</h1>
                <Header />
                <TaskListNumber />
                <TaskList />
            </div>
        </div>
    );
};

export default EmployeeDashboard;