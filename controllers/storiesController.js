import knex from "../config/knex.js";

export const getStoriesByUser = async (req, res) => {
  try {
    const stories = await knex("stories")
      .select("stories.id", "users.name as user_name", "stories.story_text")
      .join("users", "stories.user_id", "users.id")
      .where("users.id", req.params.user_id)
      .orderBy("stories.created_at", "desc");

    res.status(200).json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ message: "Failed to fetch stories.", error });
  }
};

export const saveStory = async (req, res) => {
  const { user_name, story_text } = req.body;

  try {
    let user = await knex("users").where({ name: user_name }).first();

    if (!user) {
      const [userId] = await knex("users")
        .insert({ name: user_name })
        .returning("id");
      user = { id: userId };
    }

    await knex("stories").insert({
      user_id: user.id,
      story_text,
    });

    res.status(201).json({ message: "Story saved successfully!" });
  } catch (error) {
    console.error("Error saving story:", error);
    res.status(500).json({ message: "Failed to save story.", error });
  }
};