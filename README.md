<!DOCTYPE html>
<html lang="en">
<head>
  
</head>
<body>
<header>
    <h1># team_hustle_squad</h1>
    <h2>Project Proposal</h2>
</header>

  <section id="introduction">
    <h3>Introduction:</h3>
    <p>Our project aims to develop an online bookstore platform, offering users a seamless browsing and purchasing experience. Essential features such as user authentication, product management, and secure payment processing will be integrated to ensure a satisfying user journey.</p>
  </section>

  <section id="components">
    <h3>Components:</h3>
    <ul>
      <li>Front-End: Responsive UI for book browsing</li>
      <li>Back-end: Handles user requests, manages inventory, and processes orders.</li>
      <li>Database: Stores user profiles, book details, and order history securely.</li>
    </ul>
  </section>

  <section id="technologies">
    <h3>Technologies:</h3>
    <ul>
      <li>Front-End: React.js</li>
      <li>Back-end: Node.js, Express.js</li>
      <li>Database: MongoDB</li>
    </ul>
  </section>

  <section id="api">
    <h3>API Integration:</h3>
    <ul>
      <li>/api/users/register: Register a new user account.</li>
      <li>/api/users/login: Log in to an existing user account.</li>
      <li>/api/users/profile: Retrieve and update user profile information.</li>
      <li>/api/users/logout: Log out the current user session.</li>
      <li>/api/books/search: Search for books based on keywords, author.</li>
      <li>/api/books/{id}/reviews: Retrieve reviews for a specific book.</li>
      <li>/api/admin/books/add: Add a new book to the inventory (admin access required).</li>
    </ul>
  </section>

  <section id="architecture">
    <h3>Architecture Design:</h3>
    <ul>
      <li>User Browser: Interface for browsing and purchasing books.</li>
      <li>Server: Processes requests, manages inventory, and handles transactions securely.</li>
      <li>Persistent Storage: MongoDB database for storing user and product data.</li>
      <li>Load Balancer: Distributes traffic for scalability.</li>
      <li>Authenticator: Manages user authentication.</li>
    </ul>
  </section>

  <section id="database">
    <h3>Database Design:</h3>
    <ul>
    <li><strong>Entities:</strong> User, Book, Order, OrderItem</li>
    <li><strong>Relationships:</strong> 
      <ul>
        <li>Users - Orders (one-to-many)</li>
        <li>Orders - OrderItems (one-to-many)</li>
        <li>Books - Orders (many-to-many)</li>
      </ul>
    </li>
    <li><strong>Attributes:</strong> 
      <ul>
        <li>User (ID, username, email, password, phone)</li>
        <li>Book (ID, title, author, price)</li>
        <li>Order (ID, user_id, order_date)</li>
        <li>Order_Item (ID, order_id, book_id, quantity)</li>
      </ul>
    </li>
  </ul>
  </section>

  <section id="conclusion">
    <h3>Conclusion:</h3>
    <p>Our project, an online bookstore, aims to provide an user-focused platform with a strong architecture by utilizing safe connectors and advanced technology. Our goal is to provide a complete solution that will appeal to both book sellers and readers, with a focus on scalability, dependability, and user experience.</p>
  </section>

</body>
</html>
