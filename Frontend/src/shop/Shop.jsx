import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

// Shop component to display all books
const Shop = () => {

// State to hold the list of books
  const [books, setBooks] = useState([]);

// Fetching data from the server on component mount
  useEffect(() => {
    
    // Fetching data from the server
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

// Rendering books as cards
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here  </h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>

        {books.map((book, index) => (

          <Card key={book.id}> 

            <img src={book.imageURL} alt={book.bookTitle} className='h-76'/>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}

            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {getBookDescription(book.bookTitle)}
            </p>

            <button className='bg-blue-700 text-semibold text-white py-2 rounded'> Buy Now </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Function to get book description based on book title
const getBookDescription = (bookTitle) => {

  switch (bookTitle) {

    case "Yellowface":
      return "A gripping exploration of identity and discrimination in a world where appearances can deceive.";
    case "Happy Place":
      return "A heartwarming tale of finding joy and healing in unexpected places.";
    case "Weyward":
      return "A mesmerizing journey through a world where magic and reality collide.";
    case "The Housemaid's Secret":
      return "A captivating historical mystery unraveling the hidden truths of a household.";
    case "Fourth Wing":
      return "An adrenaline-fueled adventure into the depths of espionage and conspiracy.";
    case "Poverty,by America":
      return " Unveiling the layers of systemic poverty in the U.S.";
    case "Check & Mate":
      return "A thrilling chess match of wits and strategy with high stakes and unforeseen consequences.";
    case "The Wager":
      return "A thought-provoking exploration of risk, reward, and the complexities of human relationships.";
    case "Being Henry: The Fonz. and Beyond":
      return "A heartwarming journey of self-discovery and friendship.";
    default:
      return "";

  }
  
};

export default Shop;