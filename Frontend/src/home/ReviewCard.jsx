import React from 'react'

import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../assets/profile.jpg"

const ReviewCard = () => {
    return (
        <div className='space-y-6'>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7'>
                <p className='mb-5'>I'm so impressed with the quality of service provided by this online book store.
                 The user-friendly interface makes browsing and purchasing books a breeze. Plus, the customer support 
                 team is incredibly helpful and responsive. I've had a great experience every time I've shopped here.</p>
                <Avatar
                    alt="avatar of Jese"
                    img={profile}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-sm'> CEO, ABC Company</p>
            </div>
        </div>
  )
}

export default ReviewCard