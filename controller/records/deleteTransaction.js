const { sql } = require("../../src/database");

exports.deleteTransaction = async (request, response) => {
  const { userId } = request.params;
  try {
    await sql`DELETE FROM record WHERE recordid=${userId}`;
    const records = await sql`SELECT * FROM record`;

    response.status(200).json({ message: `deleted record `, data: records });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
