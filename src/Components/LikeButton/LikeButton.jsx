import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const handleLike = () => {
        if (liked) {
            setLikesCount(prev => prev - 1);
        } else {
            setLikesCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <button
            onClick={handleLike}
            className={`flex items-center text-[20px] gap-[10px] rounded-full transition ${liked ? 'text-[#6e45b7]' : 'text-[#8d8d8d]'
                }`}
        >
            <FaThumbsUp />
            <span>{likesCount}</span>
        </button>
    );
};

export default LikeButton;