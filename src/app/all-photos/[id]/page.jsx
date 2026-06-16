import PhotoCard from "@/app/component/PhotoCard";
import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FcRating } from "react-icons/fc";

const DetailsPage = async ({params}) => {
    const {id} = await params;
    const res = await fetch('http://localhost:3001/data.json')
    const photos = await res.json()

    const photo = photos.find(p => p.id == id)

   

    return ( 
        <Card className='max-w-140 mx-auto flex flex-col items-center border mt-5'>
            <div className=' relative w-full'>
                <Image src={photo?.image}
            height={300} width={600}
            alt={photo?.name}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw'
            className='object-cover rounded-xl'
            />

            <Chip className='absolute right-2 top-2'size='sm'>{photo.category}</Chip>

            </div>
            <div>
                <h2 className='font-semibold text-xl'>
                    {photo.name}
                </h2>
            </div>

            <div className="text-m">
                <p>Brand : {photo.brand}</p>
                <p>Available stocks : {photo.stock}</p>
                <p>Description : {photo.description}</p>
            </div>



            <div className='flex justify-between gap-10'>
            <div className='flex items-center'>
                
                <p className='text-lg font-semibold'>{photo.price} BDT</p>
            </div>

            <Separator orientation='vertical'></Separator>

            <div className='flex items-center gap-2'>
                <p><FcRating/></p>
                <p className='text-yellow-600 font-medium'>{photo.rating}</p>
            </div>
            </div>

            
         </Card>
         
        
    );
};

export default DetailsPage;