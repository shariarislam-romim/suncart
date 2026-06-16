import React from 'react';
import PhotoCard from './PhotoCard';

const Hero = async () => {
    const res = await fetch('http://localhost:3001/data.json')
    const photos = await res.json()
    // console.log(photos)

    const topPhotos = photos.slice(0, 3)
    // console.log(topPhotos)
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Popular Products</h1>

            <div className="grid grid-cols-3 gap-5">
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default Hero;