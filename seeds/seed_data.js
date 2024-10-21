export const seed = async (knex) => {
  await knex("scores").del();
  await knex("users").del();
  await knex("animals").del();
  await knex("categories").del();

  const categoryIds = await knex("categories")
    .insert([
      { name: "underwater" },
      { name: "wild" },
      { name: "birds" },
      { name: "insects" },
      { name: "farm" },
    ])
    .returning("id");

  await knex("animals").insert([
    { name: "dolphin", category_id: categoryIds[0] },
    { name: "lion", category_id: categoryIds[1] },
    { name: "eagle", category_id: categoryIds[2] },
    { name: "bee", category_id: categoryIds[3] },
    { name: "cow", category_id: categoryIds[4] },
    { name: "shark", category_id: categoryIds[0] },
  ]);

  const userIds = await knex("users")
    .insert([{ name: "Alice" }, { name: "Bob" }])
    .returning("id");

  await knex("scores").insert([
    { user_id: userIds[0], score: 100 },
    { user_id: userIds[1], score: 80 },
  ]);
};
