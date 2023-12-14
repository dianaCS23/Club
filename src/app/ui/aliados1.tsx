
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function Aliados1() {
  return (
    <Card
    
      className="max-w-sm card-grid"
      renderImage={() => <Image width={500} height={500} src="/C2.jpg" alt="image 1"
      />}

    >
    
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Urbana Pizza
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      5% Pago con tarjeta de crédito o débito       
      </p>

      <p className="font-normal text-gray-700 dark:text-gray-400">
      15% de descuento al pagar en efectivo
      </p>

      <p className="font-normal text-gray-700 dark:text-gray-400">
      *No aplica con otras promociones y descuento
      </p>
    </Card>

  );
}
