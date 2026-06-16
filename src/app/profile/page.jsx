"use client"
import React from 'react';

const ProfilePage = () => {
    const userData = authClient.useSession()
      console.log(userData)
      const user= userData.data?.user

    return (
        <div>
            
        </div>
    );
};

export default ProfilePage;