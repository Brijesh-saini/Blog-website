# MERN Stack Blog Website

A full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This project allows users to read, create, edit, and delete blog posts, as well as interact with content through comments and likes.

## 🚀 Features

* **User Authentication:** Secure Sign Up and Sign In functionality using JWT and Google Login (via Firebase).
* **Blog Management:** Create, Read, Update, and Delete (CRUD) blog posts.
* **Rich Text Editor:** Integrated CKEditor 5 for rich content creation.
* **Categories:** Organize blogs by specific categories.
* **Engagement:** Like and Comment system for blog posts.
* **Responsive Design:** Built with Tailwind CSS and Shadcn UI for a modern, mobile-friendly interface.
* **Image Uploads:** Cloudinary integration for handling image uploads.
* **State Management:** Redux Toolkit for managing frontend application state.

## 🛠️ Tech Stack

### Frontend (`/client`)
* **React:** UI Library
* **Vite:** Build tool
* **Tailwind CSS:** Utility-first CSS framework
* **Redux Toolkit:** State management
* **React Router DOM:** Routing
* **React Hook Form & Zod:** Form handling and validation
* **CKEditor 5:** Rich text editing
* **Radix UI / Shadcn UI:** Accessible UI components
* **Firebase:** Google Authentication

### Backend (`/api`)
* **Node.js:** Runtime environment
* **Express.js:** Web framework
* **MongoDB & Mongoose:** Database and ODM
* **JWT (JSON Web Tokens):** Authentication
* **Bcryptjs:** Password hashing
* **Cloudinary:** Image cloud storage
* **Multer:** Middleware for handling `multipart/form-data`

## ⚙️ Installation & Setup

### Prerequisites
* Node.js installed on your machine.
* A MongoDB connection string (local or Atlas).
* Cloudinary account credentials.
* Firebase project credentials.

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Blog-website

Blog-website/
├── api/                # Backend Express server
│   ├── config/         # DB and library configurations
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── index.js        # Server entry point
└── client/             # Frontend React application
    ├── public/         # Static assets
    └── src/
        ├── components/ # Reusable UI components
        ├── pages/      # Application pages
        ├── redux/      # Redux slices and store
        └── helpers/    # Utility functions
