package com.BackEnd.Century.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackEnd.Century.Service.CategoriaService;
import com.BackEnd.Century.Model.Categoria;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CategoriasController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public String listCategorias(Model model){

        List<Categoria> categoria = categoriaService.listaCategoria();
        model.addAttribute("categoria", categoria);
        return "categoria/index";

    }

    @GetMapping("/create")
    public String newCategoriaForm(Model model){

        
        model.addAttribute("categoria", new Categoria());
        return"categoria/create";
    }

    @PostMapping
    public String saveCategoria(@ModelAttribute("categoria") Categoria categoria){

        categoriaService.crearCategoria(categoria);
        return "redirect:/categoria";

    }

    @GetMapping("/edit/{id}")
    public String editCategoriaForm(@PathVariable("id") Long categoriaId, Model model){

        Categoria categoria = categoriaService.obtenerCategoriaId(categoriaId)
        .orElseThrow(() -> new IllegalArgumentException("Categoría invalida ID: " + categoriaId));
        model.addAttribute("categoria", categoria);
        return "categoria/edit";

    }

    @PostMapping("/edit/{id}")
    public String updateCategoria(@PathVariable("id") Long categoriaId, @ModelAttribute("categoria") Categoria categoria){

        categoria.setCategoriaId(categoriaId);
        categoriaService.updateCategoria(categoriaId, categoria);
        return "redirect:/categoria";
        
    }

    
}
