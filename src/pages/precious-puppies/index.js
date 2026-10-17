import React from "react";
import Collection from "./collection";
import Footer from "./footer";
import Precious from "./precious";
import RoadMap from "./roadmap";
import Team from "./team";

const PreciousPuppies = ({ sellStatus }) => {
  return (
    <>
      <div style={{ backgroundColor: "#BE0AFF08" }}>
        <Precious sellStatus={sellStatus} />
        <Collection />
        <RoadMap />
        <Team />
        <Footer />
      </div>
    </>
  );
};
export default PreciousPuppies;
