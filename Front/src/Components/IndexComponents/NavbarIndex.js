import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    const nombreUsuario = localStorage.getItem("nombreUsuario");
   

    return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto logoa" href="#"><img src="img/5.png" alt="" className="logopag" /></a>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="/usuario/productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="error404.html">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#slider">Marcas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="/compra"><i className="fa-solid fa-cart-shopping"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="" className="boton-login">{nombreUsuario}</a>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
    );
}

export default  Navbar;
