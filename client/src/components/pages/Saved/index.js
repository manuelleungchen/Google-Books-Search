import React, { useState, useEffect } from 'react';
import { BookList, BookListItem } from "../../BookList";
import "./style.css";
import API from "../../../utils/API";


const Saved = () => {

    const [favoriteBooks, setFavoriteBooks] = useState([]);

    useEffect(() => {
        API.getBooks()
            .then(res => {
                setFavoriteBooks(res.data);
            })
            .catch(err => console.log(err))
    })

    return (
        <main className="container">
            <p className="lime-text">Saved Books</p>
            {favoriteBooks.length ?
                (
                    <BookList>
                        {favoriteBooks.map(book => {
                            return (
                                <BookListItem
                                    key={book._id}
                                    id={book._id}
                                    title={book.title}
                                    subtitle={book.subtitle}
                                    authors={book.authors}
                                    image={book.image}
                                    link={book.link}
                                    description={book.description}
                                    savedPage={true}
                                    pageType="saved"
                                ></BookListItem>)
                        })}
                    </BookList>
                )
                : (<h3>No Books Saved</h3>)}
        </main>
    )
}

export default Saved;
