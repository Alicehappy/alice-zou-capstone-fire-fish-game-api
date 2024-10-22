export async function seed(knex) {
  await knex("one_category_sentences").del();
  await knex("two_category_sentences").del();
  await knex("three_category_sentences").del();

  await knex("one_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin swims gracefully",
      animal_one_id: 1,
    },
    {
      sentence_type: "default",
      sentence: "The lion roars loudly.",
      animal_one_id: 2,
    },
  ]);

  await knex("one_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence: "The dolphin jumps out of the water.",
      animal_one_id: 1,
    },
    {
      sentence_type: "custom",
      sentence: "The lion enjoys the sunshine.",
      animal_one_id: 2,
    },
  ]);

  await knex("two_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin and lion are best friends.",
      animal_one_id: 1,
      animal_two_id: 2,
    },
  ]);

  await knew("two_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence: "The dolphin and lion race across the ocean.",
      animal_one_id: 1,
      animal_two_id: 2,
    },
  ]);

  await knex("three_category_sentences").insert([
    {
      sentence_type: "default",
      sentence: "The dolphin, lion, and eagle are on an adventure.",
      animal_one_id: 1,
      animal_two_id: 2,
      Animal_three_id: 3,
    },
  ]);

  await knex("three_category_sentences").insert([
    {
      sentence_type: "custom",
      sentence:
        "The dolphin, lion, and eagle explore a tropical island together.",
      animal_one_id: 1,
      animal_two_id: 2,
      animal_three_id: 3,
    },
  ]);
}
