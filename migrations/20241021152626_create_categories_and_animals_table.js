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
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("animals");
  await knex.schema.dropTableIfExists("categories");
};
