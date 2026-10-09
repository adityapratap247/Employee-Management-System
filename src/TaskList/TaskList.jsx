import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
    return (
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10">
            <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask />
            {data?.tasks && data.tasks.length > 0 ? (
                data.tasks.map((elem, idx) => (
                    <div key={idx} className="flex-shrink-0 h-full p-5 w-[300px] bg-[#6F8585] rounded-xl flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="bg-red-600 text-sm py-1 px-3 rounded font-medium">{elem.category}</h3>
                                <h4 className="text-sm text-gray-300">{elem.taskDate}</h4>
                            </div>
                            <h2 className="mt-5 text-2xl font-semibold">{elem.taskTitle}</h2>
                            <p className="text-sm mt-2 text-gray-200">
                                {elem.taskDescription}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-gray-400 text-lg">No tasks assigned yet.</div>
            )}
        </div>
    );
};

export default TaskList;