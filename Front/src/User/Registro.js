import React, { useRef, useEffect, useState } from "react";
import UsuarioService from "../services/UsuarioService";
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  
  
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  const [correoLogin, setCorreoLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  
  const validacionRegistro = () => {
    let tempErrors = {};
    if (!nombre) tempErrors.nombre = "El nombre es obligatorio.";
    if (!correo) {
      tempErrors.correo = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      tempErrors.correo = "El correo electrónico no es válido.";
    }
    if (!password) {
      tempErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      tempErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  
  const validacionIniciosesion = () => {
    let tempErrors = {};
    if (!correoLogin) {
      tempErrors.correoLogin = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(correoLogin)) {
      tempErrors.correoLogin = "El correo electrónico no es válido.";
    }
    if (!passwordLogin) {
      tempErrors.passwordLogin = "La contraseña es obligatoria.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Registro
  
  const saveUsuario = (e) => {
    e.preventDefault();
    if (validacionRegistro()) {
      const usuario = { nombre, correo, password };
      UsuarioService.saveUsuario(usuario)
        .then((response) => {
          console.log(response.data);
          navigate("/registro");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Inicio sesion 

  const loginUsuario = (e) => {
    e.preventDefault();
    if (validacionIniciosesion()) {
      const usuarioLogin = { correo: correoLogin, password: passwordLogin };
      UsuarioService.loginUsuario(usuarioLogin)
        .then((response) => {
          console.log(response.data);
          navigate("/inicio");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Manejo Formularios

  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div className="container" id="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        <form onSubmit={saveUsuario}>
          <h1 className="titulologin">Crear Cuenta</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>Registrate Usando</span>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
          <input type="email" placeholder="Correo Electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          {errors.correo && <span className="error">{errors.correo}</span>}
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <span className="error">{errors.password}</span>}
          <input type="submit" value="Registrarse" className="boton" />
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={loginUsuario}>
          <h1 className="titulologin">Iniciar Sesión</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o Utiliza</span>
          <input type="email" placeholder="Correo Electrónico" value={correoLogin} onChange={(e) => setCorreoLogin(e.target.value)} />
          {errors.correoLogin && <span className="error">{errors.correoLogin}</span>}
          <input type="password" placeholder="Contraseña" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />
          {errors.passwordLogin && <span className="error">{errors.passwordLogin}</span>}
          <a href="#">Recuperar Contraseña</a>
          <input type="submit" value="Iniciar" className="boton" />
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="titulologin">Bienvenido!</h1>
            <p>Regístrate para tener cuenta en Century y comprar los mejores componentes.</p>
            <button className="ghost" id="signIn" ref={signInButtonRef}>Iniciar Sesión</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="titulologin">Hola, Amigo!</h1>
            <p>Inicia sesión para ingresar a la mejor página de hardware de Colombia.</p>
            <span className="nocuenta">O si no tienes cuenta, regístrate.</span>
            <button className="ghost" id="signUp" ref={signUpButtonRef}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
