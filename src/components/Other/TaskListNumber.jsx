import React from "react";

const TaskListNumber = ({ data }) => {
    const newTaskCount = data?.tasks?.filter((t) => t.newTask).length || 0;
    const completedCount = data?.tasks?.filter((t) => t.completed).length || 0;
    const activeCount = data?.tasks?.filter((t) => t.active).length || 0;
    const failedCount = data?.tasks?.filter((t) => t.failed).length || 0;

    return (
        <div className="flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#E4FDE1]">
                <h2 className="text-2xl font-semibold">{newTaskCount}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#8ACB88]">
                <h2 className="text-2xl font-semibold">{completedCount}</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#648381]">
                <h2 className="text-2xl font-semibold">{activeCount}</h2>
                <h3 className="text-xl font-medium">Active Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 text-black bg-[#FFBF46]">
                <h2 className="text-2xl font-semibold">{failedCount}</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
        </div>
    );
};

export default TaskListNumber;