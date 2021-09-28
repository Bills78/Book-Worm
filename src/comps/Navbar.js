import React from "react";

function Nav() {
    return (
        <div className='navbar'>
            <div className='titles'>
                <h1>Book Worm</h1>
                <h3>The App to Help You Finish Books</h3>
            </div>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
            </div>
        </div>
    )
}

export default Nav;