export const seed = async (knex) => {
  await knex("scores").del();
  await knex("users").del();
  await knex("animals").del();
  await knex("categories").del();

  const categoryIds = await knex("categories")
    .insert([
      { name: "Underwater" },
      { name: "Wild" },
      { name: "Birds" },
      { name: "Insects" },
      { name: "Farm" },
    ])
    .returning("id");

  await knex("animals").insert([
    { name: "Shark", category_id: categoryIds[0] },
    { name: "Lion", category_id: categoryIds[1] },
    { name: "Eagle", category_id: categoryIds[2] },
    { name: "Bee", category_id: categoryIds[3] },
    { name: "Cow", category_id: categoryIds[4] },
  ]);

  const userIds = await knex("users")
    .insert([{ name: "Alice" }, { name: "Bob" }])
    .returning("id");

  await knex("scores").insert([
    { user_id: userIds[0], score: 100 },
    { user_id: userIds[1], score: 80 },
  ]);

  await knex("default_sentences").insert([
    { sentence: "The shark swims fast.", animal_id: 1 },
    { sentence: "The lion roars loud.", animal_id: 2 },
  ]);

  await knex("multi_category_sentences").insert([
    {
      sentence: "A lion and eagle are friends.",
      category_animal_paris: JSON.stringify([
        { category: "Wild", animal: "Lion" },
        {
          category: "Birds",
          animal: "Eagle",
        },
      ]),
    },
  ]);
};
