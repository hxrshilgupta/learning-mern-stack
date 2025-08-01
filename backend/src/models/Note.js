import mongoose from "mongoose";

//1 - create  a schema
// 2 - create a model based off that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //createdAt, updatedAt timestamps
);

const Note = mongoose.model("Note", noteSchema); //create a model named Note based on the noteSchema

export default Note;
// Export the Note model for use in other parts of the application