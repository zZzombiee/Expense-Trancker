const { sql } = require("../../src/database");

exports.getTransaction = async (request, response) => {
  try {
    await sql``;
    response.status(200).json({});
  } catch (error) {
    response.status(400).json({});
  }
};
