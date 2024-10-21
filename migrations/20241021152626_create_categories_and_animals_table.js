export const up = async (knex) => {
  await knex.schema.createTable("categories", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
  });

  await knex.schema.createTable("animals", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.integer("category_id").unsigned().notNullable();
    table
      .foreign("category_id")
      .references("categories.id")
      .onDelete("CASCADE");
  });

  await knex.schema.createTable("default_sentences", (table) => {
    table.increments("id").primary();
    table.text("sentence").notNullable();
    table.integer("animal_id").unsigned().notNullable();
    table.foreign("animal_id").references("animals.id").onDelete("CASCADE");
  });

  await knex.schema.createTable("multi_category_sentences", (table) => {
    table.increments("id").primary();
    table.text("sentence").notNullable();
    table.json("category_animal_pairs").notNullable();
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("multi_category_sentences");
  await knex.schema.dropTableIfExists("default_sentences");
  await knex.schema.dropTableIfExists("animals");
  await knex.schema.dropTableIfExists("categories");
};
