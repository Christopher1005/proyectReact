import React, { useEffect, useState } from 'react';
import '../index.css'; 
import '../App.css';

function Iniciosesion() {


    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

        return () => {
            signUpButton.removeEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            signInButton.removeEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        };
    }, []); 

    const validateSignUp = () => {
        let tempErrors = {};
        if (!signUpData.name) tempErrors.name = "El nombre es obligatorio.";
        if (!signUpData.email) {
            tempErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
            tempErrors.email = "El correo electrónico no es válido.";
        }
        if (!signUpData.password) {
            tempErrors.password = "La contraseña es obligatoria.";
        } else if (signUpData.password.length < 6) {
            tempErrors.password = "La contraseña debe tener al menos 6 caracteres.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const validateSignIn = () => {
        let tempErrors = {};
        if (!signInData.email) {
            tempErrors.email = "El correo electrónico es obligatorio.";
        } else if (!/\S+@\S+\.\S+/.test(signInData.email)) {
            tempErrors.email = "El correo electrónico no es válido.";
        }
        if (!signInData.password) {
            tempErrors.password = "La contraseña es obligatoria.";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (validateSignUp()) {
            console.log("Registro exitoso", signUpData);
        }
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        if (validateSignIn()) {
            console.log("Inicio de sesión exitoso", signInData);
        }
    };

    return (
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleSignUpSubmit}>
                    <h1 className="titulologin">Crear Cuenta</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>Registrate Usando</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={signUpData.name}
                        onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={signUpData.email}
                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={signUpData.password}
                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <input type="submit" value="Registrarse" className="boton" />
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleSignInSubmit}>
                    <h1 className="titulologin">Iniciar Sesión</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>o Utiliza</span>
                    <input
                        type="email"
                        name="email"
                        id="email_login"
                        placeholder="Correo Electrónico"
                        value={signInData.email}
                        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input
                        type="password"
                        name="password"
                        id="password_login"
                        placeholder="Contraseña"
                        value={signInData.password}
                        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <a href="#">Recuperar Contraseña</a>
                    <input type="submit" value="Iniciar" className="boton" />
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="titulologin">Bienvenido!</h1>
                        <p>Regístrate para tener cuenta en Century y comprar los mejores componentes.</p>
                        <button className="ghost" id="signIn">Iniciar Sesión</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="titulologin">Hola, Amigo!</h1>
                        <p>Inicia sesión para ingresar a la mejor página de hardware de Colombia.</p>
                        <span className="nocuenta">O si no tienes cuenta, regístrate.</span>
                        <button className="ghost" id="signUp">Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iniciosesion;
