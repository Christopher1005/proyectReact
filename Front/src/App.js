import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registro from "./User/Registro";
import Inicio from "./User/Inicio";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Registro/>}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/inicio" element={<Inicio />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
