
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';


export default function Aliados() {

  return (

    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
    <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
            Nuevos Aliados
        </h1>
    </div>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        
                <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C1.jpg" alt="image 1"
                />}
          
               
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Urbana Pizza
                </h5>
              </Card>
            
              <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C2.jpg" alt="image 1"
                />}
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Restaurante La Pampa
                </h5>
                
              </Card>


              <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C4.jpg" alt="image 1"
                />}
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Panda Express
                </h5>
               
              </Card>
                 
    </div>
</section>
  
    

 

  );
}


