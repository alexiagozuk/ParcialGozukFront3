import React from "react";


const Card = ({ data }) => {
    return (
        <div className="card">
            <h2>Información que ingresaste:</h2>
            <p><strong>Hola {data.nombre}!</strong></p>
            <p><strong>Sabemos que tu marca de ropa favorita de Argentina es: {data.marca}</strong></p>
            <p>Gracias por compartirnos esta información, pronto tendremos novedades!</p>
        </div>
    );
};

export default Card;
