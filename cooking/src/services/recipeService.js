import { requestFactory } from "./requester";

const baseUrl = "http://localhost:8080";
const recipeUrl = `${baseUrl}/recipes`;

export const recipeServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const recipes = await request.get(recipeUrl);

    return recipes;
  };

  const getOne = async (recipeId) => {
    const result = await request.get(`${recipeUrl}/${recipeId}`);

    return result;
  };

  const create = async (recipeData) => {
    const result = await request.post(recipeUrl, recipeData);

    console.log(result);

    return result;
  };

  const edit = (recipeId, recipeData) => request.put(`${recipeUrl}/${recipeId}`, recipeData);

  const deleteGame = (recipeId) => request.delete(`${recipeUrl}/${recipeId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteGame,
  };
};
