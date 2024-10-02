const { sql } = require("../../src/database");

exports.putTransaction = async (request, response) => {
  const { recordName } = request.body;
  const { userId } = request.params;
  try {
    const record = await sql`UPDATE record
              SET recordName = ${recordName}
              WHERE userId = ${userId}
              returning *`;
    response.status(200).json({ data: record });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
