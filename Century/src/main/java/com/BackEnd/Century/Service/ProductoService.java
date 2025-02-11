package com.BackEnd.Century.Service;

import com.BackEnd.Century.Model.Productos;
import com.BackEnd.Century.Repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    // Crear producto
    public Productos crearProducto(Productos producto) {
        return productoRepository.save(producto);
    }

    // Obtener todos los productos
    public List<Productos> obtenerTodosLosProductos() {
        return productoRepository.findAll();
    }

    // Obtener producto por ID
    public Optional<Productos> obtenerProductoPorId(Long id) {
        return productoRepository.findById(id);
    }

    // Actualizar producto
    public Productos actualizarProducto(Long id, Productos producto) {
        if (productoRepository.existsById(id)) {
            producto.setId(id);
            return productoRepository.save(producto);
        }
        return null;
    }

    // Eliminar producto
    public boolean eliminarProducto(Long id) {
        if (productoRepository.existsById(id)) {
            productoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
