import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import { RiMessageFill } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {


    return (
        <nav className='bg-[#111418] h-[12vh] w-full container mx-auto flex justify-between items-center md:px-[80px] sticky top-0 left-0 z-50'>
            <Link to={"/"}>
                <img className='h-[50px]' src={logo} alt="" />
            </Link>

            <ul className='flex items-center gap-[20px]'>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#6f45b7] text-[#fff] text-[20px]" : "h-[45px] w-[45px] bg-[#6f45b750] rounded-full text-[#fff] text-[20px]"}
                        to={"/"}>
                        <FaHome />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#6f45b7] text-[#fff] text-[20px]" : "h-[45px] w-[45px] bg-[#6f45b750] rounded-full text-[#fff] text-[20px] flex items-center justify-center"}
                        to={"/message"}>
                        <RiMessageFill />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#6f45b7] text-[#fff] text-[20px]" : "h-[45px] w-[45px] bg-[#6f45b750] rounded-full text-[#fff] text-[20px] flex items-center justify-center"}
                        to={"/add-friend"}>
                        <FaUserPlus />
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-[20px]'>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#6f45b7] text-[#fff] text-[20px]" : "h-[45px] w-[45px] bg-[#6f45b750] rounded-full text-[#fff] text-[20px] flex items-center justify-center"}
                        to={"/notification"}>
                        <IoNotifications />
                    </NavLink>
                </li>
                <li className=''>
                    <NavLink
                        className={(navClass) => navClass?.isActive ? "h-[45px] w-[45px] rounded-full flex items-center justify-center bg-[#6f45b7] text-[#fff] text-[20px]" : "h-[45px] w-[45px] bg-[#6f45b750] rounded-full text-[#fff] text-[20px] flex items-center justify-center"}
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