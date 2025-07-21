import express from "express";
// const express = require("express");

const app = express()

// What is a Route
// In Node.js, particularly when building web applications with frameworks like Express.js, routes define how an application responds to client requests for specific endpoints.
// What is an Endpoint?
// An endpoint is a combination of a URL + HTTP Method that lets the client interact with a specific resource or server
app.get("/api/notes", (req, res) => {
    // send the notes
    res.status(200).send("you got 40 notes");
})
// 👆 this is a route
app.listen(5001, () => {
  console.log("Server is running on port 5001")
});