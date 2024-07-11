
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiBookshelf } from 'react-icons/gi';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contexts/AuthProvider';
import LogoImg from "../assets/logo.png"
import defaultProfileImage from '../assets/defaultProfile.jpg'; 
 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
 
    // Check if the user is an admin
    const isAdmin = user && user.email === 'admin@gmail.com';
 
    // toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
 
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
 
        window.addEventListener("scroll", handleScroll);
 
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
 
    // nav items are:
    const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Blog", path: "/blog" },
    { link: "Sell Your Book", path: "/admin/dashboard", visible: isAdmin } // Set visible to isAdmin only
];
 
    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-400" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* logo  */}
                    <Link to="/" className="flex items-center gap-2 rounded-full w-20 h-20">
                <img src={LogoImg} alt="Book Icon" className="inline-block" />
                </Link>
 
                    {/* nav items for large device  */}
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path, visible }) =>
                            visible !== false && <li key={path}><Link to={path} className='text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link></li>
                        )}
                        {user && <Link to='/log-out' className="relative">
                            <button className="border border-gray-700 text-red-600 rounded-md px-1">Log out</button>
                        </Link>}
                    </ul>
 
                    {/* User information */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        {user ? (
                            <div className="flex items-center">
                                {/* Display user's profile image or default placeholder image */}
                                <img
                                    src={user?.photoURL || defaultProfileImage}
                                    alt="Profile"
                                    className='w-[48px] p-1 rounded-full border border-gray-700 mr-4'
                                />
                                <p className="text-black">{user.email}</p> {/* Display user's email */}
                            </div>
                        ) : (
                            <Link to='/login' className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-2 py-1">Log-in</button>
                            </Link>
                        )}
                    </div>
 
                    {/* menu btn for the mobile device  */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                </div>
 
                {/* navitems for sm device */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
                    {navItems.map(({ link, path, visible }) =>
                        visible !== false && <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-black'>{link}</Link>
                    )}
                    {user && (
                        <div className='flex gap-3 items-center'>
                            <img src={user.photoURL} alt="User" className='w-[42px] h-[42px] rounded-full border border-gray-700' />
                            <p className='flex flex-col justify-start'>
                                {user.displayName || "Default Name"} {/* Use default name if user's display name is not available */}
                                <Link to={'/logout'} className='text-sm text-red-700 underline'>logout</Link>
                            </p>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};
 
export default Navbar;
 