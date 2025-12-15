import React, { useState, useContext, createContext } from "react";

export const AuthContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProvideAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    function login() {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn', 'true');
    }
    function logout() {
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', 'false');
    }
    return {
        login,
        logout,
        isLoggedIn
    };
}