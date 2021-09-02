import React from "react";
import twitter from "assets/twitter.svg";
import no from "assets/no.svg";
import discord from "assets/discord.svg";

const SideBar = () => {
  return (
    <>
      <div style={{zIndex:999}} className="fixed right-2 top-56">
        <a
          href="https://twitter.com/PreciousPupsNFT"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="" className="h-16 w-16 cursor-pointer" />
        </a>
        <a href="https://opensea.io/" target="_blank" rel="noreferrer">
          <img src={no} alt="" className="h-16 w-16 cursor-pointer" />
        </a>
        <a
          href="https://discord.gg/fNxTGXVHfQ"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discord} alt="" className="h-16 w-16 cursor-pointer" />
        </a>
      </div>
    </>
  );
};
export default SideBar;
