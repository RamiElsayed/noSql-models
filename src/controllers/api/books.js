 const { Book } = require("../../models/Book")
 const getAllBooks = (req, res) => {
    try {
        const data = await Book.find({});
        return res.status(200).json(data);
      } catch (error) {
        console.log(`[ERROR]: Failed to get all books | ${error.message}`);
        return res.status(500).json({ error: "Failed to get all books" });
      }
 }
 const getOneBook = (req, res) => {
    try {
    const { id } = req.params;
      const data = await Book.findById(id);
      return res.status(200).json(data);
    } catch (error) {
      console.log(`[ERROR]: Failed to get book | ${error.message}`);
      return res.status(500).json({ error: "Failed to get book" });
    }
 }


module.exports = { getAllBooks, getOneBook}