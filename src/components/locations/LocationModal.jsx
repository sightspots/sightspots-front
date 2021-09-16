import React from 'react'


const LocationModal = (props) => {
    console.log(props.location);
    return (
        <div className="modal is-open">
            <div className="modal-container">
                <button className="btn btn-close" >X</button>
                
            </div>
        </div>
    )
}

export default LocationModal;
