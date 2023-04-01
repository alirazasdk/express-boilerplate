import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
  login: {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
  updateById: {
    body: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
    }),
  },
};

export default schema;
