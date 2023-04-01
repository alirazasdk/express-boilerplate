import GenreService from "../../services/genre.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const response = await GenreService.getAll();
      return httpResponse.SUCCESS(res,response.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  // getById: async (req, res) => {
  //   try {
  //     const response = await UserService.getById(req.params.id);
  //     return httpResponse.SUCCESS(res,response.data);
  //   } catch (error) {
  //     return httpResponse.INTERNAL_SERVER_ERROR(res, error);
  //   }
  // },

  create: async (req, res) => {
    try {
      const reponse = await GenreService.create(req.body);
      return httpResponse.CREATED(res, reponse.data, reponse.message);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  // updateById: async (req, res) => {
  //   try {
  //     const reponse = await UserService.updateById(req.params.id,req.body);
  //     return httpResponse.CREATED(res, reponse.data, reponse.message);
  //   } catch (error) {
  //     return httpResponse.INTERNAL_SERVER_ERROR(res, error);
  //   }
  // },
  // deleteById: async (req, res) => {
  //   try {
  //     const reponse = await UserService.deleteById(req.params.id);
  //     return httpResponse.CREATED(res, reponse.data, reponse.message);
  //   } catch (error) {
  //     return httpResponse.INTERNAL_SERVER_ERROR(res, error);
  //   }
  // },
  // login: async (req, res) => {
  //   try {
  //     const reponse = await UserService.login(req.body);
  //     return httpResponse.CREATED(res, reponse.data, reponse.message);
  //   } catch (error) {
  //     return httpResponse.INTERNAL_SERVER_ERROR(res, error);
  //   }
  // },
}

export default controller;
