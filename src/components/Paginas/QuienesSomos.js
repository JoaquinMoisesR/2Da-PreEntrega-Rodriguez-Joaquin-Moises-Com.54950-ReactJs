import React from "react";
import { Link } from "react-router-dom";

const QuienesSomos = () =>{
    return (
        <div>
            <h1 className="title">AGROINDUSTRIA EL DESTINO</h1>
            <p className="subtitle">Somos una pyme autonoma, que a partir de sus siembras y cosechas y mediante el proceso
                de extrusion, prensado y demas, logramos convertir el cultivo en expeller de soja, expeller de maiz y aceite desgomado para biodiesel.
                Nuestros expellers son totalmente avalados segun Normas ISO, PARA ALIMENTACION DE BOVINOS, PORCINOS Y AVES.
                Por otro lado, nuestro aceite desgomado o crudo, que proviene del expeller de soja, o del de maiz, lo vendemos a otras pymes que elaboran BIODIESEL bajo normativa y seguridad nacional.
            </p>
            <Link to="/" className="border-black px-3 pb-1 rounded-pill text-white text-decoration-none bg-secondary bg-gradient d-flex justify-content-center mx-4 mt-3">Volver a Home</Link>
        </div>
    )
}

export default QuienesSomos;