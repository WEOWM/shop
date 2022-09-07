import React from 'react'
import './Nav.css'
import { NavLink,BrowserRouter,Route,Routes,Router} from 'react-router-dom'


const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container d-flex ">
                    <NavLink className="navbar-brand fw-bold fs-2" to="#">Let's Shop</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/abouts">Abouts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                           

                        </ul>
                        <div className="button">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-2"></i>Login</NavLink>

                            <NavLink to="/sing" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Resister</NavLink>

                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart (0)</NavLink>
                        </div>
                    </div>

                </div>

            </nav >


        </div >
    )
}

export default Nav
