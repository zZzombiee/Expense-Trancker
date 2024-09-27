import { sql } from "../../src/database/index";

exports.signUp = async (request, response) => {
  const { firstName, email, password, img } = request.body;
  try {
    const newUser =
      await sql`INSERT INTO users(firstname,email,password,avatar_img)
              VALUES (${firstName},${email},${password},${img})
              returning *`;
    response.status(200).json({ message: "Greated new user", data: newUser });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
