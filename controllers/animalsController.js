import knex from "../config/knex.js";

export const getRandomAnimal = async (req, res) => {
  try {
    const animals = await knex("animals").select("name");
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    res.json(randomAnimal);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch animal: ", error });
  }
};
