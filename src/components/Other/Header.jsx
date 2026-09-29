import React from "react";

let Header = () =>{
    return(
        <div className="flex items-end justify-between ">
            <h1 className="text-2xl">Hello <br/> <span className="text-3xl font-semibold">Aditya</span> 👋🏻</h1>
            <button className="bg-red-600 txt-lg font-medium text-white px-5 py-2 rounded-small">Log Out</button>
        </div>
    )
};

export default Header;