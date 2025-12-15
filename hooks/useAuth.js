import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    // const navigate = useNavigate();

    useEffect(() => {
        console.log(isLoggedIn)
    }, [isLoggedIn]);

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', 'false');
    };

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };


    return { isLoggedIn, login, logout };
}

export default useAuth;
