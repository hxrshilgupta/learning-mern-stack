import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  /*if any variable (here --> req) is not used, replace it with "_"
  export async function getAllNotes(_,res){}
  */
  try {
    //fetch all notes from the database
    //Standard Mongoose query function
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort thw notes in desc order of createdAt (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    // Find the note by ID
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteById controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    // Create a new note instance
    console.log(title, content);
    const note = new Note({ title, content });
    // Save the note to the database
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true, // to return the updated document
      }
    );
    if (!updatedNote) {
      // in case user doesn't provide a valid ID
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note Updated Successfully", updatedNote }); // Send the updated note back to the client
  } catch (error) {
    // Log the error for debugging
    console.error("Error in updateNotes controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNotes controller:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
