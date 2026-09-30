import React from "react";

let CreateTask = () =>{
    return(
         <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
                
                <form className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-1/2">
                        <div >
                        <h3 className="text-sm text-gray-300 mb-0.5" > Task Title </h3>
                        <input type="text" placeholder="make a ui design" className= "{inputStyle} text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"  />
                    </div>
                        <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input type="date" className= "{inputStyle} text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input type="text" placeholder="employee name" className= "{inputStyle} text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input type="text" placeholder="design, dev" className= "{inputStyle} text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
                    </div>
                    </div>
                    
                    <div className="w-1/2">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea name="" id="" cols="30" rows="10" className= "{inputStyle} text-sm py-1 px-2 w-5/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-5/5" > Create Task</button>
                    </div>
                    
                 
                </form>
            </div>
    )
};

export default CreateTask;