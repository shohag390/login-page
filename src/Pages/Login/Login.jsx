import { useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
                toast.success("Login successful")
                localStorage.setItem('isLoggedIn', 'true');
                navigate("/");
            } else {
                toast.error("Invalid Email Or Password")
            }
        } else {
            toast.info("User Not found");
        }
    };


    return (
        <div className='bg-[#fbfcfe] flex items-center justify-center md:container md:mx-auto h-[100vh] w-full'>
            <div className='md:w-[30%] w-[90%] p-[40px] bg-[#ffff] card rounded-2xl'>
                <form onSubmit={handleLogin} className='text-[#6e45b7]'>
                    <h4 className='text-center font-bold text-[28px] pb-[20px]'>Sign In</h4>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex flex-col gap-[5px]'>
                            <label className='text-[#000]'>
                                Email Address
                            </label>
                            <input
                                className='text-[#000] bg-[#fbfcfe] py-[10px] px-[10px] rounded-md focus:outline-0 border-[1px] border-[#6e45b7]' placeholder='Enter Your Email'
                                type="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-[5px]'>
                            <label className='text-[#000]'>
                                Password
                            </label>
                            <input
                                className='text-[#000] bg-[#fbfcfe] py-[10px] px-[10px] rounded-md focus:outline-0 border-[1px] border-[#6e45b7]' placeholder='Enter Your Password'
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
                            <label className='text-[#000]'>Remember Me</label>
                        </div>
                        <div>
                            <a className='text-[#000]' href="#">Forgot Password ?</a>
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

                <p className='text-center text-[#000]'>Don't have an account? <Link className='text-[blue] underline hover:text-[red]' to={"/signup"}>Sign Up</Link></p>

            </div>
        </div>
    );
};

export default Login;