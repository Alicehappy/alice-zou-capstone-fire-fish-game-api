import knex from "../config/knex.js";
import { mapAnimals, getTableName } from "../utils/helper.js";

export const getSentences = async (req, res) => {
  const { categoryCount, type, animals } = req.query;

  try {
    const table = getTableName(categoryCount);
    const sentences = await knex(table).where({
      sentence_type: type,
      ...mapAnimals(animals),
    });

    res.json(sentences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveSentence = async (req, res) => {
  const { categoryCount, type, sentence, animals } = req.body;

  try {
    const table = getTableName(categoryCount);
    await knex(table).insert({
      sentence_type: type,
      sentence,
      ...mapAnimals(animals),
    });

    res.status(201).json({ message: "Sentence saved successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
