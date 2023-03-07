import React from "react";

export default class Competencias extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            visual: true
        }
        this.MostrarLigas=this.MostrarLigas.bind(this);
    }

    MostrarLigas(){
        this.setState(prevState =>({
            visual: !prevState.visual
        }))
    }
    

    render(){
        return(
           <>
           <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <h2 className="text-white mt-3">{this.props.nombre}</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                    <img src={this.props.img} alt ="imagen" width="250" />
                    </div>

                    <div className="col-3 d-flex align-items-center">
                    <button className="btn btn-primary" onClick={this.MostrarLigas}>Mostrar</button>
                    </div>
                    <div className={"col-6 d-flex align-items-center bg-dark text-white " +(this.state.visual ? "d-none":"")}>
                    <p>{this.props.descripcion}</p>
                    </div>
                </div>

           </div>
            
            
            
           </> 
        );
    }
}