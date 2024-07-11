import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';
import LogoImg from "../assets/logo.png"

const Logout = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut().then(() => {
            alert('Logout successful!');
            navigate('/', { replace: true });
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='h-screen bg-teal-100 flex flex-col items-center justify-center'>
            <img src={LogoImg} alt="Book Icon" className="w-28 h-28 mb-1" />
            <h1 className="text-3xl font-bold text-blue-600 mb-2">Logged Out</h1>
            {user ? (
                <>
                    <p className="mb-4">Hi, {user.email}</p>
                    <p className="mb-4">Are you sure you want to LogOut from this website?</p>
                    <div className="flex gap-16">
                        <button className='bg-blue-700 px-8 py-2 text-white rounded' onClick={handleLogout}>
                            Yes
                        </button>
                        <Link to="/" className="bg-gray-500 px-8 py-2 text-white rounded hover:bg-gray-600">
                            No
                        </Link>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    );
};

export default Logout;
