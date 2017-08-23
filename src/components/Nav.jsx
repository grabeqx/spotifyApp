import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const LeftNav = ({menuLinks}) => {
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                {menuLinks.map((link,id) => (
                    <li key={id} className="nav-item">
                        <a href="#" className="nav-link">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Nav = ({appName, menuLinks}) => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="#" className="navbar-brand">{appName}</a>
                <LeftNav menuLinks={menuLinks} />
            </nav>
        </div>
    )

}