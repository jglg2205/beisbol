import React from "react";
import './Presentacion.css';
export default class Presentacion extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            nombre:"",
            mensaje:"",
            formulario:true
        }
        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this); 
        this.MostrarFormulario=this.MostrarFormulario.bind(this);
        this.cambio = this.cambio.bind(this);
    }

    submitted(event){
        alert("Se envio el formulario de " + this.state.nombre);
        alert(this.state.mensaje + " es el motivo de visitar esta pagina");
        event.preventDefault();
        
    }
    changed(event){
        this.setState({
            nombre: event.target.value
            
        })
    }

    cambio(event){
        this.setState({
            mensaje:event.target.value
        })
    }

    MostrarFormulario(){
        this.setState(prevState =>({
            formulario: !prevState.formulario
        }))
    }

    render(){
        return(
            <div className="container-fluid">
              <div className="row">
                  <div className="col-12 mt-3">
                    <h1 className="mt-5 text-white">¿Quieres saber mas acerca del beisbol?</h1>
                  </div>
               </div>

                 <div className="row">
                    <div className="col-3 mb-3">
                        <img src={this.props.imagen} alt="pelotin"/>
                    </div>
                    <div className="col-6 d-flex-align-items-center">
                        <h4>Mi nombre es <i className="text-white">"Pelotin"</i> y estaré acompañandote durante toda tu travesia para que aprendas lo maravilloso que es este deporte, desde como se juega, implementos deportivos necesarios, equipos mas reconocidos en las ligas mas importantes a nivel mundial, jugadores que han marcado historia hasta incluso series y peliculas famosas</h4>
                        
                    </div>
                    <div className="col-3 d-flex-align-items-center">
                       <button className="btn btn-primary mt-5" onClick={this.MostrarFormulario}>Empezar</button>
                    </div>

                </div> 

               <div className="row">
                    <div className="col-6">
                    <form onSubmit={this.submitted} className={"mt-3 " +(this.state.formulario ? "d-none":"")}>
                            <div className="form-group">
                                <label className="mt-3 bg-dark text-white">NOMBRE</label>
                                <input type="text" className="form-control mt-3" onChange={this.changed} />
                            </div>
                            
                               <div className="form-control mt-3">
                                 <label className="mt-3 bg-dark text-white">¿QUE TE MOTIVO A CONOCER EL BEISBOL?</label>
                                 <textarea className="form-control mt-3" onChange={this.cambio}></textarea> 
                              </div>
                              <button type="submit" className="btn btn-primary mt-3">ENVIAR</button>
                        </form>
                    </div>

                    <div className={"col-6" +(this.state.formulario ? "d-none":"")}>
                    <img src="/img/beislogo.jpg" alt="imagen"  className="ml-3 mt-3 ImgContenido" />
                    </div>
               </div>

                        
                    </div>
             
           
        );
    }
}