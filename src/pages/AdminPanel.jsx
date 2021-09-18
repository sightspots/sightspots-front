import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLocations } from "../api/locationsGet";
import { locationDelete } from '../api/locationDelete';
import ProfileHeader from '../components/ui/ProfileHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Open
import { faEdit } from '@fortawesome/free-solid-svg-icons' // Edit
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'; // Delete
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Add

function AdminPanel({ isAdmin, user }) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocationsApi();
    }, []);

    const getLocationsApi = async () => {
        try {
            const data = await getLocations();
            setLocations(data);

        } catch (error) {
            console.log(error)
        }
    }

    window.localStorage.setItem("locations", JSON.stringify(locations));

    const handleClick = async (id) => {
        await locationDelete(id);
        const locations = await getLocations();
        setLocations(locations);
    }

    return (
        <div>
            {isAdmin ?
                <div className="admin-panel">
                    <ProfileHeader user={user} />
                    <div className="admin-panel__location-block">
                        {locations.map((location) =>
                            <div key={location._id} className="admin-panel__location">
                                <h4 className="admin-panel__location--name">{location.title}</h4>
                                <div className="admin-panel__location--icons">
                                    <Link to={`/locations/${location._id}`}><FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
                                    <Link to={`/admin/edit/${location._id}`}><FontAwesomeIcon icon={faEdit} /></Link>
                                    <span onClick={() => handleClick(location._id)}><FontAwesomeIcon icon={faTimesCircle} /></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <Link to={'/admin/create'}><FontAwesomeIcon icon={faPlus} className="admin-panel__add-icon"/></Link>
                </div>
                : <h1>Acceso denegado</h1>
            }
        </div>
    );
}

export default AdminPanel;