# 📚 Online Book Store – Backend

This is the backend of an **Online Book Store** application built with **Node.js**, **Express.js**, and **MongoDB**. It provides secure user and admin authentication using **JWT tokens**, and a set of RESTful APIs for managing books, users, and orders.

---

## 🚀 Features

- 🔐 **JWT Authentication**  
  - Separate authentication for **users** and **admins**  
  - Token-based access control for protected routes  

- 📦 **Book Management APIs**  
  - Add, update, delete, and view books  
  - Search and filter by category, price, or title  

- 🛒 **Order & Cart APIs**  
  - Create and manage orders  

- 👤 **User & Admin APIs**  
  - User registration & login  
  - Admin control over inventory and orders  

- 🧾 **MongoDB Integration**  
  - Uses Mongoose for data modeling  
  - Handles book, user, and order collections  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT (JSON Web Tokens)**  
- **RESTful API Architecture**

---

## 📂 Project Structure
```
│
├── controllers/
│ ├── adminsController.js
│ ├── booksController.js
│ ├── ordersController.js
│ └── usersController.js
│
├── models/
│ ├── Admin.js
│ ├── Book.js
│ ├── Order.js
│ └── User.js
│
├── routes/
│ ├── adminsRoutes.js
│ ├── booksRoutes.js
│ ├── ordersRoutes.js
│ └── usersRoutes.js
│
├── middleware/
│ ├── generateTokens.js
│ └── validateTokenHandler.js
│
├── config/
│ └── dbConnection.js
│
├── .env
├── app.js
├── package.json
├── package-lock.json
```

## 🔧 Setup Instructions


1. **Clone the repository:**
   ```bash
   git clone https://github.com/thomasFathy/online-book-store-backend.git
   cd online-book-store-backend
   ```
   ---
2. **Install dependencies:**   
  ```
  npm install
  
  ```


3. **Run the server:**
  ```
  npm start
  ```
