const { sql } = require("../../src/database");

exports.getTransaction = async (request, response) => {
  const { userID } = request.body;
  try {
    const transaction =
      await sql`SELECT category.categoryName, category.category_img, record.createdat ,record.amount,record.transaction_type,record.categoryid,record.recordid
     FROM record
     INNER JOIN category ON record.categoryid = category.categoryid
     WHERE userID=${userID}
     ORDER BY createdat DESC`;
    response.status(200).json({ data: transaction });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
