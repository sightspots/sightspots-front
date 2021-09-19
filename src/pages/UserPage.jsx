import React from 'react';
import ProfileHeader from '../components/ui/ProfileHeader';

function UserPage({ user }) {

    return (
        <div className="profile">
            <ProfileHeader user={user} />
        </div>
    );
}

export default UserPage;