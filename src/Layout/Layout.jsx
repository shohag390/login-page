import React from 'react';
import PostContent from '../Pages/PostContent/PostContent';
import Contents from '../Pages/Content/Contents';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import SideNav from '../Components/SideNav/SideNav';
import Notifications from '../Components/Notifications/Notifications';

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='flex justify-between gap-[20px] bg-[#212529] container mx-auto px-[80px] py-[20px] h-[88vh]'>
                <aside className='w-[20%] h-full'>
                    <SideNav />
                </aside>
                <div className='w-[60%] h-[83vh] overflow-y-auto hide-scrollbar'>
                    <PostContent />
                    <Contents />
                </div>
                <aside className='w-[20%] h-full'>
                    <Notifications />
                </aside>
            </main>
        </>
    );
};

export default Layout;