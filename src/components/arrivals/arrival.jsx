import React from "react";
import Image from "../../assets/image.png";
import Image1 from "../../assets/image copy.png";
import Image2 from "../../assets/image copy 2.png";

const products = [
  { img: Image, title: "Thermo Ball Etip Gloves", price: "$45,743" },
  { img: Image1, title: "Thermo Ball Etip Gloves", price: "$45,743" },
  { img: Image2, title: "Thermo Ball Etip Gloves", price: "$45,743" },
];

const Arrival = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl font-[Josefin_Sans] text-gray-800 mb-8 text-center"
          style={{ fontFamily: "Josefin Sans" }}
        >
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white transition-shadow duration-300"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full max-w-[360px] h-[487px] object-cover mx-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {p.title}
                </h3>
                <p className="text-gray-500 mt-2">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrival;
