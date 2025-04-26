import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

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
        <div className='bg-[#fbfcfe] flex items-center justify-center container mx-auto h-[100vh] w-full'>
            <div className='h-[92vh] w-[30%] bg-[#fff] card flex justify-between flex-col p-[30px] rounded-2xl'>

                <form onSubmit={handleSubmit}>
                    <h4 className='text-center text-[#6e45b7] font-bold text-[28px] pb-[20px]'>
                        Sign Up
                    </h4>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[5px]'>
                            <label className='text-[#000]'>
                                Full Name
                            </label>
                            <input
                                className='text-[#000] bg-[#fbfcfe] py-[10px] px-[10px] rounded-md focus:outline-0 border-[1px] border-[#6e45b7]'
                                placeholder='Enter Your Name'
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                            <label className='text-[#000]'>
                                Email Address
                            </label>
                            <input
                                className='text-[#000] bg-[#fbfcfe] py-[10px] px-[10px] rounded-md focus:outline-0 border-[1px] border-[#6e45b7]'
                                placeholder='Enter Your Email'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                            <label className='text-[#000]'>
                                Password
                            </label>
                            <input
                                className='text-[#000] bg-[#fbfcfe] py-[10px] px-[10px] rounded-md focus:outline-0 border-[1px] border-[#6e45b7]'
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

                <p className='text-center text-[#000]'>Already have an account? <Link className='text-[blue] underline hover:text-[red]' to={"/login"}>Login</Link></p>

            </div>
        </div>
    );
};

export default Signup;