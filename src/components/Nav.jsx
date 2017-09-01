import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <Link to="/search" className="nav-link">Search</Link>
            </ul>
        </div>
    )
}

export const Nav = ({appName}) => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">{appName}</Link>
                <LeftNav />
            </nav>
        </div>
    )

}