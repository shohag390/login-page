import React from 'react';
import PostContent from '../Pages/PostContent/PostContent';
import Contents from '../Pages/Content/Contents';
import Navbar from '../Components/Navbar/Navbar';
import SideNav from '../Components/SideNav/SideNav';
import Notifications from '../Components/Notifications/Notifications';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className='flex justify-between gap-[10px] bg-[#fbfcfe] md:container md:mx-auto md:px-[80px] px-[20px] pb-[20px] md:h-[88vh] h-full'>
                <aside className='md:w-[25%] md:block hidden md:h-full my-[20px] py-[5px]'>
                    <SideNav />
                </aside>
                <div className='md:w-[50%] w-full md:h-[83vh] overflow-y-auto hide-scrollbar my-[20px] py-[5px] md:px-[30px] px-[5px]'>
                    <PostContent />
                    <Contents />
                </div>
                <aside className='md:w-[25%] md:block hidden h-full my-[20px] py-[5px]'>
                    <Notifications />
                </aside>
            </main>
        </>
    );
};

export default Layout;