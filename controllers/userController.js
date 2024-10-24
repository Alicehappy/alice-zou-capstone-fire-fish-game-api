import knex from "../config/knex.js";

export const createUser = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required." });
  }

  try {
    const [user_id] = await knex("users").insert({ name }).returning("id");

    res.status(201).json({ user_id });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user.", error });
  }
};
