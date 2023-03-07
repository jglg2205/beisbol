import React from "react";
import Competencias from "./Competencias";

export default class ListaLigas extends React.Component{
    constructor(props){
        super(props);
    }



render() {
    return(
        <>
            
            {this.props.ligasPrincipales.map( (ligasPrincipales) => (<Competencias nombre={ligasPrincipales.nombre} img={ligasPrincipales.img} descripcion={ligasPrincipales.descripcion} />))}
        </>

        
    );
}
}