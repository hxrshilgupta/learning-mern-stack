export function getAllNotes(req, res) {
  res.status(200).send("You just fetched the notes");
};
// export const getAllNotes = (req, res) => {
//   res.status(200).send("You just fetched the notes");
// };
// ----> OTHER WAY OF WRITING THE ABOVE FUNCTION

export function createNotes(req, res) {
  res.status(201).json({ message: "Note Created Successfully" });
}

export function updateNotes(req, res) {
  res.status(200).json({ message: "Note Updated Successfully" });
}

export function deleteNotes(req, res) {
  res.status(200).json({ message: "Note Deleted Successfully" });
}