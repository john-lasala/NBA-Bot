import "./Header.scss";
import React from 'react';
const Header = props => {
    return (
        <header>
            <nav>
                <div>
                    <a className="Logo" href="#">Welcome</a>
                    <a href="http://www.sherwin-williams.com">Store</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;