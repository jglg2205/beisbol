import React from "react";
import Articulo from "./paginas/Articulo";

export default class ListaArticulos extends React.Component{
    constructor(props){
        super(props);
    }

   
    render(){
        return(
            <>
                
                {this.props.articulosBeisbol.map( (articulosBeisbol) => (<Articulo nombre={articulosBeisbol.nombre} img={articulosBeisbol.img} descripcion={articulosBeisbol.descripcion} />))}
            </>

            
        );
    }
}