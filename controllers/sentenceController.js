import knex from "../knexfile.js";

export const getSentences = async (req, res) => {
  const { type, categories, animals } = req.query;

  try {
    const table = getTableName(categories.length);
    const sentences = await knex(table).where({
      sentence_type: type,
      ...mapCategories(categories),
      ...mapAnimals(animals),
    });

    res.json(sentences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveSentence = async (req, res) => {
  const { type, sentence, categories, animals } = req.body;

  try {
    const table = getTableName(categories.length);
    await knex(table).insert({
      sentence_type: type,
      sentence,
      ...mapCategories(categories),
      ...mapAnimals(animals),
    });

    res.status(201).json({ message: "Sentence saved successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const mapCategories = (categories) => {
  return categories.reduce((acc, cat, index) => {
    const wordKey = numberToWord(index + 1);
    acc[`category_${wordKey}_id`] = cat;
    return acc;
  }, {});
};

const mapAnimals = (animals) => {
  return animals.reduce((acc, ani, index) => {
    const wordKey = numberToWord(index + 1);
    acc[`animal_${wordKey}_id`] = ani;
    return acc;
  }, {});
};

const getTableName = (categoryCount) => {
  const tableMap = {
    1: "one_category_sentences",
    2: "two_category_sentences",
    3: "three_category_sentences",
  };

  return tableMap(categoryCount);
};

const numberToWord = (num) => {
  const wordMap = {
    1: "one",
    2: "two",
    3: "three",
  };
  return wordMap[num];
};
