import React from "react";
import Presentacion from "../Presentacion";

export default class PaginaBienvenida extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            nombre:"",
            mensaje:""
        }
    }

    render(){
        return(
            <>
                {<Presentacion imagen="/img/bienvenida.jpg" />}
            </>
        );
    }
}