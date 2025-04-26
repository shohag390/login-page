import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../../assets/user.jpeg';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import { RiMessageFill } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';

const Navbar = () => {


    return (
        <nav className='bg-[#fff] nav-shadow md:h-[12vh] h-[10vh] w-full md:container md:mx-auto flex justify-between items-center md:px-[80px] px-[20px] sticky top-0 left-0 z-50'>
            <Link to={"/"} className='flex items-center gap-[2px] text-[#6f45b7] '>
                <MdOutlineConnectWithoutContact className='md:text-[45px] text-[35px]' />
                <span className='md:font-bold font-medium md:text-[20px] text-[18px] uppercase'>People</span>
            </Link>

            <ul className='md:flex md:items-center md:gap-[20px] hidden'>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#553c7e] hover:bg-[#553c7e] text-[#fff] text-[20px] active:scale-[.9] duration-700" : "h-[45px] w-[45px] bg-[#6f45b7] rounded-full text-[#fff] text-[20px] active:scale-[.9] duration-700"}
                        to={"/"}>
                        <FaHome />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#553c7e] hover:bg-[#553c7e] text-[#fff] text-[20px] active:scale-[.9]" : "h-[45px] w-[45px] bg-[#6f45b7] hover:bg-[#553c7e] rounded-full text-[#fff] text-[20px] flex items-center justify-center active:scale-[.9]"}
                        to={"/message"}>
                        <RiMessageFill />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#553c7e] hover:bg-[#553c7e] text-[#fff] text-[20px] active:scale-[.9]" : "h-[45px] w-[45px] bg-[#6f45b7] hover:bg-[#553c7e] rounded-full text-[#fff] text-[20px] flex items-center justify-center active:scale-[.9]"}
                        to={"/add-friend"}>
                        <FaUserPlus />
                    </NavLink>
                </li>
            </ul>

            <ul className='md:flex md:items-center md:gap-[20px] hidden'>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#553c7e] hover:bg-[#553c7e] text-[#fff] text-[20px] active:scale-[.9]" : "h-[45px] w-[45px] bg-[#6f45b7] hover:bg-[#553c7e] rounded-full text-[#fff] text-[20px] flex items-center justify-center active:scale-[.9]"}
                        to={"/notification"}>
                        <IoNotifications />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#553c7e] hover:bg-[#553c7e] text-[#fff] text-[20px] active:scale-[.9]" : "h-[45px] w-[45px] bg-[#6f45b7] hover:bg-[#553c7e] rounded-full text-[#fff] text-[20px] flex items-center justify-center active:scale-[.9]"}
                        to={"/setting"}>
                        <IoMdSettings />
                    </NavLink>
                </li>
                <li>
                    <Link to={"/profile"}>
                        <img className='h-[40px] w-[40px] rounded-full' src={user} alt="user-image" />
                    </Link>
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;