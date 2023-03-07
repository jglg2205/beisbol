import React from "react";
import ListaLigas from "../ListaLigas";

export default class PaginaLigas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lig:[]
        }
       
    }

    ligasPrincipales =[
        {nombre:"Major League Beisbol (MLB)", descripcion: "es una organización profesional de béisbol, la más antigua de las ligas profesionales deportivas de Estados Unidos y Canadá. Se encuentra compuesta por 30 equipos repartidos en la Liga Nacional de Béisbol (NL) y en la Liga Americana (AL), con 15 equipos en cada una. La NL se creó en el año 1876 y la AL en 1901.",img:"/img/mlb.jfif" },
        {nombre: "Nippon Professional Baseball (NPB)", descripcion:"es la competición de béisbol profesional de mayor nivel en Japón. Fue fundada en 1950 y cuenta con 12 equipos repartidos a partes iguales en dos ligas: la Liga Central y la Liga del Pacífico.", img:"/img/npb.jfif"},
        {nombre:"Liga de Beisbol Profesional de la Republica Dominicana (LIDOM)", descripcion:"es una liga invernal de béisbol profesional en la República Dominicana. La liga consiste en seis equipos de béisbol que representan diferentes ciudades del país." , img:"/img/lidom.jpg"},
        {nombre:"Liga Venezolana de Beisbol Profesional (LVBP)", descripcion:"es la liga de béisbol profesional de mayor nivel en Venezuela, compuesta por ocho equipos locales que compiten entre sí desde finales de octubre hasta finales de enero del año siguiente.", img:"/img/lvbp.png"}
    ]
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then((result)=> {
            console.log(result)
            this.setState({
                lig:result
            });
        })
         
    }


    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <h1 className="text-white">LIGAS</h1>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                      {this.state.lig.map( (lig) => (<span>{lig.title}</span>) )}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-4">
                            <img src="/img/pensativo.jpg" alt="imagen"/>
                        </div>
                        <div className="col-8 mt-4">
                            <h2 className="text-white">Al inicio te apuesto que todo esto del beisbol te parecia muy confuso tal como el texto de arriba</h2>
                        </div>
                   </div>
                        <div className="row">
                            <div className="col-8 mt-4">
                            <h2>Ahora ya sabes muchas cosas referentes al beisbol, pues continuemos con las LIGAS</h2>  
                            </div>
                            <div className="col-4 mt-4">
                            <img src="/img/motivacion.jfif" alt="imagen"/>
                            </div>
                        </div>

                        <div className="row">
                           <div className="col-12 mt-3">
                             <ListaLigas ligasPrincipales={this.ligasPrincipales} />
                           </div>
                        </div> 

                        <div className="row">
                            <div className="col-12 text-center">
                                <h3 className="text-white">Para mas informacion consulta <h2><a href="https://www.youtube.com/watch?v=BPAx3rK0wos&t=225s" target="_blank">AQUI</a></h2></h3>
                            </div>
                        </div>
                    
                    

                </div>

            </>
        );
    }
}