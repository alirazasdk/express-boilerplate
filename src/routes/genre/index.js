import express from "express";
// import authValidation from "../../validations/user.validation.js";
// import validate from "../../middleware/validate.js";
import controllers from "./controllers.js";

const router = express.Router();
router.post("/", controllers.create);
router.get("/", controllers.getAll);
// router.post("/signup", validate(authValidation.add), controllers.add);
// router.post("/login", validate(authValidation.login), controllers.login);
// router.get("/:id", authenticate, controllers.getById);
// router.patch("/:id", authenticate,validate(authValidation.updateById), controllers.updateById);
// router.delete("/:id", authenticate, controllers.deleteById);

export default router;
