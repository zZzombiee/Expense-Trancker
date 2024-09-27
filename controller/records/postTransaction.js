import { sql } from "../../src/database";

exports.postTransaction = async (request, response) => {
  const {
    userID,
    recordName,
    amount,
    transaction_type,
    description,
    categoryID,
  } = request.body;
  try {
    const newRecord =
      await sql`INSERT INTO record(userID,recordName,amount,transaction_type,description,categoryID)
              VALUES (${userID},${recordName},${amount},${transaction_type},${description},${categoryID})
              returning *`;
    response.status(200).json({ data: newRecord });
  } catch (error) {
    response.status(400).json({ message: error, data: request.body });
  }
};
