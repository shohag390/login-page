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
            className={`flex items-center gap-2 p-2 rounded-full transition ${liked ? 'text-blue-600' : 'text-gray-500'
                }`}
        >
            <FaThumbsUp />
            <span>{likesCount}</span>
        </button>
    );
};

export default LikeButton;