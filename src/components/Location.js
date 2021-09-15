import React from 'react'
import { Link } from 'react-router-dom';

export const Location = ({location, flag = false}) => (
  <div className="location__card">
      <h3>{location.title}</h3>
      <p>{location.description}</p>
      <div>
        <p>{location.tags}</p>
      </div>
      
      {flag && (
        <Link to={`locations/${location._id}`}>
        Ver Location
      </Link>
    )}
    {flag && (
        <Link to={`admin/edit/${location._id}`}>
        Editar Location
      </Link>
    )}
  </div>

)