import React from 'react'

export const Location = ({location}) => (
  <div className="location__card">
      <p className="location__done">{location.title}</p>
      <h3 className="location__name">{location.description}</h3>
      <div>
        <p className="location__date">{location.tags}</p>
      </div>
  </div>

)