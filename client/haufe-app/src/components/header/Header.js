import './Header.scss';
import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (

        <header className='main-header mb-sm-5 shadow-lg'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/home' title='Home section' className="navbar-brand"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            <li className="nav-item rounded">
                                <Link to='/user/list' title='Dummy data' className="nav-link"><i
                                    className="bi bi-people-fill me-2"></i>Users</Link>
                            </li>
                            <li className="nav-item rounded">
                                <Link to='/aggregation' title='Aggregation time' className="nav-link"><i
                                    className="bi bi-people-fill me-2"></i>Aggregation</Link>
                            </li>
                            <li className='nav-item rounded'>
                                <Link to='/login' title='Log out' className="nav-link"><i
                                    className="bi bi-people-fill me-2"></i>Log out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>

    );
}