import React from 'react';
import { BookList, BookListItem } from "../../BookList";
import "./style.css";


const Saved = () => {
    return (
        <main className="container">
            <p className="lime-text">Saved Books</p>
            <BookList>
                <BookListItem></BookListItem>
            </BookList>
        </main>
    )
}

export default Saved
