import React, { useState } from 'react';
import { LuPenLine } from 'react-icons/lu';
import user from '../../assets/user.png';
import { FaImages } from 'react-icons/fa';


const PostContent = () => {
    const [posts, setPosts] = useState({ text: '', image: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPosts(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setPosts(prev => ({
                ...prev,
                image: reader.result, // base64 image
            }));
        };
        reader.readAsDataURL(file);
    };

    const handlePost = (e) => {
        e.preventDefault();
        if (posts.text.trim() === '') return;

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

        const newPost = {
            id: Date.now(),
            text: posts.text,
            image: posts.image, // optional
            time: new Date().toLocaleString(),
        };

        const updatedPosts = [newPost, ...existingPosts];
        localStorage.setItem('posts', JSON.stringify(updatedPosts));

        // reset
        setPosts({ text: '', image: '' });
    };

    return (
        <div className='w-full p-[20px] bg-[#111418] rounded-2xl'>
            <div className='flex items-center gap-[10px] pb-[18px]'>
                <div className='h-[40px] w-[40px] rounded-full bg-[#6f45b750] flex items-center justify-center text-[#fff] text-[20px]'>
                    <LuPenLine />
                </div>
                <span className='text-[#fff]'>Create Post</span>
            </div>
            <form onSubmit={handlePost}>
                <div className='flex gap-[10px] border-[2px] border-[#6f45b750] rounded-xl p-[15px]'>
                    <img className='h-[35px] w-[35px] rounded-full' src={user} alt="userImage" />
                    <textarea
                        rows={3}
                        className='w-full h-full text-[#fff] border-none focus:outline-none placeholder:text-[gray]' placeholder="What's on your mind"
                        name='text'
                        value={posts.text}
                        onChange={handleChange}
                        required
                    >
                    </textarea>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <FaImages className='text-[25px] text-[#fff]' />
                        <input
                            className='text-[#a8a8a8]'
                            type="file"
                            accept="image/jpeg, image/jpg, image/png"
                            onChange={handleImage}
                            required
                        />
                    </div>
                    <button
                        className='mt-[10px]  bg-[#6f45b7] py-[6px] px-[30px] rounded-md text-[#fff]'
                        type='submit
                        '>
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostContent;