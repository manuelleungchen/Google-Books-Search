import React, { useState } from 'react';
import { BookList, BookListItem } from "../../BookList";
import API from "../../../utils/API";
import "./style.css";
import notImage from "../../../images/na.jpg";

const Search = () => {

    const [books, setBooks] = useState([]);
    const [bookSearch, setBookSearch] = useState("");

    const [favoriteBooks, setFavoriteBooks] = useState([]);


    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setBookSearch(value);
    };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.searchBooks(bookSearch)
            .then(res => {
                setBooks(res.data.items)
            })
            .catch(err => console.log(err));

        API.getBooks()
            .then(res => {
                setFavoriteBooks(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <main className="container">
            <form>
                <h3>Book Search</h3>
                <div className="input-field">
                    <input id="search" name="bookSearch" value={bookSearch} onChange={handleInputChange} type="text" placeholder="Search by Title"></input>
                    <button className="btn waves-effect waves-ligth" onClick={handleFormSubmit}>Search</button>
                </div>
            </form>
            <p className="lime-text">Results</p>

            <BookList>
                {books.map(book => {
                    let thumbnail = "";
                    if (book.volumeInfo.imageLinks === undefined) {
                        thumbnail = notImage;
                    }
                    else {
                        thumbnail = book.volumeInfo.imageLinks.thumbnail;
                    }

                    return (
                        <BookListItem
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            subtitle={book.volumeInfo.subtitle}
                            authors={book.volumeInfo.authors}
                            image={thumbnail}
                            link={book.volumeInfo.infoLink}
                            description={book.volumeInfo.description}
                            savedPage={favoriteBooks.some(savedBook => savedBook.link === book.volumeInfo.infoLink)}
                            pageType="search"
                        ></BookListItem>)
                })}
            </BookList>
        </main>
    )
}

export default Search
