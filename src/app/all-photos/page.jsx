import React from 'react';
import PhotoCard from '../component/PhotoCard';
import FilterPage from '../component/Filter';

const AllProducts = async ({searchParams}) => {

    const params = await searchParams;
  const category = params.category;
    console.log(category)

        const res = await fetch('https://suncart-delta.vercel.app/data.json',{cache:"no-store"})
    const photos = await res.json()
    // console.log(photos)

     const filteredProduct = category
    ? photos.filter(
        (photo) =>
          photo.category.toLowerCase() === category.toLowerCase()
      )
    : photos;

    return (
        <div>
            <h1 className="text-4xl font-bold m-4">
                All Products</h1>

            <FilterPage/>

            <div className="grid grid-cols-3 gap-5">
                {
                    filteredProduct.map(photo => <PhotoCard key={photo.id} photo={photo}>

                    </PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;