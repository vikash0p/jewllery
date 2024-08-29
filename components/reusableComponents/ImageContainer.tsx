'use client'
import Image from 'next/image';
import React from 'react'

interface imageContain {
  src: string;
  alt: string;
  sizes: string;
  className: string;
}

const ImageContainer = ({src, alt, sizes,className}:imageContain) => {
  return (
    <Image src={src} alt={alt} sizes={sizes} className={className} priority fill />


  )
}

export default ImageContainer
