import React, { useState, useEffect } from 'react';


const Compra = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoGuardado);

       
        const totalInicial = carritoGuardado.reduce(
            (acc, producto) => acc + producto.precio * producto.cantidad,
            0
        );
        setTotal(totalInicial);
    }, []);

    const incrementarCantidad = (id) => {
        const nuevoCarrito = carrito.map((producto) => {
            if (producto.id === id) {
                return { ...producto, cantidad: producto.cantidad + 1 };
            }
            return producto;
        });
        actualizarCarrito(nuevoCarrito);
    };

    const decrementarCantidad = (id) => {
        const nuevoCarrito = carrito.map((producto) => {
            if (producto.id === id && producto.cantidad > 1) {
                return { ...producto, cantidad: producto.cantidad - 1 };
            }
            return producto;
        });
        actualizarCarrito(nuevoCarrito);
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
        actualizarCarrito(nuevoCarrito);
    };

    const actualizarCarrito = (nuevoCarrito) => {
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        const nuevoTotal = nuevoCarrito.reduce(
            (acc, producto) => acc + producto.precio * producto.cantidad,
            0
        );
        setTotal(nuevoTotal);
    };

    return (
        <div className="container mt-5">
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>Tu carrito está vacío. ¡Agrega algunos productos!</p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Imagen</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((producto) => (
                                <tr key={producto.id}>
                                    <td>{producto.name}</td>
                                    <td><img src={producto.imagen} alt={producto.name} width="50" /></td>
                                    <td>${producto.precio.toLocaleString()}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-secondary me-2"
                                            onClick={() => decrementarCantidad(producto.id)}
                                        >
                                            -
                                        </button>
                                        {producto.cantidad}
                                        <button
                                            className="btn btn-sm btn-secondary ms-2"
                                            onClick={() => incrementarCantidad(producto.id)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>${(producto.precio * producto.cantidad).toLocaleString()}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => eliminarProducto(producto.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total: ${total.toLocaleString()}</h3>
                    <button className="btn btn-success">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
};

export default Compra;
