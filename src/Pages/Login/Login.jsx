import { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        name: '',
        email: '',
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();

        const storedData = localStorage.getItem('formData');

        if (storedData) {
            const user = JSON.parse(storedData);

            if (user?.email === loginData?.email && user?.password === loginData?.password) {
                console.log("Login successful ✅");

                localStorage.setItem('isLoggedIn', 'true');

                navigate("/");
            } else {
                console.log("Invalid credentials ❌");
            }
        } else {
            console.log("No user found in localStorage");
        }
    };


    return (
        <div className='bg-[#212529] flex items-center justify-center container mx-auto h-[100vh] w-full'>
            <div className='h-[80vh] w-[70%] bg-[#111418] flex justify-between rounded-2xl'>
                <div className='login-bg w-[60%] p-[40px] rounded-es-2xl rounded-tl-2xl relative'>
                    <img className='h-[60px]' src={logo} alt="logo" />
                    <div className='absolute top-0 left-0 h-[100%] w-[100%] flex items-center p-[40px]'>
                        <div className='text-[#fff]'>
                            <h1 className='font-bold text-[30px] capitalizes'>Welcome Back !</h1>
                            <p>Get access your profile and </p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] p-[40px]'>
                    <form onSubmit={handleLogin} className='text-[#fff]'>
                        <h4 className='text-center font-bold text-[28px] pb-[20px]'>Sign In</h4>

                        <div className='flex flex-col gap-[16px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label>
                                    Email Address
                                </label>
                                <input
                                    className='text-[#fff] bg-[#212529] py-[10px] px-[10px] rounded-md focus:outline-0' placeholder='Enter Your Email'
                                    type="email"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='flex flex-col gap-[5px]'>
                                <label>
                                    Password
                                </label>
                                <input
                                    className='text-[#fff] bg-[#212529] py-[10px] px-[10px] rounded-md focus:outline-0' placeholder='Enter Your Password'
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className='flex items-center justify-between py-[18px]'>
                            <div className='flex items-center gap-[8px]'>
                                <input type="checkbox" />
                                <label>Remember Me</label>
                            </div>
                            <div>
                                <a href="#">Forgot Password ?</a>
                            </div>
                        </div>

                        <button type='submit' className='bg-[#6e45b7] w-full py-[10px] text-[#fff] rounded-md'>
                            Login
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

                    <p className='text-center text-[#fff]'>Don't have an account? <Link className='text-[blue] underline hover:text-[red]' to={"/signup"}>Sign Up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;