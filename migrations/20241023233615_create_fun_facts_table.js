export const up = async (knex) => {
    await knex.schema.createTable("fun_facts", (table) => {
      table.increments("id").primary();
      table.integer("animal_id").unsigned().notNullable();
      table.text("fact").notNullable();
      table.foreign("animal_id").references("animals.id").onDelete("CASCADE");
    });
  };
  
  export const down = async (knex) => {
    await knex.schema.dropTableIfExists("fun_facts");
  };