import knex from "../knexfile.js";

export const getTopScores = async (req, res) => {
  try {
    const scores = await knex("scores")
      .select("id", "user_name", "score")
      .orderBy("score", "desc")
      .limit(10);
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch scores.", error });
  }
};

export const saveScore = async (req, res) => {
  const { user_name, score } = req.body;
  try {
    await knex("scores").insert({ user_name, score });
    res.status(201).json({ message: "Score saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save score.", error });
  }
};
