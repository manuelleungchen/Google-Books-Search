import axios from "axios";

export default {
    // Search for books
    searchBooks: function (name) {
        const length = "10";
        const apiK = process.env.REACT_APP_API_KEY;
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&printType=books&maxResults=${length}&key=${apiK}`)
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
