import React, { useEffect, useState } from 'react';
import LocationCard from '../components/locations/LocationCard';
import { getLocations } from "../api/locationsGet";
import { Link } from 'react-router-dom';

function AdminPanel({ isAdmin, user }) {

    const { name } = user || {};
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

    return (
        <div>
            {isAdmin ?
                <div>
                    <h1>Panel de administración</h1>
                    <p>Hola, {name}.</p>
                    <div>
                        <Link to='/admin/create'>
                            Crear localización
                        </Link>
                    </div>
                    <br />
                    <br />
                    <div>{locations.map((location) => <LocationCard 
                    key={location._id} 
                    location={location} 
                    setLocations={setLocations}
                    flag={true} />)}</div>
                </div>
                : <h1>Acceso denegado</h1>
            }
        </div>
    );
}

export default AdminPanel;