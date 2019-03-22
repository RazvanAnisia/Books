import React, { Component } from "react";

const BookControl = (props) => {
    let defaultValue
    if(props.shelfName === "Currently Reading"){
       defaultValue = "currentlyReading";
    }else if(props.shelfName === "Want to Read"){
        defaultValue = "wantToRead";
    }else{
        defaultValue = "read";
    }
    ;
    return(
        <select value={ defaultValue } onChange = {(e) => props.updateShelf(props.bookObj , e.target.value) }>
            <option value="move" disabled>Move to...</option>
            <option
             value="currentlyReading">Currently Reading</option>
            <option
             value="wantToRead">Want to Read</option>
            <option
            value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}

export default BookControl;