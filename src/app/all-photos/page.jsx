import React from 'react';
import PhotoCard from '../component/PhotoCard';

const AllProducts = async () => {
        const res = await fetch('https://suncart-delta.vercel.app/data.json',{cache:"no-store"})
    const photos = await res.json()
    // console.log(photos)

    return (
        <div>
            <h1 className="text-4xl font-bold m-4">
                All Products</h1>

            <div className="grid grid-cols-3 gap-5">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo}>

                    </PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;