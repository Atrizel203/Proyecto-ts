import { Router } from "express";
import {
  deleteUserByEmailController,
  getAllUsersController,
  getUserByEmailController,
  updateUserByEmailController,
} from "./dependencies.user";
import { verifyJwt } from "../../auth/application/middlewares/jwt.middleware";

const userRouter = Router();

userRouter
  .get("/", verifyJwt, getAllUsersController.run.bind(getAllUsersController))
  .get(
    "/:email",
    verifyJwt,
    getUserByEmailController.run.bind(getUserByEmailController)
  )
  .delete(
    "/:email",
    verifyJwt,
    deleteUserByEmailController.run.bind(deleteUserByEmailController)
  )
  .put(
    "/:email",
    verifyJwt,
    updateUserByEmailController.run.bind(updateUserByEmailController)
  );

export default userRouter;