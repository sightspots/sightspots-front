import React from 'react';
import { Link } from 'react-router-dom';
import ProfileHeader from '../components/ui/ProfileHeader';

function UserPage({ user }) {
    const favs = window.localStorage.getItem('favs') !== null ? JSON.parse(window.localStorage.getItem('favs')) : {};

    const locationsIdArray = Object.keys(favs);
    const locationsIdFaved = locationsIdArray.filter((locationId) => favs[locationId].isFav);

    return (
        <div className="Container">
            <div className="profile">
                <ProfileHeader user={user} />
                <p>Estas son tus localizaciones favoritas.</p>
                {locationsIdFaved.length > 0 ?
                    locationsIdFaved.map((locationId) =>
                        <Link to={`/locations/${locationId}`} key={`${locationId}`}>
                            <div className='card profile__fav-block'>
                                <h2 className="card__name">{favs[locationId].title}</h2>
                                <div className='card__picture'><img src={favs[locationId].image} alt={favs[locationId].title} className='card__img' /></div>
                            </div>
                        </Link>
                    )
                    : <p>Añade localizaciones a tus favoritos para verlas aquí.</p>}
            </div>
        </div>
    );
}

export default UserPage;