import React from "react";

const Header = (props) => {
    const logOutUser = () => {
        localStorage.setItem("LoggedInUser", "");
        if (props.changeUser) {
            props.changeUser("");
        } else {
            window.location.reload();
        }
    };

    return (
        <div className="flex items-end justify-between">
            <h1 className="text-2xl">
                Hello <br />
                <span className="text-3xl font-semibold">
                    {props.data?.firstName || "Admin"}
                </span> 👋🏻
            </h1>
            <button
                onClick={logOutUser}
                className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;