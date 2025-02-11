import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/productos';
const CATEGORIAS_URL = 'http://localhost:8080/api/v1/categorias';
const PROVEEDORES_URL = 'http://localhost:8080/api/v1/proveedores';

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
            alert('Producto creado exitosamente');
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
            alert('Hubo un error al crear el producto');
        }
    };

    return (
        <div>
            <h2>Crear Producto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="text"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <select
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
                <div>
                    <label>Proveedor:</label>
                    <select
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
                <div>
                    <button type="submit">Crear Producto</button>
                </div>
            </form>
        </div>
    );
};

export default CrearProducto;
