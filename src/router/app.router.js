import express from "express";
import { signUp } from "../../controller/users/signUp";
import { signIn } from "../../controller/users/signIn";
import { postCategory } from "../../controller/categories/postCategory";
import { getCategories } from "../../controller/categories/getCategories";
import { postTransaction } from "../../controller/records/postTransaction";
import { getTransaction } from "../../controller/records/getTransaction";
import { putTransaction } from "../../controller/records/putTransaction";
import { deleteTransaction } from "../../controller/records/deleteTransaction";
import { getUser } from "../../controller/users/getUsers";
import { deleteCategory } from "../../controller/categories/deleteCategory";

export const appRouter = express.Router();

appRouter
  .post("/signup", signUp)
  .post("/signin", signIn)
  .post("/user", getUser)
  .post("/category", postCategory)
  .get("/category", getCategories)
  .post("/transaction", postTransaction)
  .post("/gettransaction", getTransaction)
  .put("/transaction/:userId", putTransaction)
  .post("/removeTransaction", deleteTransaction)
  .post("/removeCategory", deleteCategory);
