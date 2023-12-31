import React from 'react';

import { AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { LuUtensils } from 'react-icons/lu';

import { useEffect } from 'react';
import { useState } from 'react';
import { getCategories } from 'services/apiService';
import { Link } from 'react-router-dom';

export const DrawerMenu = ({ onClickChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res.categories))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <AiOutlineClose
        size={30}
        className="absolute right-4 top-4 cursor-pointer"
        onClick={onClickChange}
      />

      <nav className="h-full overflow-auto">
        <ul className="flex flex-col p-4 text-gray-800">
          <h2 className="text-2xl p-4 font-bold">
            All <span className="font-bold text-orange-600"> Categories</span>
          </h2>
          <li className="text-xl py-4 flex">
            <AiOutlineHome size={25} className="mr-4" />
            <Link to="/">Home</Link>
          </li>
          {categories.map(category => (
            <li className="text-xl py-4 flex" key={category.idCategory}>
              <LuUtensils size={25} className="mr-4" />
              <Link to={`/category/${category.strCategory}`}>
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
