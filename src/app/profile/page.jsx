"use client"
import { Avatar, Card } from '@heroui/react';
import React from 'react';
import { UpdateUserModal } from '../component/UpdateUserModal';
import { authClient } from '@/lib/auth-client';


const ProfilePage = () => {
    const userData = authClient.useSession()
      console.log(userData)
      const user= userData.data?.user

    return (
        <div>
            <Card className='max-w-96 mx-auto flex flex-col items-center border mt-5'>
                <Avatar size="2xl">
                        <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy="no-referrer"/>
                        <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                      </Avatar>

                      <h2 className='text-xl font-bold'>{user?.name}</h2>
                      <p className='text-muted'>{user?.email}</p>
                      <UpdateUserModal/>
            </Card>
        </div>
    );
};

export default ProfilePage;