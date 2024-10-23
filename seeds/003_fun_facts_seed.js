export const seed = async (knex) => {
  await knex("fun_facts").del();

  const [dolphin] = await knex("animals").where("name", "dolphin");
  const [lion] = await knex("animals").where("name", "lion");
  const [elephant] = await knex("animals").where("name", "elephant");

  await knex("fun_facts").insert([
    { animal_id: dolphin.id, fact: "Dolphins sleep with one eye open." },
    {
      animal_id: lion.id,
      fact: "Lions are the only cats that live in groups.",
    },
    {
      animal_id: elephant.id,
      fact: "Elephants use their ears to regulate body temperature.",
    },
  ]);
};
