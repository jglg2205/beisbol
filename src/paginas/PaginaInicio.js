import React from "react";



export default class PaginaInicio extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                  <div className="row">
                     <div className="col-12 mt-5 text-center">
                     <h1 className="text-white">INICIO</h1>
                      </div>
                   </div>

                   <div className="row">
                      <div className="col-12">
                         <h2 className="text-white">ORIGEN DEL BEISBOL</h2>
                      </div>
                    </div>

                   <div className="row">
                        <div className="col-12">
                            <p>Existen evidencias de que se han practicado juegos con un palo y una bola desde el inicio de la civilización. Existen creencias que aquel deporte tiene su origen en juegos populares ingleses a diferencia del pensar que este fue originado en Norte America. Antiguas culturas, practicaron estos juegos como forma de diversión y como parte de ciertas ceremonias. Juegos de este estilo se extendieron durante la Edad Media por toda Europa y se popularizaron en varias formas, pero no se sabe si en realidad en ese entonces ya se era conocido. Juegos similares fueron introducidos por europeos en sus colonias de América alrededor del siglo xvi. Es importante resaltar que el colonialismo británico tuvo un gran impacto en la difusión de dicho deporte.
                             A pesar de la versión popular del origen del béisbol creada por Doubleday, existen numerosas referencias a los términos baseball y “bat and ball” halladas en documentos a principios del siglo xvii.En realidad, el origen del béisbol debería ser definido como la evolución de dicho deporte, ya que, según lo que los historiadores del juego han venido encontrando, que el béisbol es una derivación del “Stool Ball” practicado en la Edad Media, y a su vez, el “Stool Ball” proviene de juegos rituales practicados en el mundo antiguo. La primera referencia al término “Base ball” se da en 1744, poco menos de cien años antes de que Abner Doubleday, supuestamente lo inventara en Cooperstown, Nueva York</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-4">
                            <h2 className="text-white">¿Mucha historia no?</h2>
                        </div>
                        <div className="col-3">
                           
                            <p>¡Si! a lo mejor te parecio un poco larga la historia, pero recuerda que siempre es bueno saber el inicio de todas las cosas. Ahora bien pasemos a la accion</p>
                        </div>
                        <div className="col-5">
                        <img src="/img/motivacion.jfif" alt="imagen" width="250" />
                        </div>
                    </div>


                    <div className="row mt-4">
                        <hr></hr>
                        <div className="col-4">
                            <ul>
                                <li className="text-white"><h3>¿En que consiste el Beisbol?</h3></li>
                                <li className="text-white"><h3>¿Cuantas Personas pueden jugar?</h3></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <img src="/img/pensativo.jpg" alt="imagen" width="250"/>
                        </div>
                        <div className="col-4">
                            <ul className="text-white">
                                <li><h3>¿Cuales son las reglas del juego?</h3></li>
                                <li><h3>¿Como saber quien es el equipo ganador?</h3></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4">
                            <p>El objetivo del juego es golpear una pelota con un bate (batear), desplazando la pelota a través del campo y correr por el campo interno de tierra (infield) buscando alcanzar la mayor cantidad de bases posibles hasta dar la vuelta a la base desde donde se bateó (home) para lograr anotar el tanto conocido como carrera. Los jugadores defensivos, mientras tanto, buscan la pelota bateada para eliminar al jugador que bateó la pelota o a otros corredores, antes que estos lleguen primero a alguna de las bases o consigan anotar la carrera (véase Reglas para más detalles del juego).
                            El equipo que anote más carreras al cabo de los 9 episodios, llamados innings (o entradas) que dura el encuentro, es el que resulta ganador. Si al término de las nueve entradas regulares persiste un marcador igualado en carreras, el encuentro se extiende cuanto sea necesario para que haya un ganador, ya que según las reglas básicas del juego no existe el empate, permitido solo en ligas amateurs e infantiles para limitar el desgaste de los jugadores.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <p>El béisbol es un juego de pelota practicado entre dos equipos de nueve jugadores, en un campo en forma de diamante con cuatro bases. Se juega principalmente en los EE. UU., Canadá, América Latina y el este de Asia. Su nombre deriva del inglés “ baseball ”. Es una combinación de las palabras base (base, almohadilla) y ball (pelota).</p>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-6">
                            <p className="mt-3"><h3>Las posiciones de los jugadores en el terreno son las siguientes:</h3>
                          <ul >
                           <li><i className="text-white">Lanzador (Pitcher).</i>.</li>
                            <li><i className="text-white">Receptor (Catcher).</i></li>
                            <li><i className="text-white">Primera base (First baseman).</i></li>
                            <li><i className="text-white">Segunda base </i>(Second baseman, aunque se le conoce como el defensor de la segunda base, se coloca entre segunda y primera).</li>
                           <li><i className="text-white">Tercera base (Third baseman).</i></li>
                           <li><i className="text-white">Campocorto</i> parador en corto (Short stop, jugador que se encuentra entre tercera y segunda, y que de igual forma defiende la segunda base).</li>
                           <li><i className="text-white">Jardinero izquierdo o exterior izquierdo (Left fielder).</i></li>
                           <li><i className="text-white">Jardinero central o exterior central (Center fielder)</i>.</li>
                           <li><i className="text-white">Jardinero derecho o exterior derecho (Right fielder).</i></li>
                           <li><i className="text-white">Bateador designado</i> (Designated hitter, es una posición del béisbol utilizada por algunas ligas, que permite seleccionar a un jugador para que batee en lugar del lanzador, pero no ocupa ninguna posición defensiva en el campo)</li>
                         </ul>      
                         </p>
                          
                        </div>

                        <div className="col-6 d-flex align-items-center">
                            <img  className="ImgContenido" src="/img/posiciones.jfif" alt="imagen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                           <p>El equipo local es el primero que "ataca", es decir, que batea. Van saliendo de uno    a uno siempre en el mismo orden de bateo para intentar batear y no ser eliminados. El turno de bateo cambia al otro equipo, que defendía, cuando se elimina a tres jugadores del equipo que bateaba.
                           Así van cambiando de ataque a defensa hasta un máximo de nueve veces. Cada vez que un equipo ataca y defiende se pasa una entrada (inning). Al final de las nueve entradas, si no hay empate se acaba el partido, si lo hay, se van jugando entradas adicionales hasta que uno de los dos equipos consiga más carreras que el otro al finalizar el inning completo.
                           La zona básica de juego es un cuadrado denominado "cuadro" o "diamante", colocado sobre uno de sus vértices se sitúa el home o home plate (lugar de bateo). Las carreras (anotaciones) se registran cada vez que el bateador corre todas las bases del cuadro.</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-4">
                            <img src="/img/consejo.jpg" alt="imagen"/>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <h3 className="text-white">¿Cansado de leer tanto? Pues Ahora veamos un video para que lo entiendas mejor</h3>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <a href="https://www.youtube.com/watch?v=Es9rtmzJ2LY" target="_blank"> <button className="btn btn-primary">Ver video</button></a>
                        </div>
                    </div>

                

            </div>
        );
    }
}