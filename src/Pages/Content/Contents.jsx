import React, { useEffect, useState } from 'react';
import Content from './Content';

const Contents = () => {

    const [posts, setPosts] = useState([]);


    const fetchPosts = () => {
        const savedPosts = localStorage.getItem('posts');
        const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];
        setPosts(parsedPosts);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className='grid grid-cols-1 gap-[20px] pt-[20px]'>
            {
                posts?.map((data) => <Content key={data?.id} data={data} />)
            }
        </div>
    );
};

export default Contents;