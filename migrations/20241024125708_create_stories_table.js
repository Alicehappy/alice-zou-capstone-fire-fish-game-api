export function up(knex) {
    return knex.schema.createTable("stories", (table) => {
      table.increments("id").primary();
      table.text("story_text").notNullable();
      table.integer("user_id").unsigned().notNullable()
        .references("id").inTable("users")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("stories");
  }