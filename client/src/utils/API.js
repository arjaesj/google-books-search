import axios from "axios";
require("dotenv").config();
const API_KEY ="AIzaSyAbW273EZBnyoZtyq-KH7PkTUAx816FOak";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("bookData: ")
    console.log(bookData)
    return axios.post("/api/books", bookData);
  },
  searchBook: function(bookData){
    console.log(bookData)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookData}&key=${API_KEY}`);
  }
};
