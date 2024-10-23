import knex from "../config/knex.js";

export const getTopScores = async (req, res) => {
  try {
    const scores = await knex("scores")
      .select("scores.id", "users.name as user_name", "scores.score")
      .join("users", "scores.user_id", "users.id")
      .orderBy("scores.score", "desc")
      .limit(10);
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch scores.", error });
  }
};

export const saveScore = async (req, res) => {
  const { user_name, score } = req.body;
  try {
    let user = await knex("users").where({ name: user_name }).first();

    if (!user) {
      const [userId] = await knex("users")
        .insert({ name: user_name })
        .returning("id");
      user = { id: userId };
    }

    await knex("scores").insert({ user_id: user.id, score });
    res.status(201).json({ message: "Score saved successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save score.", error });
  }
};
