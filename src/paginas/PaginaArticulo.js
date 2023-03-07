import React from "react";
import { Link } from "react-router-dom";
import ListaArticulos from "../ListaArticulos";
import Articulo from "./Articulo";

export default class PaginaArticulo extends React.Component{
    constructor(props){
        super(props);
    }

    articulosBeisbol = [
        {nombre:"Guante", descripcion:"Se usa para la defensa, todos los jugadores deben tener uno, sirve para proteger al jugador de lesiones al tratar de atrapar la pelota que pone en juego el equipo a la ofensiva", img:"/img/guante.jfif"},
        {nombre:"Mascota de Receptor", descripcion:"Es un guante mas con un recubrimiento mas fuerte especialmente utilizados por los receptores ya que estos se encargaran de recibir los lanzamientos del pitcher a toda potencia", img:"/img/receptor.jpg"},
        {nombre:"Bate", descripcion:"Se usa en la ofensiva, sirve para golpear la pelota que lanza el pitcher del equipo contrario, es esencial para poder jugar", img:"/img/bate.jpg"},
        {nombre:"Pelota", descripcion:"Una pelota de béisbol está formada por el centro o núcleo, con una pequeña pelota de goma con una circunferencia de 10 centímetros y medio y que tiene dentro una pequeña esfera de corcho.", img:"/img/pelota.jpg"},
        {nombre:"Casco", descripcion:"Se utiliza para proteger la cabeza del jugador que se encuentra en la caja de bateo", img:"/img/casco.jpg"},
        {nombre:"Careta", descripcion:"Se utiliza para proteger la cara del receptor", img:"/img/careta.jpg"},
        {nombre:"Botines", descripcion:"Zapatos deportivos con ganchos en su suela para adeherirse mejor al terreno de juego", img:"/img/zapatos.jpg" }
        ];

    render(){
        return(
            <>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-12 text-center mt-5">
                      <h1 className="text-white">ARTICULOS</h1>
                   </div>
                </div>
                <div className="row mt-3">
                    <div className="col-3">
                        <img src="/img/consejo.jpg" alt="imagen" width="250"/>
                    </div>
                    <div className="col-9 d-flex align-items-center">
                        <h3 className="text-dark">Que tal!, en esta seccion te estaré explicando cuales son los principales articulos o equipo necesario para que puedas jugar y disfrutar de las maravillas del beisbol</h3>
                    </div>
                </div>

                <hr/>
                <div className="row mt-3">
                    <div className="col-12">
                        <h2 className="text-white">EMPECEMOS NUESTRO RECORRIDO</h2>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 mt-3">
                        <ListaArticulos articulosBeisbol={this.articulosBeisbol} />
                    </div>
                </div>   

            </div>
            </>
            
        );
    }
}