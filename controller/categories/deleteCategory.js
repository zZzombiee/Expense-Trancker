const { sql } = require("../../src/database");

exports.deleteCategory = async (request, response) => {
  const { categoryId } = request.body;
  try {
    await sql`DELETE FROM category WHERE categoryId =${categoryId}`;
    response.status(200).json({});
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
