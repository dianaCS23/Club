'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function Slider () {

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/1.jpg" alt="..." />
          <img src="/2.jpg" alt="..." />
          <img src="/3.jpg" alt="..." />
          
        </Carousel>
      </div>
       

    )
}



