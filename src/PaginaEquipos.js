import React from "react";

export default class PaginaEquipos extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
                <div className="container">

                    <div className="row">
                        <div className="col-12 mt-5">
                            <h1 className="text-white">Estos son algunos de los equipos mas importantes a nivel profesional:</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 mt-3">
                          <h3>New York Yankees</h3>
                          <img src="/img/yankees.png" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Boston RedSox</h3>
                          <img src="/img/boston.jfif" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Los Angeles Dodgers</h3>
                          <img src="/img/la.png" alt="imagen"/>
                        </div>
                      
                    </div>

                    <div className="row">
                        <div className="col-4 mt-3">
                          <h3>Saitama Lions</h3>
                          <img src="/img/saitama.jpg" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Chiba Mariners </h3>
                          <img src="/img/chiba.jfif" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Tokyo Swallows</h3>
                          <img src="/img/tokyo.jfif" alt="imagen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 mt-3">
                          <h3>Tigres del Licey</h3>
                          <img src="/img/licey.jpeg" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Aguilas del Cibao</h3>
                          <img src="/img/aguilas.jfif" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Leones del Escogido</h3>
                          <img src="/img/escogido.jfif" alt="imagen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 mt-3">
                          <h3>Leones del Caracas</h3>
                          <img src="/img/caracas.jfif" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Navegantes del Magallanes</h3>
                          <img src="/img/magallanes.jfif" alt="imagen"/>
                        </div>
                        <div className="col-4 mt-3">
                          <h3>Tigres de Aragua</h3>
                          <img src="/img/tigres.jfif" alt="imagen"/>
                        </div>
                      
                    </div>
                </div>            
            </>
        );
    }
}