
'use client';

import Button from "../botton";

export default function Entretenimiento() {

  return (




    <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
            <img src="/LPG1.PNG" className="rounded-lg" alt="" />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                ¿Que es Club LPG?
                </h3>
                <p className="mt-3 max-w-xl">
                Es el programa de fidelidad de La Prensa Gráfica, en donde premiamos la lealtad de nuestros suscriptores, brindando beneficios exclusivos en más de 100 marcas aliadas, conciertos, eventos culturales y más. Presenta tu tarjeta antes de cancelar en los establecimientos aliados para redimir tus beneficios y descuentos.
                </p>
           
            </div>
            <Button/>
        </div>
    </div>
</section>


  );
}


