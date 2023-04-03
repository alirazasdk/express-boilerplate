import UserModel from "../models/user.js";

const UserService = {
  getAll: async () => {
      return UserModel.find();
  },

  add: async (body) => {
      return UserModel.create(body);
  },
};

export default UserService;
