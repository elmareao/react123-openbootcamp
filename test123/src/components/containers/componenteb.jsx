import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.class';


function ComponenteB(estado) {
    
    
    const [conectado, setestado] = useState(estado);

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
                Cambiar estado
            </button>
        </div>
    );
};


ComponenteB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponenteB;
