# BlogSphere API

**Backend Service for Blog-Type Social Media App**

## Overview

BlogSphere is a robust backend service designed to power blog-type social media applications. It provides a scalable and secure infrastructure for managing users and blog posts.

## Key Features

- **User Management**
  - **Signup:** Users can create new accounts.
  - **Sign-In:** Users can authenticate themselves.
  - **Get All Users:** Retrieve a list of all registered users.

- **Post Management**
  - **Create/Add Blog:** Users can create new blog posts.
  - **Update Blog:** Users can update their existing blog posts.
  - **Delete Blog:** Users can delete their blog posts.
  - **Get All Blogs:** Retrieve all blogs from the platform.

## Technologies Used

- **JavaScript**: Core language for developing the APIs.
- **Node.js**: Runtime environment for executing JavaScript on the server-side.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and blog data.
- **bcrypt.js**: Library used to hash user passwords for enhanced security.
- **Postman**: Tool used for testing the APIs.

## API Endpoints

### User Management

- **POST /blog/api/user/signUp** - Register a new user.
- **POST //blog/api/user/signIn** - Authenticate a user.
- **GET /api/users** - Retrieve all users.

### Blog Management

- **POST /blog/api/addBlog** - Create a new blog post.
- **PUT /blog/api/updateBlog/:id** - Update an existing blog post.
- **DELETE /blog/api/delereBlogById/:id** - Delete a blog post.
- **GET /blog/api/blogs/** - Get all blog posts.

## Security

- **Password Hashing**: User passwords are securely stored using `bcrypt.js` to hash them before saving to the database.

