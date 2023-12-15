'use client';

import { Carousel } from 'flowbite-react';


export default function Slider () {

    return (
        <div className="h-56 sm:h-30 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/S1.png" alt="..." />
          <img src="/S2.png" alt="..." />
          <img src="/S3.png" alt="..." />
          
        </Carousel>
      </div>
       

    )
}



