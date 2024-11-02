import React from 'react';


const Inicio = () => {
    return (
        <>
            {/* Barra Navegación */}
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
                                    <a className="nav-link mx-lg-2" href="">Productos</a>
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
                    <a href="" className="boton-login">Nombre Usuario</a>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

            {/* Sección principal */}
            <section className="main">
                <div className="container d-flex align-items-center justify-content-center fs-1 text-white flex-column">
                    <h1>Tienda Hardware</h1>
                    <h2>Bogota , Colombia</h2>
                </div>
            </section>

            {/* Productos */}
            <section className="sec2">
                <p className="h3 titprodu text-center">Productos Recomendados 🔥</p>
                <div className="container grid">
                    <div className="row">
                        {/* Producto 1 */}
                        <div className="col-md">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="card shadow">
                                        <img src="img/productos/audifonos.png" width="289px" height="311px" alt="" />
                                        <div className="card-footer border-top border-gray-300 p-4">
                                            <a href="#" className="h5">Logitech G435</a>
                                            <h3 className="h6 fw-light text-gray mt-2">
                                                Auriculares con cable para videojuegos, micrófono abatible, conector de audio de 3.5 mm, para PC, Playstation, Xbox
                                            </h3>
                                            <div className="d-flex mt-3">
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning"></span>
                                                <span className="badge ms-2">4.5</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <span className="h5 mb-0 text-gray">$382.000</span>
                                                <a className="btn btn-xs btn-tertiary add" href="infoproduct.html">
                                                    <span className="fas fa-cart-plus me-2"></span> Agregar al Carrito
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 2 */}
                        <div className="col-md">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="card shadow">
                                        <img src="img/productos/logitech733.png" width="289px" height="311px" alt="" />
                                        <div className="card-footer border-top border-gray-300 p-4">
                                            <a href="#" className="h5">Logitech 733</a>
                                            <h3 className="h6 fw-light text-gray mt-2">
                                                Auriculares inalámbricos G733 Lightspeed para juegos, con diadema de suspensión, Lightsync RGB
                                            </h3>
                                            <div className="d-flex mt-3">
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning"></span>
                                                <span className="badge ms-2">4</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <span className="h5 mb-0 text-gray">$502.000</span>
                                                <a className="btn btn-xs btn-tertiary add" href="infoproduct.html">
                                                    <span className="fas fa-cart-plus me-2"></span> Agregar al Carrito
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Producto 3 */}
                        <div className="col-md">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="card shadow">
                                        <img src="img/productos/grafi.png" width="289px" height="311px" alt="" />
                                        <div className="card-footer border-top border-gray-300 p-4">
                                            <a href="#" className="h5">RTX 3050</a>
                                            <h3 className="h6 fw-light text-gray mt-2">GIGABYTE Tarjeta gráfica Eagle OC 6G, 2 ventiladores WINDFORCE, 6 GB GDDR6 96 bits GDDR6</h3>
                                            <div className="d-flex mt-3">
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning me-1"></span>
                                                <span className="star fas fa-star text-warning"></span>
                                                <span className="badge ms-2">5</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <span className="h5 mb-0 text-gray">$1.000.000</span>
                                                <a className="btn btn-xs btn-tertiary add" href="infoproduct.html">
                                                    <span className="fas fa-cart-plus me-2"></span> Agregar al Carrito
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marcas */}
            <h4 className="text-center mt-5 mb-0 marca" id="slider"> Marcas</h4>
            <section className="sec3 mt-5 d-flex justify-content-between">
                <div className="row row-cols-1 row-cols-md-3 g-4 a">
                    <div className="col">
                        <div className="card carta">
                            <img src="img/marcas/NVIDIA.jpg" className="card-img-top" alt="Nvidia" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card carta">
                            <img src="img/marcas/amd.jpg" className="card-img-top" alt="AMD" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="card carta">
                            <img src="img/marcas/logi.jpg" className="card-img-top" alt="Logitech" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="container-fluid mt-5">
                <div className="row p-4">
                    <div className="col-md-4 text-center">
                        <a href="https://www.facebook.com"><i className="fa-brands fa-facebook fa-2xl"></i></a>
                        <a href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                        <a href="https://www.whatsapp.com"><i className="fa-brands fa-whatsapp fa-2xl"></i></a>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Centro Tecnológico de Bogotá</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6>&copy; Copyright - CenturyTech.com - Bogotá, Colombia</h6>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Inicio;
