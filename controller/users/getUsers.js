import { sql } from "../../src/database";

exports.getUser = async (request, response) => {
  const { userid } = request.body;
  try {
    const getUser = await sql`SELECT * FROM users WHERE userid=${userid}`;

    response.status(200).json({ message: getUser });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
