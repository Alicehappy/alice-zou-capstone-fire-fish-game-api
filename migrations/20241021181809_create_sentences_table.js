export const up = async (knex) => {
  await knex.schema.createTable("one_category_sentences", (table) => {
    table.increments("id").primary();
    table.enu("sentence_type", ["default", "custom"]).notNullable();
    table.text("sentence").notNullable();
    table.integer("animal_one_id").unsigned().references("id").inTable("animals");
  });

  await knex.schema.createTable("two_category_sentences", (table) => {
    table.increments("id").primary();
    table.enu("sentence_type", ["default", "custom"]).notNullable();
    table.text("sentence").notNullable();
    table
      .integer("animal_one_id")
      .unsigned()
      .references("id")
      .inTable("animals");
    table
      .integer("animal_two_id")
      .unsigned()
      .references("id")
      .inTable("animals");
  });

  await knex.schema.createTable("three_category_sentences", (table) => {
    table.increments("id").primary();
    table.enu("sentence_type", ["default", "custom"]).notNullable();
    table.text("sentence").notNullable();
    table
      .integer("animal_one_id")
      .unsigned()
      .references("id")
      .inTable("animals");
    table
      .integer("animal_two_id")
      .unsigned()
      .references("id")
      .inTable("animals");
    table
      .integer("animal_three_id")
      .unsigned()
      .references("id")
      .inTable("animals");
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("three_category_sentences");
  await knex.schema.dropTableIfExists("two_category_sentences");
  await knex.schema.dropTalbeIfExists("one_category_sentences");
};
