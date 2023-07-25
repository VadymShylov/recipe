import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getRandomRecipe } from 'services/apiService';

const Cards = () => {
  const [randomRecipe, setRandomRecipe] = useState([]);

  useEffect(() => {
    getRandomRecipe()
      .then(res => setRandomRecipe(res.meals))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {randomRecipe.map(item => (
          <a
            href={`category/meal/${item.idMeal}`}
            key={item.idMeal}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.strMeal}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Cards;
