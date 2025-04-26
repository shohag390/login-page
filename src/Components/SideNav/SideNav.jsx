import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaPeopleGroup } from 'react-icons/fa6';
import { HiCheckBadge } from 'react-icons/hi2';
import { IoTv } from 'react-icons/io5';
import { LuHistory } from 'react-icons/lu';

const SideNav = () => {
    return (
        <div className="p-[20px] bg-[#fff] card rounded-2xl">
            <h4 className='text-[18px] font-medium pb-[20px]'>New Feeds</h4>
            <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                    <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#6f45b7] text-[#fff] rounded-full'>
                        <IoTv className='text-[20px]' />
                    </div>
                    <span className='font-medium text-[16px] text-gray-500'>Newsfeed</span>
                </div>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                    <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#6f45b7] text-[#fff] rounded-full'>
                        <HiCheckBadge className='text-[20px]' />
                    </div>
                    <span className='font-medium text-[16px] text-gray-500'>Badges</span>
                </div>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                    <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#6f45b7] text-[#fff] rounded-full'>
                        <LuHistory className='text-[20px]' />
                    </div>
                    <span className='font-medium text-[16px] text-gray-500'>Explore Stories</span>
                </div>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                    <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#6f45b7] text-[#fff] rounded-full'>
                        <FaPeopleGroup className='text-[20px]' />
                    </div>
                    <span className='font-medium text-[16px] text-gray-500'>Explore Groups</span>
                </div>
                <div className='flex items-center gap-[10px] cursor-pointer'>
                    <div className='h-[40px] w-[40px] flex items-center justify-center bg-[#6f45b7] text-[#fff] rounded-full'>
                        <CgProfile className='text-[20px]' />
                    </div>
                    <span className='font-medium text-[16px] text-gray-500'>Author Profile</span>
                </div>
            </div>
        </div>
    );
};

export default SideNav;