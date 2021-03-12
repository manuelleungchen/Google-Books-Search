import React from "react";
import "./style.css";

// BookList renders a materialize list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a materialize list item containing data from the Google Books api call
export function BookListItem(props) {
    return (
        <li className="list-group-item blue-grey lighten-2">
            <div className="row">
                <div className="col s12 m8" id="one">
                    <h4>The Hunger Games</h4>
                    <p>Suzanne Collins</p>
                </div>
                <div className="col s12 m4" id="two">
                    <a className="btn lime darken-2"
                        rel="noreferrer noopener"
                        target="_blank"
                        href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
                    >
                        View
                        </a>
                    <button className="btn lime darken-3">Save</button>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3" id="three">
                    <img src="http://img.recipepuppy.com/560556.jpg" />
                </div>
                <div className="col s12 m9" id="four">
                    <p>Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.</p>
                </div>
            </div>
        </li>

        
    );
}
