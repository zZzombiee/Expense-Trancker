import { sql } from "../../src/database";

exports.postCategory = async (request, response) => {
  const { categoryName, description, img } = request.body;
  try {
    const newCategory =
      await sql`INSERT INTO category(categoryName,description,category_img)
              VALUES (${categoryName},${description},${img})
              returning *`;
    response
      .status(200)
      .json({ message: "added new category", newCategorydata: newCategory });
  } catch (error) {
    response.status(400).json({ message: "aldaa", error: error });
  }
};
