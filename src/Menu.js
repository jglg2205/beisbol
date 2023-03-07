import React from 'react';
import { Link } from "react-router-dom";
import PaginaArticulo from './paginas/PaginaArticulo';
import Presentacion from './Presentacion';

export default class Menu extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-12 d-flex text-align-center bg-dark fixed-top'>

                    <h4 className='mb-4 text-white'>Aire a Beisbol!</h4>
                    <Link to="/" className='mx-3 py-3'>BIENVENIDA</Link>
                    <Link to="/inicio" className='mx-3 py-3'>INICIO</Link>
                    <Link to="/articulo" className='mx-3 py-3'>ARTICULOS</Link>
                    <Link to="/ligas" className='mx-3 py-3'>LIGAS</Link>
                    <Link to="/equipos" className='mx-3 py-3'>EQUIPOS</Link>
                    
                 </div>
                 
                     
            </div>
            
        );
    }
}