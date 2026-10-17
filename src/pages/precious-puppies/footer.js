import React from 'react';
import twitter from 'assets/twitter.svg';
import no from 'assets/no.svg';
import discord from 'assets/discord.svg';

const Footer = () => {
  return (
    <div className="bg-navColor flex justify-center">
      <div className="flex items-center justify-center bg-white sm:rounded-full py-5 px-10 w-full sm:w-auto">
        <a
          href="https://discord.gg/fNxTGXVHfQ"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={discord}
            alt=""
            className="h-20 w-20 mx-2 cursor-pointer  "
          />
        </a>
        <a
          href="https://twitter.com/PreciousPupsNFT"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" className="h-20 w-20 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
