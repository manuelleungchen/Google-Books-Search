import React from 'react';
import { BookList, BookListItem } from "../../BookList";
import "./style.css";

const Search = () => {
    return (
        <main className="container">
                <form>
                    <h3>Book Search</h3>
                    <div class="input-field">
                        <input id="search" type="text" placeholder="Author name"></input>
                        <button className="btn waves-effect waves-ligth">Search</button>
                    </div>
                </form>
                <p className="lime-text">Results</p>

                <BookList>
                    <BookListItem></BookListItem>
                </BookList>
        </main>
    )
}

export default Search
