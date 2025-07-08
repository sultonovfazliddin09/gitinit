import React from "react";
import Image from "../../assets/image copy 3.png";
import Image1 from "../../assets/image copy 4.png";
import Image2 from "../../assets/image copy 5.png";
import Image3 from "../../assets/image copy 6.png";

const Arrivall = () => {
  return (
    <div className="p-6">
      <div className="flex space-x-6">
        <img
          src={Image}
          alt="d"
          className="object-cover rounded-lg"
        />
        <img
          src={Image1}
          alt="ds"
          className="object-cover rounded-lg"
        />
        <div className="flex flex-col space-y-10">
          <img
            src={Image2}
            alt="df"
            className="h-[330px] object-cover rounded-lg"
          />
          <img
            src={Image3}
            alt="dff"
            className="h-[330px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Arrivall;
