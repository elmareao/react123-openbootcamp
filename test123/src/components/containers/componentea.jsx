/* eslint-disable no-unreachable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteb';
import { Contacto } from '../models/contact.class';


function ComponenteA({ contacto }) {
    const contactoPrueba2 = {
        nombre: 'Fulanito',
        apellido: 'de OpenBootcamp',
        email: 'fulanito@open-bootcamp.com',
        conectado: false,
      };


    return (
      <div>
        <h1>Contacto:</h1>
        <h2>Nombre: {contacto.nombre}</h2>
        <h3>Apellidos: {contacto.apellido}</h3>
        <h3>Email: {contacto.email}</h3>
         <ComponenteB estado={true} /> 
      </div>
    );
  }
  
  ComponenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
  };
  
  export default ComponenteA;
