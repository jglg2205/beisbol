import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Presentacion from './Presentacion';
import './Presentacion.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PaginaArticulo from './paginas/PaginaArticulo';
import PaginaInicio from './paginas/PaginaInicio';
import Articulo from './paginas/Articulo';
import ListaArticulos from './ListaArticulos';
import PaginaLigas from './paginas/PaginaLigas';
import PaginaBienvenida from './paginas/PaginaBienvenida';
import Contacto from './Contacto';
import PaginaEquipos from './PaginaEquipos';

function App() {
  return (
    <div className="container-fluid">
      <Router>
      <Menu  imagen="/img/beislogo.jpg"/>
      
      <hr></hr>
      <Routes>
          <Route  exact path='/articulo' element={<PaginaArticulo />}></Route>
          <Route exact path='/inicio' element={<PaginaInicio />}></Route>
          <Route exact path='/ligas' element={<PaginaLigas />}></Route>
          <Route exact path='/' element={<PaginaBienvenida />}></Route>
          <Route exact path='/equipos' element={<PaginaEquipos />}> </Route>
      </Routes>
      <hr></hr>
      <Contacto />
      </Router>

      
     
    </div>
  );
}

export default App;
