import React, { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData,setUserData]  = useState(null);

    useEffect(() => {
        let { employees, admins } = GetLocalStorage();

        if (!employees || !admins) {
            SetLocalStorage();
            ({ employees, admins } = GetLocalStorage());
        }

        setUserData({ employees, admins });
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