import { sql } from "../../src/database";

exports.signIn = async (request, response) => {
  const { firstName, password } = request.body;

  try {
    const signInUser = await sql`SELECT * FROM users 
              WHERE firstName=${firstName} AND password=${password}`;

    if (signInUser[0] === undefined) {
      try {
        response
          .status(200)
          .json({ message: "password or username is incorrect" });
      } catch (error) {
        response.status(400).json({ message: error });
      }
    } else {
      response.status(200).json({ message: "signed in", userData: signInUser });
    }
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
