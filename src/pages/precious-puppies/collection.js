import React from 'react';
import puppy from 'assets/puppies2.gif';
import 'styles/collections.css';

const Collection = () => {
  return (
    <div className="relative w-full py-60 Img" id="collection">
      <div className="container px-6 lg:px-32 py-24 ml-auto mr-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 md:gap-28">
          <div className="order-2 xl:order-1">
            <h1 className="text-5xl  md:text-7xl text-white font-black">
              Collection
            </h1>
            <p className="py-12 text-2xl" style={{ lineHeight: '47px' }}>
              Each pup is unique. They wear different clothes, have different
              personalities, and even have different epistemological approaches
              to bringing happiness to the world. Finding one that's right for
              you is important That's why you can find the perfect pup on
              OpenSea even after the minting date.
            </p>
            <a href="https://opensea.io/" target="_blank" rel="noreferrer">
              <button
                type="button"
                className="bg-blue-700 text-white font-bold rounded-full  text-2xl py-4 px-14  cursor-pointer"
              >
                More Pups
              </button>
            </a>
          </div>
          <div className="flex content-center items-center sm:p-10 order-1 xl:order-2 relative bottom-20">
            <img style={{border: '5px solid rgba(0, 0, 0, 1)', }} src={puppy} alt="" className=" w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;
