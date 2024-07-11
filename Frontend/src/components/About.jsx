import React from 'react';
import aboutImage from '../assets/aboutus.jpg';

const About = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="w-full md:w-1/2 relative mt-10">
        <div className='h-auto  ms-auto max-w-xl'><img src={aboutImage} alt="aboutus"/></div>
        </div>
        <div className="w-full md:w-1/2 md:pl-12 z-10">
          <h1 className="text-4xl font-bold mb-12"> StoryVerse Book Store</h1>
          
          <p className="text-md text-gray-700 leading-relaxed text-justify">
            StoryVerse Book Store is a haven for book lovers, offering a curated selection of literary works from around the world. 
            With a passion for storytelling and a commitment to quality literature, we strive to provide readers with enriching 
            experiences and meaningful connections through the power of books.
          </p>
          <p className="text-md text-gray-700 leading-relaxed mt-6 text-justify">
            At StoryVerse, we believe that every book has a story to tell and every reader has a journey to embark on. 
            Whether you're seeking adventure, knowledge, or simply a moment of escape, our diverse collection has something 
            for everyone. From timeless classics to contemporary bestsellers, we aim to inspire, entertain, and ignite the 
            imagination of readers of all ages.
          </p>
          <p className="text-md text-gray-700 leading-relaxed mt-6 text-justify">
            Our commitment to excellence extends beyond our selection of books. We are dedicated to providing exceptional 
            customer service, fostering a welcoming atmosphere, and supporting the literary community. Whether you're 
            browsing our shelves in-store or shopping online, we're here to help you discover your next literary 
            adventure and make your reading experience truly unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;