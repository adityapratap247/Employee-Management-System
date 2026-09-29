import React from "react";

let TaskListNumber = () =>{
    return(
        <div className="flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#E4FDE1]">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#8ACB88]">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] text-black py-6 px-9 bg-[#648381]">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="rounded-xl w-[45%] py-6 px-9 text-black bg-[#FFBF46]">
                <h2 className="text-2xl font-semibold">0</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
        </div>
    )
};

export default TaskListNumber;