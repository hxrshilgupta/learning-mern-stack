import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try{
    //fetch all notes from the database
    const notes = await Note.find(); //to get all notes
    //Standard Mongoose query function
    res.status(200).json(notes);
  }
  catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({message: "Internal Server Error"});
  }
};

export function createNotes(req, res) {
  res.status(201).json({ message: "Note Created Successfully" });
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "Note Updated Successfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Note Deleted Successfully" });
}