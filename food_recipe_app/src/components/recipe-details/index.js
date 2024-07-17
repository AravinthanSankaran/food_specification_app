import React from "react";
import Link from "next/link";

function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <Link href={"/recipe-list"}>
          <button className="rounded-full bg-slate-500 p-2 mb-3">
            Go Back to recipe List
          </button>
        </Link>
        <div className="grid item-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5 ">
              <p className="text-3xl font-extrabold text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5 ">
              <p className="text-xl font-extrabold text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsItem;
