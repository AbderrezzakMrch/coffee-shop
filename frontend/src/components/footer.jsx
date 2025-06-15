import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#BD7F65] text-white py-8 text-center">
      <div className="px-16">
        <hr className="border-t-4 border-[#FFFADA] mb-3" />
        <div className="flex justify-center items-center gap-2 font-semibold">
          <FaRegCopyright className="text-white" />
          <span className="italic text-3xl">Filtro</span>
          <span className="not-italic text-2xl">All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
