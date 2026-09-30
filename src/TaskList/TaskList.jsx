import React from "react";

let TaskList = () =>{
    return(
        <div id='tasklist' className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full  mt-10">
            <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm py-1 px-3">High </h3>
                <h4 className="text-sm">30 September 2026</h4>
            </div>
                <h2 className="mt-5 text-xl font-semibold">Maka Youtube Video</h2>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt reprehenderit incidunt voluptate, veniam amet magni sed debitis pariatur dolores, ad laudantium nesciunt, libero voluptatem ab odit. Molestiae, optio fuga.
                </p>
            </div>

            
            
        </div>
    )
}

export default TaskList;