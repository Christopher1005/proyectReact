package com.BackEnd.Century.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BackEnd.Century.Repository.CategoriaRepository;
import com.BackEnd.Century.Model.Categoria;


@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public List<Categoria> listaCategoria(){

        return categoriaRepository.findAll();

    }

    public Optional<Categoria> obtenerCategoriaId(Long categoriaId){

        return categoriaRepository.findById(categoriaId);

    }

    public Categoria crearCategoria(Categoria categoria){

        return categoriaRepository.save(categoria);

    }

    public Categoria updateCategoria(Long categoriaId, Categoria categoriaRequest){

        Categoria categoria = categoriaRepository.findById(categoriaId)
        .orElseThrow(() -> new RuntimeException("La categoría con ese ID no existe : " + categoriaId));

        categoria.setName(categoriaRequest.getName());

        return categoriaRepository.save(categoria);

    }

    public void deleteCategoria(Long categoriaId){
        
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new RuntimeException("La categoría con ese ID no existe : " + categoriaId));

        categoriaRepository.delete(categoria);

    }

    
}
