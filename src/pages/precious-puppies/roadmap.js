import React from "react";
import bg from "assets/Path 6.png";
import "styles/collections.css";

const RoadMap = () => {
  return (
    <div className="relative w-full pt-20 sm:pt-24 background " id="road_map">
      <div className="container md:px-6 lg:px-32 xl:px-60 2xl:px-72   ml-auto mr-auto">
        <div
          className="rounded-3xl relative z-30 md:px-20 py-14"
          style={{ backgroundColor: "#ffd300" }}
        >
          <h1 className="text-5xl md:text-7xl text-white text-center font-black">
            Roadmap
          </h1>
          <div className="flex ml-auto mr-auto pt-20 w-5/6">
            <div className=" w-4 bg-gradient-to-t from-purple-400 via-purple-600 to-purple-8000 flex-col flex justify-between  items-center">
              <div className="bg-red-500 h-14 w-14 rounded-full border-4 border-white"></div>
              <div
                className="h-14 w-14 rounded-full border-4 border-white  mt-20"
                style={{ backgroundColor: "orange" }}
              ></div>
              <div
                className="h-14 w-14 rounded-full border-4 border-white mt-20"
                style={{ backgroundColor: "#BFFF0A" }}
              ></div>
              <div className="bg-blue-700 h-14 w-14 rounded-full border-4 border-white  mt-24"></div>
              <div className="bg-purple-500 h-14 w-14 rounded-full border-4 border-white  mt-20"></div>
            </div>
            <div className="flex-1 ml-6 sm:ml-10">
              <p className=" text-xl sm:text-2xl ">
                Prizes: Precious Puppies will start giveaways, raffles, and live art streams
                to build a strong community base{" "}
              </p>
              <p className="text-xl sm:text-2xl mt-20 ">
                Precious Puppies Launch: Minting will open to the public. The pups are released
                and joy is spread.{" "}
              </p>
              <p className="text-xl sm:text-2xl mt-20 ">
                Start Creating Project: Start creating 3D metaverse rendition of your puppy to give away
                to every pup holder{" "}
              </p>
              <p className="text-xl sm:text-2xl pt-20 ">
                Merch Store: Cool Precious Puppies Merch will be released show
                off your puppy pride{" "}
              </p>
              <p className="text-xl sm:text-2xl pt-20 ">
                Meet your pups: Metaverse interaction with Puppy and in the Grumpville and beyond.
                
                {" "} 
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={bg}
        alt=""
        className="-mt-32 sm:-mt-96 w-full"
        style={{ maxHeight: "900px" }}
      />
    </div>
  );
};
export default RoadMap;
