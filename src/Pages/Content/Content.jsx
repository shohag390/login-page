import React, { useState } from 'react';
import user from '../../assets/user.png';
import LikeButton from '../../Components/LikeButton/LikeButton';
import { MdDeleteForever } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { FaRegShareSquare, FaShareAlt } from 'react-icons/fa';

const Content = ({ data }) => {
    const { text, time, image } = data;

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleAddComment = () => {
        if (comment.trim() === '') return;

        const newComment = {
            id: Date.now(),
            text: comment,
            time: new Date().toLocaleTimeString(),
        };

        setComments([newComment, ...comments]);
        setComment('');
    };


    return (
        <div className='bg-[#111418] p-[20px] rounded-2xl'>
            <div className='flex items-center justify-between border-b-[1px] pb-[15px] border-[#6f45b7]'>
                <div className='flex items-center gap-[10px]'>
                    <img className='h-[40px] w-[40px] rounded-full' src={user} alt="user-image" />
                    <div>
                        <h4 className='font-bold text-[#fff] text-[18px]'>Anthony Daugloi</h4>
                        <p className='text-[#bcbcbc] text-[14px]'>{time}</p>
                    </div>
                </div>
                <button className='cursor-pointer text-[20px] text-[#fff]'>
                    <BsThreeDots />
                </button>
            </div>
            <p className='text-[#fff] pt-[15px] pb-[25px]'>{text}</p>
            <img className='h-[400px] w-full rounded-xl pb-[15px]' src={image} alt="image" />
            <div className='flex items-center justify-between border-t-[1px] border-[#6f45b7] py-[15px]'>
                <div className=''>
                    <LikeButton />
                </div>
                <button className='text-gray-500 hover:text-[#fff] duration-700 cursor-pointer flex items-center gap-[5px]'>
                    <FaShareAlt className='text-[20px]' />
                    <span className='text-[16px]'>Share</span>
                </button>
            </div>
            {/* Comments Section */}
            <div className="w-[50%]">
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        className="text-[#fff]"
                        placeholder="Write a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                    />
                    <button
                        onClick={handleAddComment}
                        className="bg-[#6f45b7] text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        <IoIosSend />
                    </button>
                </div>

            </div>
            <div className="space-y-3">
                {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-100 p-3 rounded">
                        <p>{comment.text}</p>
                        <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Content;