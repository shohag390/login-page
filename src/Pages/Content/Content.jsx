import React, { useState } from 'react';
import user from '../../assets/user.jpeg';
import LikeButton from '../../Components/LikeButton/LikeButton';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegShareSquare, FaShareAlt, FaUserCircle } from 'react-icons/fa';

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

    const handleClear = () => {
        setComment("")
    }


    return (
        <div className='bg-[#fff] px-[20px] pt-[20px] pb-[35px] rounded-2xl card'>
            <div className='flex items-center justify-between border-b-[1px] pb-[15px] border-[#6f45b7]'>
                <div className='flex items-center gap-[10px]'>
                    <img className='h-[40px] w-[40px] rounded-full' src={user} alt="user-image" />
                    <div>
                        <h4 className='font-bold text-[#6e45b7] text-[18px]'>Anthony Daugloi</h4>
                        <p className='text-[#909090] text-[14px]'>{time}</p>
                    </div>
                </div>
                <button className='cursor-pointer text-[20px] text-[#6e45b7]'>
                    <BsThreeDots />
                </button>
            </div>
            <p className='text-[#000] pt-[15px] pb-[20px]'>{text}</p>
            <img className='md:h-[330px] h-[200px] w-full rounded-xl' src={image} alt="image" />
            <div className='flex items-center justify-between border-t-[1px] border-[#6f45b7] py-[15px] mt-[25px]'>
                <div className=''>
                    <LikeButton />
                </div>
                <button className='text-[#6e45b7] hover:text-[#553c7e] duration-700 cursor-pointer flex items-center gap-[5px]'>
                    <FaShareAlt className='text-[20px]' />
                    <span className='text-[16px]'>Share</span>
                </button>
            </div>
            {/* Comments Section */}
            <div className="w-full">
                <input
                    type="text"
                    className="w-full border-b-[1px] py-[6px] px-[10px] border-[#6f45b7] focus:outline-0 placeholder:text-[gray] text-[#000]"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                />
                <div className='flex gap-[15px] justify-end items-center'>
                    <button
                        onClick={handleClear}
                        className="md:border-[2px] border-[1px] border-[#6f45b7] hover:bg-[#553c7e] duration-700 active:scale-[.9] text-[#6f45b7] hover:text-[#fff] md:px-[30px] px-[20px] md:py-[6px] py-[4px] rounded-md mt-[10px]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleAddComment}
                        className="md:border-[2px] border-[1px] border-[#6f45b7] bg-[#6f45b7] hover:bg-[#553c7e] duration-700 active:scale-[.9] text-white md:px-[30px] px-[20px] md:py-[6px] py-[4px] rounded-md mt-[10px]"
                    >
                        Comment
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-between pt-[20px]'>
                <h2 className='font-bold text-[18px]'>All Comments</h2>
                <h1 className='font-bold text-[18px]'>
                    ({comments?.length})
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-[20px] pt-[25px]">
                {comments.map((comment) => (
                    <div key={comment.id} className="">
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-[10px]'>
                                <FaUserCircle className='text-[35px]' />
                                <div className='flex flex-col'>
                                    <span className='text-[16px] font-semibold text-[#6f45b7] leading-[20px]'>
                                        Josie B. Hammack
                                    </span>
                                    <span className='text-[14px]'>
                                        Active Now
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="text-xs text-[gray]">{comment.time}</span>
                            </div>
                        </div>
                        <p className='pt-[10px] pl-[48px]'>
                            {comment.text}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Content;