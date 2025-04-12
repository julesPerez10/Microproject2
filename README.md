# 🎬 Microproject2 - Movie API (MongoDB + Express + Node.js)

This is a simple backend microproject built using the **MEN stack** (MongoDB, Express, Node.js).

## 📂 Project Structure

MY-MICROPROJECT/
├── config/
│   └── db.js
├── controllers/
│   └── MovieController.js
├── models/
│   └── movieModel.js
├── routes/
│   └── MovieRoutes.js
├── .gitignore
├── .env (excluded)
├── package.json
├── server.js


## ✅ Features

- ✅ Connects to MongoDB Atlas using Mongoose
- ✅ REST API endpoint to **create movies** (POST)
- ✅ Data validation with Mongoose schema
- ✅ Organized using MVC structure

## 📮 Endpoint (POST)

POST http://localhost:3000/api/movies


### Sample JSON body:

```json
{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "genre": "Sci-Fi",
  "rating": 9
}

⚙️ Technologies
Node.js

Express

MongoDB Atlas

Mongoose

Postman (for testing)

🔐 Notes
.env contains the MongoDB connection string and is excluded from GitHub for security.

node_modules folder is also excluded.

👨‍💻 Created by
Julián Pérez and Carlos Bonilla
Georgian College - Computer Programming
2025