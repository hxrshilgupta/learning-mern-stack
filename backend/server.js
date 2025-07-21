import express from "express";
// const express = require("express");

const app = express()

//built first dummy api ⤵️
app.get("/api/notes", (req, res) => {
    // send the notes
    res.status(200).send("you got 5 notes");
})

app.listen(5001, () => {
  console.log("Server is running on port 5001")
});