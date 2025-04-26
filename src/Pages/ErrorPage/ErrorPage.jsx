import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className='md:px-[80px] container mx-auto error-page h-[88vh] w-full flex flex-col items-center justify-center bg-[#fbfcfe]'>
                <h1 className='font-bold text-[80px] text-[#6f45b7] leading-[90px]'>404</h1>
                <h4 className='font-bold text-[18px] text-[#553c7e]'>Oops!</h4>
                <p className='text-center text-[gray]'>We're sorry,
                    The page you were looking for doesn't <br /> exist anymore.</p>
                <Link to={"/"} className='py-[6px] px-[25px] border-[1px] border-[#6f45b7] text-[#6f45b7] rounded-full mt-[30px] hover:bg-[#6f45b7] hover:text-[#fff] active:scale-[.9] duration-700'>Go To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;