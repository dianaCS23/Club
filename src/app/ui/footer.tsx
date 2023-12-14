
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer1() {
  return (
    <Footer container>
      <div className="w-full">
 
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Copyright. Derechos Reservados" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/lpg.laprensagrafica" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/laprensagrafica/" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/prensagrafica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
