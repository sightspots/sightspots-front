import React from 'react'
import { Link } from 'react-router-dom';

export const Location = ({location}) => (
  <div className="location__card">
      <h3 className="location__done">{location.title}</h3>
      <p className="location__name">{location.description}</p>
      <div>
        <p className="location__date">{location.tags}</p>
      </div>
      <Link to={`/admin/locations/${location._id}`} className="btn btn-primary">
        Ver Location
      </Link>
  </div>

)