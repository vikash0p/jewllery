import { brandData } from '@/utils/data'
import Image from 'next/image'
import React from 'react'

const HomeBrand = () => {
  return (
    <div className='container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 py-10  items-center '>
            {
                brandData.map((value)=>{
                    return (
                      <div className='relative max-w-sm h-32'key={value.id}>
                        <Image src={value.img} alt={value.img} className="object-contain w-full h-full " fill />
                      </div>
                    );
                })
            }
    </div>
  )
}

export default HomeBrand
