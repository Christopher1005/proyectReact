import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './css/productos.css';

const ProductosUser = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [carrito, setCarrito] = useState([]); 
    const nombreUsuario = localStorage.getItem("nombreUsuario");

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/productos')
            .then((response) => {
                setProductos(response.data);
            })
            .catch(() => {
                setError('Error al cargar los productos o no hay productos registrados.');
            });
    }, []);

    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const productoExistente = prevCarrito.find((item) => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    const navegarAlCarrito = () => {
        localStorage.setItem('carrito', JSON.stringify(carrito)); 
        window.location.href = '/compra'; 
    };

    return (
        <div>
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
                                    <a className="nav-link " aria-current="page" href="">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active mx-lg-2" href="/usuario/productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="/usuario/inicio">Marcas</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link mx-lg-2"
                                        href="/usuario/compra"
                                        onClick={navegarAlCarrito}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <span className="badge bg-danger">{carrito.reduce((total, item) => total + item.cantidad, 0)}</span>
                                    </a>
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

            <h2 className="mt-5">Productos Disponibles</h2>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="container mt-5">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-4" key={producto.id}>
                            <div className="card shadow">
                                {/* Imagen del producto */}
                                <img
                                    src={producto.imagen}
                                    className="card-img-top"
                                    alt={producto.name}
                                    width="289px"
                                    height="311px"
                                />
                                <div className="card-footer border-top border-gray-300 p-4">
                                    {/* Nombre del producto */}
                                    <a href="#" className="h5">{producto.name}</a>
                                    {/* Descripción del producto */}
                                    <h3 className="h6 fw-light text-gray mt-2">
                                        {producto.descripcion}
                                    </h3>
                                    {/* Valoración del producto */}
                                    <div className="d-flex mt-3">
                                        <span className="star fas fa-star text-warning me-1"></span>
                                        <span className="star fas fa-star text-warning me-1"></span>
                                        <span className="star fas fa-star text-warning me-1"></span>
                                        <span className="star fas fa-star text-warning me-1"></span>
                                        <span className="star fas fa-star text-warning"></span>
                                        <span className="badge ms-2">4.5</span>
                                    </div>
                                    {/* Precio del producto */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="h5 mb-0 text-gray">
                                            ${producto.precio.toLocaleString()}
                                        </span>
                                        {/* Botón agregar al carrito */}
                                        <button
                                            className="btn btn-xs btn-tertiary add"
                                            onClick={() => agregarAlCarrito(producto)}
                                        >
                                            <span className="fas fa-cart-plus me-2"></span> Agregar al Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductosUser;
