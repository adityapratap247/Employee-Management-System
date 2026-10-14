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
    }, []);

    const contextValue = [userData, setUserData];
    contextValue.employees = userData?.employees;
    contextValue.admins = userData?.admins;
    contextValue.userData = userData;
    contextValue.setUserData = setUserData;

    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;