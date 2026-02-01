✅ Chapter 1: Onboarding to Workshop

🎯 Goal of This Chapter:
To get you ready for your full-stack development journey by understanding the tools, mindset, and setup required.

🧠 What You’ll Learn:
What is a Full-Stack Developer?

Overview of the Workshop Structure

Mindset for Learning Full-Stack

Tools & Tech Setup

Folder Structure for Projects

VS Code Shortcuts and Extensions

Git and GitHub Basics

1. 🚀 What is a Full-Stack Developer?
   A full-stack developer is someone who can build both the frontend (what users see) and backend (server, database, logic) of a web application.
   Example: Like a chef who cooks the food (backend) and also serves it to the customer (frontend).

2. 🧱 Structure of the Workshop (Preview of What You’re Building)
   You’ll be learning in phases:
   Backend: Node.js, Express, MongoDB, REST APIs

Frontend: React, Tailwind, TypeScript

DevOps: AWS, Docker, CI/CD

Enterprise: Microservices, WebRTC, Kafka, Redis, Payment, Streaming, etc.

3. 🧠 Mindset for Learning
   Focus on understanding, not just copying.

Be comfortable with errors — they are your best teachers.

Learn to debug, not panic.

Build projects to solidify concepts.

Practice daily, even for 30 minutes.

4. 🛠 Tools and Tech Stack Setup
   Install the following tools (click each name to get links if needed):
   Tool
   Purpose
   VS Code
   Code editor
   Node.js
   Backend runtime
   MongoDB Compass
   Visual DB tool
   Postman
   API testing
   Git
   Version control
   GitHub
   Code hosting
   Docker (later)
   Containerization
   AWS account (later)
   Deployment

5. 🗂 Recommended Folder Structure
   CopyEdit
   /Fullstack-Workshop
   │
   ├── backend/
   │ ├── controllers/
   │ ├── models/
   │ ├── routes/
   │ ├── services/
   │ └── app.js
   │
   ├── frontend/
   │ ├── components/
   │ ├── pages/
   │ ├── assets/
   │ └── App.jsx
   │
   └── README.md

6. ⚡ VS Code Must-Have Extensions
   Extension
   Purpose
   ESLint
   Code formatting
   Prettier
   Auto-formatting
   REST Client
   Test APIs
   GitLens
   Git history
   Tailwind IntelliSense
   Autocomplete for Tailwind
   Live Server
   Auto-reload frontend (for HTML/CSS)

7. 🌐 Git and GitHub Basics
   bash
   CopyEdit
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/repo-name.git
   git push -u origin main

🔁 Your Task:
✅ Install all tools

✅ Create GitHub account

✅ Setup folder structure

✅ Initialize a Git repo

✅ Commit and push to GitHub

✅ Chapter 2: Understanding Servers and Databases

🎯 Goal of This Chapter:
To help you understand how servers and databases work, how they talk to each other, and why they are the foundation of every backend system.

🔧 What You’ll Learn:
What is a server?

What is a database?

Types of databases: SQL vs NoSQL

How servers and databases interact

Real-life analogy

Client-Server-Database architecture

API overview

Hosting servers and databases

Learning mindset & roadmap

1. 🌐 What is a Server?
   A server is a computer or software that receives requests (usually from browsers or apps) and sends back responses.
   📦 It stores, processes, and delivers data.
   📬 Example: When you open Instagram, their server sends back your feed, profile, images, etc.
   A server usually:
   Listens for incoming HTTP requests (GET, POST, PUT, DELETE)

Processes logic or calculations

Interacts with the database

Sends back a result (HTML, JSON, error, etc.)

2. 💾 What is a Database?
   A database is where your data is stored, retrieved, and managed.
   🧠 Think of it like a digital memory.
   Examples:
   User accounts

Posts, messages, likes, comments

Product data for eCommerce

3. ⚖️ SQL vs NoSQL
   Feature
   SQL (Relational DB)
   NoSQL (Non-Relational DB)
   Structure
   Tables, rows, schemas
   JSON, collections, documents
   Example DB
   MySQL, PostgreSQL
   MongoDB, Firebase, CouchDB
   Data relations
   Strong relations (JOINs)
   Loose or embedded relations
   Scalability
   Vertical (scale up)
   Horizontal (scale out easily)
   Flexibility
   Rigid schema
   Dynamic, flexible schema

💡 In this course, we’ll use MongoDB (a NoSQL database).

4. 🔗 Server + Database: How They Work Together
   Imagine:
   You (user) send a request to the server: "Get my profile"

The server contacts the database: "Give me user with ID 123"

Database returns the data

Server sends that data back to you

This is called the request-response cycle.

5.  📦 Real-Life Analogy
    Imagine a waiter (server) taking your order from the customer (client) and going to the kitchen (database) to bring your food (data).

6.  🏗 Architecture Diagram
    plaintext
    CopyEdit
    Client (browser/mobile)
    ↓ HTTP Request

    ***

         ↓

    Backend Server (Node.js, Express)
    ↓
    Database (MongoDB)
    ↑
    Response back to Server
    ↑
    Response back to Client

7.  🌍 What is an API?
    An API (Application Programming Interface) allows two systems (like client & server) to talk.
    Example API Call:
    http
    CopyEdit
    GET /api/users/123

Response:
json
CopyEdit
{
"name": "Priyanshu",
"email": "priyanshu@example.com"
}

8. 🏡 Where are Servers and Databases Hosted?
   You’ll learn to host on:
   Server: AWS EC2, Vercel, Render, Railway, etc.

Database: MongoDB Atlas (cloud), AWS RDS

9. 🧭 Learning Mindset
   Don’t memorize—understand flow.

Draw architecture diagrams while learning.

Always ask: “Where is the data? Who is sending it?”

✅ Your Practice Task
Task
Description
🛠 Draw Architecture
Create a flow chart (client → server → DB)
⚙️ Setup MongoDB Atlas
Create a free cluster
💡 Explain in your words
Record a 2-minute explanation of “how server talks to DB”
🧪 Try a Fake API
Use JSONPlaceholder to simulate API calls using Postman or fetch in browser

✅ Chapter 3: Understanding MongoDB

🎯 Goal of This Chapter:
To help you understand what MongoDB is, how it stores data, and why it's widely used in modern backend development — especially in full-stack apps.

🧠 What You’ll Learn:
What is MongoDB?

Key MongoDB concepts (Database → Collection → Document)

JSON vs BSON

MongoDB vs SQL

MongoDB real-world analogy

How MongoDB stores data

MongoDB Compass (GUI)

MongoDB Atlas (Cloud DB)

Basic CRUD preview

1. 🍃 What is MongoDB?
   MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
   It’s great for fast development, unstructured or semi-structured data, and scaling apps.

2. 🧱 MongoDB Concepts
   kotlin
   CopyEdit
   MongoDB Structure:
   Database
   └── Collection
   └── Document (actual data)

🔹 Database:
Like a container (e.g., filemoon, socialapp)
🔹 Collection:
Like a table in SQL (e.g., users, files, messages)
🔹 Document:
Actual data stored as key-value pairs (like JSON)
json
CopyEdit
{
"\_id": "64f...",
"name": "Priyanshu",
"email": "priyanshu@gmail.com",
"isVerified": true
}

3. 🧾 JSON vs BSON
   MongoDB stores data as BSON (Binary JSON), an optimized format for storage and speed.

But you read/write it like JSON.

4. ⚖️ MongoDB vs SQL (Quick View)
   Feature
   MongoDB
   SQL (MySQL/PostgreSQL)
   Data Format
   JSON-like (document)
   Tables with rows and columns
   Schema
   Flexible
   Strict, predefined schema
   Relations
   Embedded or Manual Reference
   JOINs
   Scaling
   Horizontal (easy)
   Vertical (harder)
   Speed (dev)
   Fast for prototyping
   Slower to setup for dev

5. 📦 Real-Life Analogy
   Think of MongoDB as a Google Sheet:
   The sheet name = Database

Each tab = Collection

Each row in tab = Document (user, post, file, etc.)

But MongoDB lets each row have different columns if needed!

6. 🧠 How MongoDB Stores Data
   Example of multiple documents in the same collection:
   json
   CopyEdit
   // In "users" collection
   {
   "name": "Priyanshu",
   "role": "admin",
   "age": 22
   }

{
"name": "Ravi",
"skills": ["Node", "React"]
}

Notice: different fields allowed!

7. 🧭 MongoDB Compass GUI
   MongoDB Compass is a desktop GUI that lets you:
   View collections and documents

Run queries visually

See schema suggestions

Edit documents manually

You can connect Compass using the Atlas URI.

8. 🌐 MongoDB Atlas (Cloud)
   Go to: https://www.mongodb.com/cloud/atlas
   Create:
   Free account

Cluster

Database user

Whitelist IP (0.0.0.0/0)

Connect via URI

Sample URI (replace password/dbname):
php-template
CopyEdit
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority

9. 🔁 MongoDB Basic CRUD Preview
   Operation
   Method
   Description
   Create
   insertOne()
   Add one document
   Read
   find()
   Fetch all/matched documents
   Update
   updateOne()
   Update one document
   Delete
   deleteOne()
   Remove one document

🧪 Practice Task
✅ Create a MongoDB Atlas account

✅ Create a DB called workshopDB

✅ Create a users collection

✅ Insert a document:

json
CopyEdit
{
"name": "Priyanshu",
"email": "priyanshu@gmail.com",
"age": 22
}

✅ View it using Compass

📝 Quiz (self-check)
What is a document in MongoDB?

How is it different from a SQL row?

What’s the structure of MongoDB’s data model?

Can two documents in MongoDB have different fields?

What is BSON?
