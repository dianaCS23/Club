'use client';

import { Carousel } from 'flowbite-react';


export default function Slider () {

    return (
        <div className="h-56 sm:h-30 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="/1.png" alt="..." />
          <img src="/2.png" alt="..." />
          <img src="/3.png" alt="..." />
          
        </Carousel>
      </div>
       

    )
}



