import React from 'react';

const Header = () => {
  return (
    <div className="topnav">
        <a className="logo" href="/">Movie Maker</a>

        <div className="search-container">
            <form>
                <a href="/">Add Movie</a>
                <input type="text" placeholder="Search.." name="search"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    </div>
  );
}

export default Header;