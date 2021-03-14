import React from "react";
import "./style.css";
import Button from '../Button';

// BookList renders a materialize list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a materialize list item containing data from the Google Books api call
export function BookListItem({ id, title, subtitle, authors, image, link, description, savedPage }) {
    return (
        <li className="list-group-item blue-grey lighten-2" id={id}>
            <div className="row">
                <div className="col s12 m7" id="titleDiv">
                    <h4 className="white-text">{title}</h4>
                    <h6 className="brown-text">{subtitle}</h6>
                    <p className="lime-text">{authors}</p>
                </div>
                <div className="col s12 m5" id="buttonsDiv">
                    <a className="btn lime darken-2"
                        rel="noreferrer noopener"
                        target="_blank"
                        href={link}
                    >
                        View
                        </a>
                    {savedPage ? (
                        <Button id={id} savedPage={savedPage} />
                    ) : (
                        <Button id={id} title={title} subtitle={subtitle} authors={authors} image={image} link={link} description={description} savedPage={savedPage}/>)}
                </div>
            </div>
            <div className="row">
                <div className="col s12 m5 l3">
                    <img src={image} alt="Book cover" />
                </div>
                <div className="col s12 m7 l9">
                    <p>{description}</p>
                </div>
            </div>
        </li>
    );
}
