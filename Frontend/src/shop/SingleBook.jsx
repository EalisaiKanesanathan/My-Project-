import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL } = useLoaderData();
    
    return (
        <div className='mt-40 px-4 lg:px-24 flex flex-col items-center'>
            <img src={imageURL} alt={bookTitle} className='h-64 w-auto rounded-lg shadow-lg mb-4' />
            <h2 className='text-2xl font-bold text-center mb-2'>{bookTitle}</h2>
            <p className='text-gray-600 italic mb-2'>by {authorName}</p>
            <p className='text-gray-700 mb-2'>Category: {category}</p>
            <p className='text-gray-700 mb-4'>{bookDescription}</p>
            <a href={bookPdfURL} target="_blank" rel="noopener noreferrer" className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300'>Read More</a>
        </div>
    );
}

export default SingleBook;
