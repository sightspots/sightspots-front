import React from 'react'

const LocationModal = ({children}) => {
    return (
        <div className="modal-open">
            <div className="modal-container">
                <button className="btn btn close" >X</button>
                {children}
            </div>
        </div>
    )
}

export default LocationModal
