import React from 'react'
import Imagen1 from "../assets/image.png";
import Imagen2 from "../assets/image1.png";
import Imagen3 from "../assets/image2.png";
import Imagen5 from "../assets/image3.png";
import Imagen4 from "../assets/Icons.png";
import "./Ejercicio.css";
function Ejercicio() {
    return (
        <div className="containerH">
            <div className="his-card">
                <div className="his-header">
                    <p>info</p>
                    <h1>Ejercicios</h1>
                    <p className="numero">4</p>
                </div>
                <div className="workout-card">
                    <img className="Gluteos" src={Imagen1} alt="Ejercicio GYM" />
                    <div>
                        <h2>Puxada frontal</h2>
                        <p>3 series x 12 repeticiones</p>
                    </div>
                    <img className="flecha" src={Imagen4} alt="icono" />
                </div>
                <div className="workout-card">
                    <img className="Gluteos" src={Imagen2} alt="Ejercicio GYM" />
                    <div>
                    <h2>Remada curva</h2>
                    <p>3 series x 12 repeticiones</p>
                    </div>
                    <img className="flecha" src={Imagen4} alt="icono" />
                </div>
                <div className="workout-card">
                    <img className="Gluteos" src={Imagen3} alt="Ejercicio GYM" />
                    <div>
                    <h2>Remada unilateral</h2>
                    <p>3 series x 12 repeticiones</p>
                    </div>
                    <img className="flecha" src={Imagen4} alt="icono" />
                </div>
                <div className="workout-card">
                    <img className="Gluteos" src={Imagen5} alt="Ejercicio GYM" />
                    <div>
                    <h2>Levantamiento terra</h2>
                    <p>3 series x 12 repeticiones</p>
                    </div>
                    <img className="flecha" src={Imagen4} alt="icono" />
                </div>
            </div>
        </div>
    );
}

export default Ejercicio