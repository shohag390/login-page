import React from 'react';
import PostContent from '../Pages/PostContent/PostContent';
import Contents from '../Pages/Content/Contents';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <PostContent />
                <Contents />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;