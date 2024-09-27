import express from "express";
import { signUp } from "../../controller/users/signUp";
import { signIn } from "../../controller/users/signIn";
import { postCategory } from "../../controller/categories/postCategory";
import { getCategories } from "../../controller/categories/getCategories";
import { postTransaction } from "../../controller/records/postTransaction";

export const appRouter = express.Router();

appRouter
  .post("/signup", signUp)
  .get("/signin", signIn)
  .post("/category", postCategory)
  .get("/category", getCategories)
  .post("/transaction", postTransaction);
