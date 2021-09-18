import React from 'react';

function ProfileHeader({user}) {
    const { name, avatar } = user || {};

    return (
        <div className="profile-header">
            <p className="profile-header__greeting">Hola,<br/>{name}</p>
            <div style={{backgroundImage: `url(${avatar})`}} className="profile-header__avatar" />
        </div>
    )
}

export default ProfileHeader;