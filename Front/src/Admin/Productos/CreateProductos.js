import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const API_URL = 'http://localhost:8080/api/v1/productos/productos';
const CATEGORIAS_URL = 'http://localhost:8080/api/v1/categorias/categorias';
const PROVEEDORES_URL = 'http://localhost:8080/api/v1/proveedores/proveedores';

const CrearProducto = () => {
    const [name, setName] = useState('');
    const [imagen, setImagen] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stock, setStock] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [proveedorId, setProveedorId] = useState('');

    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        axios.get(CATEGORIAS_URL)
            .then(response => {
                setCategorias(response.data);
            })
            .catch(error => {
                console.error('Error al cargar las categorías:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(PROVEEDORES_URL)
            .then(response => {
                setProveedores(response.data); 
            })
            .catch(error => {
                console.error('Error al cargar los proveedores:', error);
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !imagen || !descripcion || !stock || !precio || !categoriaId || !proveedorId) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        const producto = {
            name,
            imagen,
            descripcion,
            stock: parseInt(stock),
            precio: parseFloat(precio),
            categoria: { categoriaId },
            proveedores: { proveedorId },
        };

        try {
            const response = await axios.post(API_URL, producto);
            setSuccess('Producto creado exitosamente');
            setError('');
            console.log('Producto creado:', response.data);

            setName('');
            setImagen('');
            setDescripcion('');
            setStock('');
            setPrecio('');
            setCategoriaId('');
            setProveedorId('');
        } catch (error) {
            console.error('Error creando producto:', error);
            setError('Hubo un error al crear el producto');
            setSuccess('');
        }
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
          <li >
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

            <section id="content">
                {/* NAVBAR */}
                <nav>
                    <i className='bx bx-menu'></i>
                    <form action="#">
                        <div className="form-input">
                            <input type="search" placeholder="Buscar..." />
                            <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                        </div>
                    </form>
                </nav>

                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Crear Producto</h1>
                            <ul className="breadcrumb">
                                <li><a href="#">Administrador</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a href="#">Productos</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a className="active" href="#">Crear Producto</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="container-proveedores">
                            <h1>Registrar Nuevo Producto</h1>

                            {/* Avisos */}
                            {success && <div className="alert alert-success">{success}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Formulario */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Imagen</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="imagen"
                                        value={imagen}
                                        onChange={(e) => setImagen(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descripcion"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label">Stock</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="stock"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="form-control"
                                        id="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoriaId" className="form-label">Categoría</label>
                                    <select
                                        className="form-control"
                                        value={categoriaId}
                                        onChange={(e) => setCategoriaId(e.target.value)}
                                        required
                                    >
                                        <option value="">Selecciona una categoría</option>
                                        {categorias.map((categoria) => (
                                            <option key={categoria.categoriaId} value={categoria.categoriaId}>
                                                {categoria.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="proveedorId" className="form-label">Proveedor</label>
                                    <select
                                        className="form-control"
                                        value={proveedorId}
                                        onChange={(e) => setProveedorId(e.target.value)}
                                        required
                                    >
                                        <option value="">Selecciona un proveedor</option>
                                        {proveedores.map((proveedor) => (
                                            <option key={proveedor.proveedorId} value={proveedor.proveedorId}>
                                                {proveedor.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Crear Producto</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default CrearProducto;
