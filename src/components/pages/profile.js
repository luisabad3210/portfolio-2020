import React from 'react';
import Header from '../header';
import Content from '../content';


const Profile = ({profile}) => {
    return (
        <div>
            <Header profile={profile}/>
            <Content profile={profile}/>
        </div>
    );
}

export default Profile;