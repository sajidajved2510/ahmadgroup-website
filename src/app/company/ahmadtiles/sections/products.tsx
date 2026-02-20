import Image from 'next/image'
import React from 'react'

const Products = () => {
    const productList = [
        '/images/ahmadTiles/product-1.jpg',
        '/images/ahmadTiles/product-2.jpg',
        '/images/ahmadTiles/product-3.jpg',
        '/images/ahmadTiles/product-4.jpg',
        '/images/ahmadTiles/product-5.jpg',
        '/images/ahmadTiles/product-6.jpg',
        '/images/ahmadTiles/product-7.jpg',
    ]
    return (
        <div className='block w-full'>
            {
                productList.map((item, idx) => (
                    <div key={idx} className='mb-8 w-full flex justify-connect items-center'>
                        <div className=" h-auto w-full">
                            <Image
                                src={item}
                                alt={`Product-${idx+1}`}
                                width={1600}
                                height={504}
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products