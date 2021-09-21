import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ui/ProfileHeader';

function UserPage({ user }) {
    const sightSpotsFavs = window.localStorage.getItem('sightSpotsFavs') !== null ? JSON.parse(window.localStorage.getItem('sightSpotsFavs')) : {};

    const locationsIdArray = Object.keys(sightSpotsFavs);
    const locationsIdFaved = locationsIdArray.filter((locationId) => sightSpotsFavs[locationId].isFav);

    return (
        <div className="Container">
            <div className="profile">
                <ProfileHeader user={user} />
                <p>Estas son tus localizaciones favoritas.</p>
                {locationsIdFaved.length > 0 ?
                    locationsIdFaved.map((locationId) =>
                        <Link to={`/locations/${locationId}`} key={`${locationId}`}>
                            <div className='card profile__fav-block'>
                                <h2 className="card__name">{sightSpotsFavs[locationId].title}</h2>
                                <div className='card__picture'><img src={sightSpotsFavs[locationId].image} alt={sightSpotsFavs[locationId].title} className='card__img' /></div>
                            </div>
                        </Link>
                    )
                    : <p>Añade localizaciones a tus favoritos para verlas aquí.</p>}
            </div>
        </div>
    );
}

export default UserPage;