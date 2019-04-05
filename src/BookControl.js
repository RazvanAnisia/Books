import React, { Component } from "react";

class BookControl  extends Component{
    render(){
    let defaultValue;
    if(this.props.bookObj.shelf === "read"){
       defaultValue = "read";
    }else if(this.props.bookObj.shelf === "wantToRead"){
        defaultValue = "wantToRead";
    }else if(this.props.bookObj.shelf === "currentlyReading"){
        defaultValue = "currentlyReading";
    }else {
        defaultValue = "none"
    }
    // console.log(this.props.bookObj)
    return(
        <select value={ defaultValue } onChange = {(e) => this.props.updateShelf(this.props.bookObj , e.target.value) }>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
 }
}
export default BookControl;
