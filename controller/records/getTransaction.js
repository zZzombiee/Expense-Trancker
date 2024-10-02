const { sql } = require("../../src/database");

exports.getTransaction = async (request, response) => {
  const { userID } = request.body;
  try {
    const transaction = await sql`SELECT * FROM record
                                  WHERE userID=${userID}`;
    response.status(200).json({ data: transaction });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
