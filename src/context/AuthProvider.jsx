import React, { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData,setUserData]  = useState(null);

    useEffect(() => {
        let { employees, admin } = GetLocalStorage();

        if (!employees || !admin) {
            SetLocalStorage();
            ({ employees, admin } = GetLocalStorage());
        }

        setUserData({ employees, admin });
    },[] )

    return(
        <div>
            <AuthContext.Provider value={userData} >
                {children}
            </AuthContext.Provider>
        </div>
    )
};

export default AuthProvider;