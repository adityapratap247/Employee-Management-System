import React from "react";

let Header = () =>{
    return(
        <div className="flex items-end justify-between ">
            <h1 className="text-2xl">Hello <br/> <span className="text-3xl font-semibold">Aditya</span> 👋🏻</h1>
            <button>Log Out</button>
        </div>
    )
};

export default Header;