import React, { useState } from "react";

const Login = () => {

    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("form submitted");
        
    }

    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20">
                <form onSubmit={(e) =>{
                    submitHandler(e);
                }} 
                className="flex flex-col items-center justify-center">
                    <input 
                    onChange={() =>{
                        console.log("Changingggg");
                    }}
                    required 
                    className='border-2 text-black outline-none placeholder:text-grey-400 bg-white border-emerald-600 py-3 px-4 text-xl rounded-full' type="email" placeholder="Enter your email" 
                    />
                    <input required className='border-2 text-black outline-none mt-3 placeholder:text-grey-400 bg-white border-emerald-600 py-3 px-4 text-xl rounded-full' type="password" placeholder="Enter password" />
                    <button className='border-2 text-white outline-none mt-3 placeholder:text-black  bg-emerald-600 py-3 px-4 text-xl rounded-full'> Log IN</button>
                </form>
            </div>

        </div>
    )
}

export default Login    