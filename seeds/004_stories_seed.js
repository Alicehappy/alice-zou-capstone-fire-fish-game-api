export const seed = async (knex) => {
  await knex("stories").del();

  const [Alice] = await knex("users").where("name", "Alice");
  const [Bob] = await knex("users").where("name", "Bob");

  await knex("stories").insert([
    {
      story_text: "Once upon a time, a dolphin saved a shipwrecked sailor...",
      user_id: Alice.id,
    },
    {
      story_text:
        "In the heart of the jungle, a brave lion protected his pride.",
      user_id: Alice.id,
    },
    {
      story_text:
        "In africa, there is a little elephant travelling with group finding new home...",
      user_id: Bob.id,
    },
  ]);
};
