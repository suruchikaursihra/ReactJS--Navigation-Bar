import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={"/home"} activeStyle={{ color: "red" }}>home</Link>
                            </li>
                            <li>
                                <Link to={"/login"}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;