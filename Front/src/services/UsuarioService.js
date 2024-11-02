import axios from "axios";

const USUARIO_BASE_REST_API_URL = "http://localhost:8080/api/v1/usuarios";

const USUARIO_BASE_REST_API_URL_LOGIN = "http://localhost:8080/api/v1/login";

class UsuarioService{
    
    getAllUsuarios(){
        return axios.get(USUARIO_BASE_REST_API_URL);
    }

    saveUsuario(usuario){
        return axios.post(USUARIO_BASE_REST_API_URL,usuario);
    }

    loginUsuario(usuarioLogin) {
        return axios.post(USUARIO_BASE_REST_API_URL_LOGIN, usuarioLogin);
    }
}

export default new UsuarioService();