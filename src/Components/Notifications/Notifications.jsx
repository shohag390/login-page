import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
    const [getData, setGetData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => setGetData(data))
    }, []);

    return (
        <div className='p-[20px] bg-[#fff] card rounded-2xl'>
            <div className='flex items-center justify-between pb-[20px]'>
                <h4 className='text-[18px] font-medium'>Friend Request</h4>
                <Link to={"/"}>See All</Link>
            </div>

            <div className='flex flex-col gap-[15px]'>
                {
                    getData?.map((user) => (
                        <div className='flex items-center text-justify gap-[10px] bg-[#fbfcfe] p-[8px] rounded-xl' key={user?.id}>
                            <div className='w-[15%]'>
                                <img className='h-[40px] w-[40px] rounded-full' src={user?.image} alt="image" />

                            </div>
                            <div className='w-[85%]'>
                                <p className='line-clamp-1 text-[14px]'>{user?.description}</p>
                                <p className='text-[gray] text-[14px]'>{user?.time}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Notifications;