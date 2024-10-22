export async function seed(knex) {
  await knex("one_category_sentences").del();
  await knex("two_category_sentences").del();
  await knex("three_category_sentences").del();

  const [dolphin] = await knex("animals").where("name", "dolphin");
  const [lion] = await knex("animals").where("name", "lion");
  const [eagle] = await knex("animals").where("name", "eagle");

  await knex("one_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin swims gracefully",
      animal_one_id: dolphin.id,
    },
    {
      sentence_type: "default",
      sentence: "The lion roars loudly.",
      animal_one_id: lion.id,
    },
  ]);

  await knex("one_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence: "The dolphin jumps out of the water.",
      animal_one_id: dolphin.id,
    },
    {
      sentence_type: "custom",
      sentence: "The lion enjoys the sunshine.",
      animal_one_id: lion.id,
    },
  ]);

  await knex("two_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin and lion are best friends.",
      animal_one_id: dolphin.id,
      animal_two_id: lion.id,
    },
  ]);

  await knex("two_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence: "The dolphin and lion race across the ocean.",
      animal_one_id: dolphin.id,
      animal_two_id: lion.id,
    },
  ]);

  await knex("three_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin, lion, and eagle are on an adventure.",
      animal_one_id: dolphin.id,
      animal_two_id: lion.id,
      Animal_three_id: eagle.id,
    },
  ]);

  await knex("three_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence:
        "The dolphin, lion, and eagle explore a tropical island together.",
      animal_one_id: dolphin.id,
      animal_two_id: lion.id,
      animal_three_id: eagle.id,
    },
  ]);
}
