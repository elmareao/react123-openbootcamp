import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';



function ComponenteB(props) {
    
    
    const [conectado, setestado] = useState(props.estado);

    const cambiarEstado = () => {
        //actualizar estado
        setestado(!conectado)
    }
    

    return (
        <div> 
            <h3>
                {conectado === true ? 'Contacto En linea' :  'Contacto no disponible' }
            </h3>
            
            <button onClick={cambiarEstado}>
                {(conectado) ? "Desconectar" : "Conectar"}
            </button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;