import React from 'react';
import ProfileHeader from '../components/ui/ProfileHeader';

function UserPage({ user }) {

    return (
        <div className="Container">
            <div className="profile">
                <ProfileHeader user={user} />
            </div>
        </div>
    );
}

export default UserPage;