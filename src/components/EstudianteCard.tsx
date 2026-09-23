import {useState} from 'react';

interface EstudianteCardProps {
    nombre: string;
    carrera: string;
}

function EstudianteCard({nombre, carrera}:EstudianteCardProps ){
    let [mostrarDetalle, setMostrarDetalle] = useState(false);
    return (
        <>
            <h3>{nombre}</h3>
            <button onClick={() => setMostrarDetalle(!mostrarDetalle)}>
        {mostrarDetalle ? 'Ocultar' : 'Ver'} detalle
      </button>
            {mostrarDetalle && <p>Carrera: {carrera}</p>}
        </>
    );
}

export default EstudianteCard;