import React from "react";
import puppy from "assets/Group 45.png";
import "styles/collections.css";

const Team = () => {
  return (
    <>
      <div
        id="team"
        className="mt-56 sm:mt-48 md:mt-24 lg:-mt-36 xl:-mt-72 2xl:-mt-96 w-full pt-20 sm:pt-0 md:pt-32 lg:pt-24 xl:pt-20"
      >
        <div className="container  md:px-6 lg:px-32 xl:px-60 2xl:px-72  pb-24 ml-auto mr-auto">
          <div
            className=" rounded-tr-xl px-2 rounded-bl-xl relative z-30 py-12  color "
            style={{
              borderTopLeftRadius: "205px",
              borderBottomRightRadius: "205px",
            }}
          >
            <h1 className=" text-5xl  md:text-7xl text-white text-center font-black">
              Team
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2  md:px-20  pt-24 md:pt-10">
              <div className="order-2 xl:order-1">
                <h2 className="text-2xl font-semibold">Artist,Developer</h2>
                <p className="text-2xl py-16" style={{ lineHeight: "47px" }}>
                  If you guys enjoy your pups and want to let me know. Shoot me an email or hit me up on
                  discord.
                </p>
              </div>
              <div className="flex content-center items-center sm:p-10  order-1 xl:order-2 relative bottom-10 ">
                <img src={puppy} alt="" className=" w-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
