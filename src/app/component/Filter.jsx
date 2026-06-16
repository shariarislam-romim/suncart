import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const FilterPage = async () => {
    const res = await fetch('https://suncart-delta.vercel.app/category.json')
    const categories = await res.json()
    console.log(categories)
    return (
        <div className='mb-5 space-x-3'>
            {
                categories.map(category => <Link key={category.id} href={`?category=${category.slug}`}>
                <Button size='sm' variant='outline'>{category.name}</Button></Link>)
            }
        </div>
    );
};

export default FilterPage;