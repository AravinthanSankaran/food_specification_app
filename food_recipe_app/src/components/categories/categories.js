import React from "react";
import Asian from "../../../public/images/asian.webp";
import Italian from "../../../public/images/itlaian.webp";
import Pakistani from "../../../public/images/pakistani.webp";
import Categoriescard from "./categoriescard";

function Categories() {
  const categories = [
    {
      id: 1,
      image: Asian,
      name: "Asian",
    },
    {
      id: 2,
      image: Italian,
      name: "Italian",
    },
    {
      id: 3,
      image: Pakistani,
      name: "Pakistani",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-center mt-6">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-orange-400 pb-1">
              Pick Up The
              <span className="text-orange-400"> Categories </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 justify-items-center">
          {categories.map((categories) => (
            <div key={categories.id}>
              <Categoriescard name={categories.name} image={categories.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
