export const up =  async (knex) => {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
    });

    await knex.schema.createTable("scores", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable();
        table.integer("score").notNullable();
        table.foreign("user_id").references("users.id").onDelete("CASCADE");
    });
};

export const down = async (knex) => {
    await knex.schema.dropTableIfExists("scores");
    await knex.schema.dropTableIfExists("users");
};