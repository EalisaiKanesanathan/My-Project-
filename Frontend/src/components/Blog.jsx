import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Reading: How Books Can Transform Your Life",
      author: "Jane Doe",
      date: "April 10, 2024",
      content: "Have you ever picked up a book and felt transported to another world? Or felt your perspective on life shift after reading a certain passage? Books have a unique power to not only entertain but also to profoundly impact our lives. In this article",
      blogUrl: "https://therandomwriter.medium.com/the-power-of-reading-how-books-can-change-your-life-470f75212b04"
    },
    {
      id: 2,
      title: "10 Must-Read Books of All Time",
      author: "John Smith",
      date: "March 25, 2024",
      content: "Those of you out there who know me are well aware that I am a literature buff and allow me to call myself an avid reader (at the expense of being seen as blowing my own trumpet). Today, I will walk you through the ten must-read books of all time.",
      blogUrl: "https://sherilyasghizri99.medium.com/the-10-must-read-books-of-all-time-b51dc60ef237"
    }
  ];

  return (
    <div>
      

      <div style={{ maxWidth: '800px', margin: 'auto', padding: '100px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px', color: '#0B7DD7', fontSize: '50px' }}>Welcome to Our Blog</h1>
        
        <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '20px' }}>Explore our latest blog posts below:</p>
        
        {blogPosts.map(post => (
          <div key={post.id} style={{ marginBottom: '40px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
            <h2 style={{ marginBottom: '10px' }}>{post.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaUser style={{ marginRight: '5px' }} />
              <span>{post.author}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaCalendarAlt style={{ marginRight: '5px' }} />
              <span>{post.date}</span>
            </div>
            <p>{post.content}</p>
            <p style={{ marginTop: '10px' }}>Read more: <a href={post.blogUrl} target="_blank" rel="noopener noreferrer">{post.title}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
