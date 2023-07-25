import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from 'services/apiService';

const MealDetail = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRecipeDetails(id)
      .then(res => setItems(res))
      .catch(error => console.log(error));
    setIsLoading(true);
    setIsLoading(false);
  }, [id, isLoading]);

  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};
  if (items && items?.length > 0) {
    for (let props in items[0]) {
      if (props.includes('strIngredient')) {
        if (items[0][props]) ingredientsArr.push(items[0][props]);
      }

      if (props.includes('strMeasure')) {
        if (items[0][props]) {
          if (items[0][props].length > 1) {
            measuresArr.push(items[0][props]);
          }
        }
      }
    }

    singleMeal = {
      id: items[0]?.idMeal,
      title: items[0]?.strMeal,
      category: items[0]?.strCategory,
      area: items[0]?.strArea,
      thumbnail: items[0]?.strMealThumb,
      instructions: items[0]?.strInstructions,
      source: items[0]?.strSource,
      tags: items[0]?.strTags,
      youtube: items[0]?.strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  let instructions = singleMeal?.instructions?.split('\r\n');
  instructions = instructions?.filter(instruction => instruction.length > 1);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Meal Details
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 ">
        <div className="absolute  bg-black/80 rounded-xl text-orange-600">
          <p className="font-bold text-2xl px-2 pt-4">{singleMeal?.title}</p>
        </div>
        <img src={singleMeal?.thumbnail} alt="" className="  rounded-t-lg" />

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 pt-4 ">
          <ul>
            <h6 className="text-orange-600 font-bold text-1xl sm:text-2xl lg:text-3xl px-2 mb-2">
              Ingredients:
            </h6>
            {singleMeal?.ingredients?.map((ingredient, idx) => (
              <li key={idx}>
                <span className="li-dot">{idx + 1}</span>
                <span className="text-capitalize p-2 fs-15">{ingredient}</span>
              </li>
            ))}
          </ul>

          <ul>
            <h6 className="text-orange-600 font-bold text-1xl sm:text-2xl lg:text-3xl px-2 mb-2 ">
              Measure:
            </h6>
            {singleMeal?.measures?.map((measure, idx) => (
              <li key={idx}>
                <span className="text-capitalize p-2 fs-15">{measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="instructions my-4">
        <h6 className="text-orange-600 font-bold text-4xl mb-2 ">
          Instructions:
        </h6>
        <ul className="grid">
          {instructions?.map((instruction, idx) => (
            <li key={idx} className="fs-14">
              <span className="li-text fs-16 fw-5 op-09">{instruction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MealDetail;
