import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col text-gray-400 bg-white">
      <div className="flex justify-between px-10 py-6 border-b border-b-gray-300">
        <div>
          <Image src="/imdb2.svg" height={50} width={50} />
        </div>

        <div>
          <span>2022 - Nect js demo app</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-6 justify-self-center px-10 py-3">
          <Image src="/facebook.svg" height={30} width={30} />
          <Image src="/instagram.svg" height={30} width={30} />
          <Image src="/twitter.svg" height={30} width={30} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
