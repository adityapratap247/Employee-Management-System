import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [category, setCategory] = useState('');
    const [AsignTo, setAsignTo] = useState('');

    const [newTask, setNewTask] = useState({});

    const authData = useContext(AuthContext);
    const setUserData = Array.isArray(authData) ? authData[1] : authData?.setUserData;

    const SubmitHandler = (e) => {
        e.preventDefault();

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        };

        setNewTask(taskObj);

        const data = JSON.parse(localStorage.getItem('employee')) || [];

        data.forEach(function (elem) {
            if (AsignTo.trim().toLowerCase() === elem.firstName.trim().toLowerCase()) {
                elem.tasks.push(taskObj);
                if (!elem.taskCounts) {
                    elem.taskCounts = { active: 0, newTask: 0, completed: 0, failed: 0 };
                }
                elem.taskCounts.newTask = (elem.taskCounts.newTask || 0) + 1;
                console.log(elem);
            }
        });

        localStorage.setItem('employee', JSON.stringify(data));

        if (setUserData) {
            setUserData({
                ...authData,
                employees: data,
                admins: authData?.admins || JSON.parse(localStorage.getItem('admin')) || []
            });
        }

        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setCategory('');
        setAsignTo('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={(e) => {
                SubmitHandler(e);
            }} className="flex flex-wrap w-full items-start justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value);
                            }}
                            type="text"
                            placeholder="make a ui design"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value);
                            }}
                            type="date"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            value={AsignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value);
                            }}
                            type="text"
                            placeholder="employee name"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            type="text"
                            placeholder="design, dev"
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                        />
                    </div>
                </div>

                <div className="w-1/2 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }}
                        cols="30"
                        rows="10"
                        className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    ></textarea>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;