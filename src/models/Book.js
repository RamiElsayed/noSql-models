const { Schema, model } = require("mongoose");

const bookSchema = {
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}

const schema = new Schema(bookSchema);

const Book = model("Book", schema);

module.exports = Book;
