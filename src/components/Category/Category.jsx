import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeByCategory } from 'services/apiService';

const Category = () => {
  const { name } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipeByCategory(name)
      .then(res => setRecipe(res))
      .catch(error => console.log(error));
  }, [name, name.length]);

  return (
    <div>
      {recipe === null ? (
        <NotFound />
      ) : (
        <>
          <h1 className="text-orange-600 font-bold text-4xl text-center">
            Menu Items
          </h1>
          <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            {recipe.map(item => (
              <a href={`meal/${item.idMeal}`} key={item.idMeal}>
                <div className="rounded-xl relative">
                  {/* Overlay */}
                  <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">
                      {item.strMeal}
                    </p>
                  </div>
                  <img
                    className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
