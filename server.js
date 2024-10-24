const jsonServer = require("json-server");
const path = require("path");
const express = require("express");

const server = express();
const router = jsonServer.router("db.json"); // Path to your JSON file
const middlewares = jsonServer.defaults();

// Serve static files from the React frontend build folder
server.use(express.static(path.join(__dirname, "frontend/build")));

// Route all API requests to json-server
server.use("/api", middlewares, router);

// Serve the frontend when a request doesn't match any API route
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Start the server on Heroku’s preferred port or port 5000 locally
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
