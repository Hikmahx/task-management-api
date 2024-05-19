# Task Management API

This is the Node.js Express backend documentation for a Task Management System. It provides various endpoints for user authentication, managing users, and managing tasks.

## Table of Contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
- [Models](#models)
  - [User](#user)
  - [Task](#task)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [API Summary](#api-summary)
- [Author](#author)

## Overview

### Introduction

The Task Management API allows users to register, authenticate, and manage tasks. It includes functionality for creating, updating, and deleting users and tasks.

### Features

Users should be able to:

- Register and authenticate with their email and password.
- Create, update, and delete their user profile.
- Create, update, and delete tasks.

## Installation

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Create a `config.env` file in a `config` directory and set the required environment variables (see below).
4. Start the server: `npm start` or `npm run server` for development.

## Environment Variables

Create a `config/config.env` file in the root directory and add the following environment variables:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

## Endpoints

### Users

| Endpoint        | Method | Description                     |
| --------------- | ------ | ------------------------------- |
| `/api/users`    | POST   | Register a new user             |
| `/api/auth`     | POST   | Authenticate user and get token |
| `/api/auth`     | GET    | Get logged-in user details      |
| `/api/auth/:id` | PUT    | Update user                     |
| `/api/auth/:id` | DELETE | Delete user                     |

### Tasks

| Endpoint         | Method | Description       |
| ---------------- | ------ | ----------------- |
| `/api/tasks`     | GET    | Get all tasks     |
| `/api/tasks`     | POST   | Create a new task |
| `/api/tasks/:id` | PUT    | Update a task     |
| `/api/tasks/:id` | DELETE | Delete a task     |

## Models

### User

```typescript
{
  firstname: String,
  lastname: String,
  email: String,
  password: String
}
```

### Task

```typescript
{
  user: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  dueDate: Date,
  status: String
}
```

## My Process

### Built With

- Node.js
- Express.js
- TypeScript
- MongoDB
- JSON Web Tokens (JWT)

### API Summary

#### User

- Users can register, authenticate, and manage their profile.
- Authentication uses JWT for secure access to protected routes.

#### Task

- Users can create, update, and delete tasks.
- Each task is associated with a user and has a title, description, due date, and status.

## Author

- Github - [Hikmah Yousuph](https://github.com/Hikmahx)
- Email - [hikmayousuph@gmail.com](hikmayousuph@gmail.com)
- LinkedIn - [Hikmah Yousuph](linkedin.com/in/hikmah-yousuph/)
