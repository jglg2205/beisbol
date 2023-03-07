import React from "react";

export default class Contacto extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                
                    <div className="row bg-dark">
                        <div className="col-12">
                            <h3 className="text-white">Contacto</h3>
                        </div>
                    </div>
                    <div className="row bg-primary">
                        <div className="col-4 mt-3">
                            <a href="https://www.bing.com/search?q=facebook&form=ANNTH1&refig=2defdb313676470c9f1aed99de4da5d0" target="_blank"><img src="/img/facebook.png" alt="imagen" className="BannerContacto mx-5"/></a>
                        </div>
                        <div className="col-4 mt-3">
                            <a href="https://www.instagram.com/?hl=en" target="_blank"><img src="/img/instagram.png" alt="imagen" className="BannerContacto mx-5"/></a>
                        </div>
                        <div className="col-4 mt-3">
                            <a href="https://www.bing.com/search?q=twitter&filters=ufn%3a%22Twitter%22+sid%3a%22c47da78b-4fdf-3297-761e-74439706bca1%22&asbe=SS&qs=MB&pq=twi&sc=10-3&cvid=37020D6FE2FA4DC88FAB8037BE0BC37A&FORM=QBRE&sp=1&ghc=1&lq=0" target="_blank"><img src="/img/twitter.jfif" alt="imagen" className="BannerContacto mx-5"/></a>
                        </div>
                    </div>

                
            </>
        );
    }
}