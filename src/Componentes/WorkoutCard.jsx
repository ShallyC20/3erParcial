import React from 'react';
import Imagen4 from "../assets/Icons.png";
import "./Ejercicio.css"; // Asegúrate de que los estilos están accesibles

const WorkoutCard = ({ image, title, description }) => {
    return (
        <div className="workout-card">
            <img className="Gluteos" src={image} alt="Ejercicio GYM" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img className="flecha" src={Imagen4} alt="icono" />
        </div>
    );
};

export default WorkoutCard;