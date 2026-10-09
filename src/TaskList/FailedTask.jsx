import React from "react";

const FailedTask = () => {
    return(
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
                        <div className="mt-2">
                            <button className="w-full">Complete</button>
                        </div>
                    </div>
    );
};

export default FailedTask;