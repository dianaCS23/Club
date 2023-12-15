
'use client';


import { Card } from 'flowbite-react';
import Image from 'next/image';


export default function Aliados() {

  return (

    <section className="mt-1 mx-auto px-2 max-w-screen-xl md:px-8">
    <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
            Restaurantes
        </h1>
    </div>
    <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        
    <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C2.jpg" alt="image 1"
                />}
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Restaurante La Pampa
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                15% de descuento al pagar en efectivo       
                </p>
          
                <p className="font-normal text-gray-700 dark:text-gray-400">
                10% descuento al pagar con tarjeta de crédito o débito
                </p>
          
                <p className="font-normal text-gray-700 dark:text-gray-400">
                *Aplica todos los días, sin restricción de horario. Descuento no aplica en sección Parrilladas para compartir. Descuento aplica únicamente para consumo en el restaurante. Válido para mesas de un máximo de 10 personas. No aplica promoción sobre promoción.
                </p>
              </Card>
            
              <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C2.jpg" alt="image 1"
                />}
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sushi Itto
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                15% de descuento al pagar en efectivo      
                </p>
          
                <p className="font-normal text-gray-700 dark:text-gray-400">
                10% de descuento al pagar con tarjeta de crédito o débito
                </p>
          
                <p className="font-normal text-gray-700 dark:text-gray-400">
                *No aplica con otros promociones y descuentos, No aplica en servicio a domicilio y para llevar.
                </p>
              </Card>


              <Card
                className="max-w-sm"
                renderImage={() => <Image width={500} height={500} src="/C4.jpg" alt="image 1"
                />}
          
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Restaurante El Zocalo
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                15% de descuento al pagar en efectivo    
                </p>
          
                <p className="font-normal text-gray-700 dark:text-gray-400">
                5% Pago con tarjeta de crédito o débito
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                *No aplica con otras promociones y descuento.
                </p>

              </Card>
                 
    </div>
</section>
  
    

 

  );
}


