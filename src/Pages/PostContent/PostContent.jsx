import React, { useState } from 'react';
import { LuPenLine } from 'react-icons/lu';
import user from '../../assets/user.jpeg';
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
        <div className='w-full md:p-[20px] p-[15px] bg-[#fff] card rounded-2xl'>
            <div className='flex items-center gap-[10px] md:pb-[18px] pb-[15px]'>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-full bg-[#6f45b750] flex items-center justify-center text-[#fff] text-[20px]'>
                    <LuPenLine />
                </div>
                <span className='text-[#6e6e6e] font-medium'>Create Post</span>
            </div>
            <form onSubmit={handlePost}>
                <div className='flex gap-[10px] border-[1px] border-[#6e45b7] rounded-xl p-[15px]'>
                    <img className='md:h-[35px] h-[30px] md:w-[35px] w-[30px] rounded-full' src={user} alt="userImage" />
                    <textarea
                        rows={3}
                        className='w-full h-full text-[#000] border-none focus:outline-none placeholder:text-[gray]' placeholder="What's on your mind"
                        name='text'
                        value={posts.text}
                        onChange={handleChange}
                        required
                    >
                    </textarea>
                </div>
                <div className='w-full flex items-center justify-between pt-[10px]'>
                    <div className='md:w-[80%] w-[70%] flex items-center gap-[10px]'>
                        <FaImages className='md:text-[25px] text-[#6e45b7]' />
                        <input
                            className='text-[#626262] md:text-[18px] text-[10px]'
                            type="file"
                            accept="image/jpeg, image/jpg, image/png"
                            onChange={handleImage}
                            required
                        />
                    </div>
                    <div className='md:w-[20%] w-[30%] flex justify-end'>
                        <button
                            className='bg-[#6f45b7] hover:bg-[#553c7e] duration-700 active:scale-[.9] text-white md:px-[30px] px-[20px] py-[6px] rounded-md'
                            type='submit
                        '>
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostContent;