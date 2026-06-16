import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcRating } from 'react-icons/fc';
import { ImPriceTag } from 'react-icons/im';

const PhotoCard = ({photo}) => {
    // console.log(photo)
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo?.image}
            fill
            alt={photo.name}
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

            <div className='flex justify-around gap-6'>
            <div className='flex items-center gap-2'>
                
                <p className='text-lg font-semibold'>{photo.price} BDT</p>
            </div>

            <Separator orientation='vertical'></Separator>

            <div className='flex items-center gap-2'>
                <p><FcRating/></p>
                <p className='text-yellow-600 font-medium'>{photo.rating}</p>
            </div>
            </div>

            <Link href={`/all-photos/${photo.id}`}>
            <Button variant='outline' className={'w-full'}>View Details</Button>
            </Link>
        </Card>
    );
};

export default PhotoCard;