import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

    const descargarPdf = () => {
      axios.get('http://localhost:8080/api/v1/productos/reporte', {
          responseType: 'blob', //archivo bin
      })
      .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'Productos.pdf');
          document.body.appendChild(link);
          link.click();
      })
      .catch((error) => {
          console.error('Error al descargar el PDF:', error);
      });
  };

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/productos/productos')
            .then(response => {
                setProductos(response.data);
            })
            .catch(() => {
                setError("Error al cargar los productos o no hay productos registrados.");
            });
    }, []);

    const eliminarProducto = (id) => {
        axios.delete(`http://localhost:8080/api/v1/productos/productos/${id}`)
            .then(() => {
                setProductos(prevProductos => prevProductos.filter(producto => producto.id !== id));
            })
            .catch(() => {
                setError("Error al eliminar el producto.");
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('correoLogin');
        alert("Cerrando sesión...");
      };

    return (
        <div className="ds-container">
            {/* SIDEBAR */}
            <section id="sidebar">
        <a href="#" className="brand">
          <i className='bx bxs-face-mask'></i>
          <span className="text">CENTURY</span>
        </a>
        <ul className="side-menu top">
          <li >
            <a href="/admin">
              <i className='bx bxs-dashboard'></i>
              <span className="text">Inicio</span>
            </a>
          </li>
          <li>
            <Link to="/admin/categorias">
              <i className='bx bxs-shopping-bag-alt'></i>
              <span className="text">Categorias</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/admin/productos">
              <i className='bx bxs-doughnut-chart'></i>
              <span className="text">Productos</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/proveedores">
              <i className='bx bxs-truck'></i>
              <span className="text">Proveedores</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/usuarios">
              <i class='bx bxs-user-pin' ></i>
              <span className="text">Usuarios</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/correos">
               <i class='bx bxs-envelope' ></i>
              <span className="text">Correos</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className='bx bxs-cog'></i>
              <span className="text">Configuracion</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout" onClick={handleLogout}>
              <i className='bx bxs-log-out-circle'></i>
              <span className="text">Cerrar Sesión</span>
            </a>
          </li>
        </ul>
      </section>

            {/* CONTENT */}
            <section id="content">
                {/* NAVBAR */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Búsqueda..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label htmlFor="switch-mode" className="switch-mode"></label>
                    <a href="#" className="notification">
                        <i className='bx bxs-bell'></i>
                    </a>
                    <a href="#" className="profile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0BdVNH3bs3y3lMxPhbZXMJBhn2Qj5JCHXA&s" alt="foto" />
                    </a>
                </nav>

                <main>
                  <div className="head-title">
                        <div className="left">
                            <h1>Productos</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="#">Administrador</a>
                                </li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li>
                                    <a className="active" href="#">Productos</a>
                                </li>
                            </ul>
                        </div>
                        <Link to="/admin/productos/crear" className="btn btn-primary mb-3">Agregar Productos</Link>
                    </div>

                     {/* Boton reporte*/}
                     <div>
                        <button onClick={descargarPdf} className="btn btn-secondary">Descargar Reporte PDF</button>
                    </div>
                
                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="table-data">
                        <table id="example" className="table table-striped text-center">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Imagen</th>
                                    <th>Stock</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map(producto => (
                                    <tr key={producto.id}>
                                        <td>{producto.id}</td>
                                        <td>{producto.name}</td>
                                        <td><img src={producto.imagen} alt={producto.name} width="50" /></td>
                                        <td>{producto.stock}</td>
                                        <td>{producto.precio}</td>
                                        <td>
                                            <Link to={`/admin/productos/${producto.id}`} className="btn btn-warning btn-sm">Editar</Link>
                                            <button onClick={() => eliminarProducto(producto.id)} className="btn btn-danger btn-sm">Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Productos;
