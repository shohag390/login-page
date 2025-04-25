import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        navigate("/login");
    };


    return (
        <div className='bg-[#212529] flex items-center justify-center container mx-auto h-[100vh] w-full'>
            <div className='h-[92vh] w-[70%] bg-[#111418] flex justify-between rounded-2xl'>
                <div className='login-bg w-[55%] p-[40px] rounded-es-2xl rounded-tl-2xl relative'>
                    <img className='h-[60px]' src={logo} alt="logo" />
                    <div className='absolute top-0 left-0 h-[100%] w-[100%] flex items-center p-[40px]'>
                        <div className='text-[#fff]'>
                            <h1 className='font-bold text-[30px] capitalize'>You are new Here !</h1>
                            <p>Sign up with your email and personal details to get started !</p>
                        </div>
                    </div>
                </div>
                <div className='w-[45%] p-[40px]'>
                    <form onSubmit={handleSubmit} className='text-[#fff]'>
                        <h4 className='text-center font-bold text-[28px] pb-[20px]'>
                            Sign Up
                        </h4>

                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label>
                                    Full Name
                                </label>
                                <input
                                    className='text-[#fff] bg-[#212529] py-[10px] px-[10px] rounded-md focus:outline-0'
                                    placeholder='Enter Your Name'
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-[5px]'>
                                <label>
                                    Email Address
                                </label>
                                <input
                                    className='text-[#fff] bg-[#212529] py-[10px] px-[10px] rounded-md focus:outline-0'
                                    placeholder='Enter Your Email'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-[5px]'>
                                <label>
                                    Password
                                </label>
                                <input
                                    className='text-[#fff] bg-[#212529] py-[10px] px-[10px] rounded-md focus:outline-0'
                                    placeholder='Enter Your Password'
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className='flex py-[18px] items-center gap-[8px]'>
                            <input type="checkbox" required />
                            <label>I agree to the <span className='text-[blue] underline hover:text-[red]'>Terms</span> and <span className='text-[blue] underline hover:text-[red]'>Privacy Policy.</span></label>
                        </div>

                        <button type="submit" className='bg-[#6e45b7] w-full py-[10px] text-[#fff] rounded-md'>
                            Sign Up
                        </button>

                    </form>

                    <div className='flex items-center pt-[20px] pb-[15px]'>
                        <span className='h-[1px] w-[25%] bg-[gray]'></span>
                        <span className='text-[gray] w-[50%] text-center'>Or with Social Profile</span>
                        <span className='h-[1px] w-[25%] bg-[gray]'></span>
                    </div>

                    <div className='flex items-center gap-[15px] justify-center pb-[15px]'>
                        <button className='flex items-center justify-center h-[40px] w-[40px] bg-[#f33500] rounded-full'>
                            <FaGoogle className='text-[20px] text-[#fff]' />
                        </button>
                        <button className='flex items-center justify-center h-[40px] w-[40px] bg-[#007dea] rounded-full'>
                            <FaFacebookF className='text-[20px] text-[#fff]' />
                        </button>
                        <button className='flex items-center justify-center h-[40px] w-[40px] bg-[#000dff] rounded-full'>
                            <FaLinkedinIn className='text-[20px] text-[#fff]' />
                        </button>
                    </div>

                    <p className='text-center text-[#fff]'>Already have an account? <Link className='text-[blue] underline hover:text-[red]' to={"/login"}>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signup;