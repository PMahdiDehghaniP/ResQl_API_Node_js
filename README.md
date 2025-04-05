# GraphQL & REST API Project with Node.js

## Project Overview

This project is a **full-stack Node.js application** that integrates both **GraphQL** and **REST APIs** to provide a robust solution for managing user data. The main objective of this project is to demonstrate how to build APIs using both modern and traditional approaches, enabling flexibility and scalability for various types of client-side applications.

### Key Technologies:

- **Node.js** for server-side logic and API development.
- **GraphQL** to offer a flexible and efficient data query language.
- **MongoDB** as the NoSQL database to store user data.
- **Mongoose** for interacting with MongoDB and defining schemas.
- **Apollo Server** to manage GraphQL queries and mutations.
- **Express.js** for setting up RESTful routes and handling HTTP requests.

---

## Project Features

This project consists of two main API layers:

### 1. **GraphQL API**

- **Query Users**: Retrieve a list of users with basic details such as `id`, `name`, and `email`.
- **Create User**: Add a new user by providing necessary fields (`name`, `email`, `password`).
- **Get User by ID**: Query a specific user by their unique `id`.
- **Flexible Querying**: The GraphQL API allows clients to request exactly the fields they need, minimizing over-fetching of data.

### 2. **REST API** (Coming Soon)

- The REST API will complement the GraphQL API by providing traditional RESTful routes to interact with resources such as users.
- **CRUD Operations**: Users will be able to perform the typical create, read, update, and delete operations on users through RESTful endpoints like `GET /users`, `POST /users`, `PUT /users/:id`, and `DELETE /users/:id`.

---

## Why GraphQL & REST?

This project combines **GraphQL** and **REST** APIs, enabling developers to experience both approaches to API design:

- **GraphQL** is a modern query language that allows clients to request exactly the data they need and nothing more. It is ideal for applications where multiple types of data need to be fetched in a single request, and it can reduce the number of round trips between the client and server.
- **REST** is a traditional approach to API design where endpoints represent specific resources (e.g., `/users`) and standard HTTP methods (GET, POST, PUT, DELETE) are used to interact with these resources. This approach is simple and widely understood, making it suitable for applications with simpler requirements or when integrating with legacy systems.

---

## Setup & Installation

To get started with the project, follow these steps:

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or later) - Required to run the server.
- **MongoDB** (locally or using MongoDB Atlas) - NoSQL database for storing user data.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name
```
