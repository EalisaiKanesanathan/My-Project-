import React from 'react'
import BannerCard from './BannerCard'
 
const Banner = () => {
    return (
        <div className='px-4 lg:px-24  flex items-center bg-[#f5f5f5] '>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                

                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-5xl font-bold text-black leading-snug'>Unlock fantastic deals on book  <span className='text-blue-700'>purchases & sales today!</span></h2>
                    <p className='md:w-4/5'>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <div>
                        <input type="search" name='search' id='search' placeholder='Search a book here' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <BannerCard> </BannerCard>
                </div>
            </div>
        </div>
    )
}

export default Banner