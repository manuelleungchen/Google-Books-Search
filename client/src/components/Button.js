import React from 'react';
import API from "../utils/API";

const Button = (props) => {

    const handleBookSave = (e) => {
        e.preventDefault();
        API.saveBook({
            title: props.title,
            subtitle: props.subtitle,
            authors: props.authors,
            image: props.image,
            link: props.link,
            description: props.description
        }).then(res => console.log("Book Saved"))
            .catch(err => console.log(err));
    }

    const handleBookDelete = (e) => {
        e.preventDefault();
        API.deleteBook(props.id).then(res => console.log("Book Removed"))
            .catch(err => console.log(err));
    }

    return (
        <>
            {props.savedPage ? (
                <button className="btn red" onClick={handleBookDelete} >Remove</button>
            ) : (
                <button className="btn lime darken-3" onClick={handleBookSave}>Save</button>
            )}</>
    )
}

export default Button;
