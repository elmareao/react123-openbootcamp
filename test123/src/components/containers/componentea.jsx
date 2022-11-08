/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteb';
import { Contacto } from '../models/contact.class';


function ComponenteA({ contacto: contac }) {



    return (
      <div>
        <h1>Contacto:</h1>
        <h2>Nombre: {contac.nombre}</h2>
        <h3>Apellidos: {contac.apellido}</h3>
        <h3>Email: {contac.email}</h3>
         <ComponenteB estado={false}></ComponenteB>
      </div>
    );
  }
  
  ComponenteA.propTypes = {
    contac: PropTypes.instanceOf(Contacto),
  };
  
  export default ComponenteA;
