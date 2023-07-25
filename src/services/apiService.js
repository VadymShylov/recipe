import axios from 'axios';

const URL = 'https://www.themealdb.com/api/json/v1/1/';

export const getCategories = async () => {
  try {
    const response = await axios.get(`${URL}/categories.php`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRandomRecipe = async () => {
  try {
    const response = await axios.get(`${URL}/filter.php?c=Side`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeBySearch = async searchTerm => {
  try {
    const response = await axios.get(`${URL}/search.php?s=${searchTerm}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRecipeByCategory = async category => {
  try {
    const response = await axios.get(`${URL}/filter.php?c=${category}`);

    return response.data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeDetails = async id => {
  try {
    const response = await axios.get(`${URL}/lookup.php?i=${id}`);

    return response.data.meals;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchByLetter = async letter => {
  try {
    const response = await axios.get(`${URL}/search.php?f=${letter}`);
console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
