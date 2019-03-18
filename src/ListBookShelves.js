import React , { Component } from "react";

class ListBookShelves extends  Component  {
    render(){
        return(
       <div className="list-books-content">
        <div>
           <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {this.props.children}
            </div>
           </div>
        </div>
       </div>
        )
    }
}

export default ListBookShelves;