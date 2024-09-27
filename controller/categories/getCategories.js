import { sql } from "../../src/database";

exports.getCategories = async (request, response) => {
  try {
    const categories = await sql`SELECT * FROM category`;
    response
      .status(200)
      .json({ message: "all category", categories: categories });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
