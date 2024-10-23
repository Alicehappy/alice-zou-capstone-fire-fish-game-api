import knex from "../config/knex.js";

export const getFunFactByAnimalId = async (req, res) => {
  const { animalId } = req.params;

  try {
    const funFact = await knex("fun_facts").where({ animal_id: animalId }).first();
    if (funFact) {
      res.status(200).json(funFact);
    } else {
      res.status(404).json({ message: "Fun fact not found for this animal." });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch fun fact.", error });
  }
};

export const addFunFact = async (req, res) => {
  const { animal_id, fact } = req.body;

  try {
    await knex("fun_facts").insert({ animal_id, fact });
    res.status(201).json({ message: "Fun fact added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add fun fact.", error });
  }
};