package com.BackEnd.Century.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BackEnd.Century.Model.Usuario;
import com.BackEnd.Century.Repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping("/usuarios")
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }

    @PostMapping("/usuarios")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
    
        String hashedPassword = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(hashedPassword);
        return usuarioRepository.save(usuario);
    }

    @GetMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> listarUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El Cliente con ese ID no existe : " + id));
        return ResponseEntity.ok(usuario);
    }

    @PutMapping("/usuarios/{id}")
    public ResponseEntity<Usuario> actualizarCliente(@PathVariable Long id, @RequestBody Usuario usuarioRequest) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El Cliente con ese ID no existe : " + id));

        usuario.setNombre(usuarioRequest.getNombre());
        usuario.setCorreo(usuarioRequest.getCorreo());

        
        String hashedPassword = passwordEncoder.encode(usuarioRequest.getPassword());
        usuario.setPassword(hashedPassword);

        Usuario usuarioActualizado = usuarioRepository.save(usuario);
        return ResponseEntity.ok(usuarioActualizado);
    }

    @DeleteMapping("/usuarios/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarUsuario(@PathVariable Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("El Cliente con ese ID no existe : " + id));
        usuarioRepository.delete(usuario);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUsuario(@RequestBody Usuario usuarioLogin) {
        String correo = usuarioLogin.getCorreo();
        String password = usuarioLogin.getPassword();

        Usuario usuario = usuarioRepository.findByCorreo(correo);

        if (usuario != null && passwordEncoder.matches(password, usuario.getPassword())) {
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
        }
    }
}
