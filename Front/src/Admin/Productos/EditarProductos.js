import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditarProductos = () => {
    const [formData, setFormData] = useState({
        name: '',
        descripcion: '',
        stock: '',
        precio: '',
        categoriaId: '',
        proveedorId: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.descripcion || !formData.stock || !formData.precio || !formData.categoriaId || !formData.proveedorId) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        axios.put(`http://localhost:8080/api/v1/productos/productos/${id}`, formData)
            .then(response => {
                setSuccess('Producto actualizado con éxito!');
                setError('');
                setTimeout(() => {
                    navigate("/admin/productos");
                }, 2000);
            })
            .catch(error => {
                setError('Hubo un error al actualizar el producto. Intenta nuevamente.');
                setSuccess('');
            });
    };

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/v1/productos/productos/${id}`)
                .then(response => {
                    setFormData(response.data);
                })
                .catch(error => {
                    setError('No se pudo cargar el producto.');
                });
        }

        // Cargar categorías y proveedores
        axios.get('http://localhost:8080/api/v1/categorias/categorias')
            .then(response => {
                setCategorias(response.data);
            })
            .catch(() => {
                setError('Error al cargar las categorías.');
            });

        axios.get('http://localhost:8080/api/v1/proveedores/proveedores')
            .then(response => {
                setProveedores(response.data);
            })
            .catch(() => {
                setError('Error al cargar los proveedores.');
            });
    }, [id]);

    return (
        <div className="ds-container">
            {/* SIDEBAR */}
            <section id="sidebar">
                <a href="#" className="brand">
                    <i className='bx bxs-face-mask'></i>
                    <span className="text">CENTURY</span>
                </a>
                <ul className="side-menu top">
                    <li>
                        <a href="#">
                            <i className='bx bxs-dashboard'></i>
                            <span className="text">Inicio</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/admin/productos">
                            <i className='bx bxs-shopping-bag-alt'></i>
                            <span className="text">Productos</span>
                        </Link>
                    </li>
                </ul>
                <ul className="side-menu">
                    <li>
                        <a href="#">
                            <i className='bx bxs-cog'></i>
                            <span className="text">Configuración</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="logout" onClick={() => {}}>
                            <i className='bx bxs-log-out-circle'></i>
                            <span className="text">Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>
            </section>

            {/* CONTENT */}
            <section id="content">
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Editar Producto</h1>
                            <ul className="breadcrumb">
                                <li><a href="#">Administrador</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a href="#">Productos</a></li>
                                <li><i className='bx bx-chevron-right'></i></li>
                                <li><a className="active" href="#">Editar Producto</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="table-data">
                        <div className="container-productos">
                            <h1>Editar Producto</h1>

                            {/* Mensajes de éxito y error */}
                            {success && <div className="alert alert-success">{success}</div>}
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Formulario de edición */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imagen" className="form-label">Imagen</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="imagen"
                                        name="imagen"
                                        value={formData.imagen}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descripcion"
                                        name="descripcion"
                                        value={formData.descripcion}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="stock" className="form-label">Stock</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="stock"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="precio"
                                        name="precio"
                                        value={formData.precio}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoriaId" className="form-label">Categoría</label>
                                    <select
                                        className="form-control"
                                        id="categoriaId"
                                        name="categoriaId"
                                        value={formData.categoriaId}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecciona una categoría</option>
                                        {categorias.map(categoria => (
                                            <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="proveedorId" className="form-label">Proveedor</label>
                                    <select
                                        className="form-control"
                                        id="proveedorId"
                                        name="proveedorId"
                                        value={formData.proveedorId}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecciona un proveedor</option>
                                        {proveedores.map(proveedor => (
                                            <option key={proveedor.id} value={proveedor.id}>{proveedor.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Actualizar</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default EditarProductos;
