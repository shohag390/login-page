import React, { useState } from 'react';

const Comment = () => {
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
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow">
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    className="flex-1 border px-3 py-2 rounded"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                />
                <button
                    onClick={handleAddComment}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Post
                </button>
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

export default Comment;