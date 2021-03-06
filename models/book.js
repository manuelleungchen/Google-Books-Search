const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // Title of the book from the Google Books API
    title: { type: String, required: true },

    // Subtitle of the book from the Google Books API
    subtitle: { type: String, default: "" },

    // The books's author(s) as returned from the Google Books API
    authors: { type: Array, default: "" },

    // The book's description as returned from the Google Books API
    description: { type: String, default: "" },

    // The Book's thumbnail image as returned from the Google Books API
    image: { type: String, default: "" },

    // The Book's information link as returned from the Google Books API
    link: { type: String, default: "" },

    // The date the book was saved to MongoDB
    date: { type: Date, default: Date.now }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
