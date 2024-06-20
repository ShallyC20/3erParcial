import React from 'react';
import Imagen1 from "../assets/image.png";
import Imagen2 from "../assets/image1.png";
import Imagen3 from "../assets/image2.png";
import Imagen5 from "../assets/image3.png";
import Header from './Header';
import WorkoutCard from './WorkoutCard';
import "./Ejercicio.css";

const Ejercicio = () => {
    return (
        <div className="containerH">
            <div className="his-card">
                <Header />
                <WorkoutCard image={Imagen1} title="Puxada frontal" description="3 series x 12 repeticiones" />
                <WorkoutCard image={Imagen2} title="Remada curva" description="3 series x 12 repeticiones" />
                <WorkoutCard image={Imagen3} title="Remada unilateral" description="3 series x 12 repeticiones" />
                <WorkoutCard image={Imagen5} title="Levantamiento terra" description="3 series x 12 repeticiones" />
            </div>
        </div>
    );
};

export default Ejercicio;