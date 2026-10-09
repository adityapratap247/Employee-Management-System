import React from "react";

const AcceptTask = ({ elem }) => {
    return (
        <div className="flex-shrink-0 h-full p-5 w-[300px] bg-[#6F8585] rounded-xl flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-600 text-sm py-1 px-3 rounded font-medium">
                        {elem.category}
                    </h3>

                    <h4 className="text-sm text-gray-300">
                        {elem.taskDate}
                    </h4>
                </div>

                <h2 className="mt-5 text-2xl font-semibold">
                    {elem.taskTitle}
                </h2>

                <p className="text-sm mt-2 text-gray-200">
                    {elem.taskDescription}
                </p>

                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 py-2 px-2 text-sm rounded">
                        Mark as Completed
                    </button>

                    <button className="bg-red-500 py-2 px-2 text-sm rounded">
                        Mark as Failed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcceptTask;