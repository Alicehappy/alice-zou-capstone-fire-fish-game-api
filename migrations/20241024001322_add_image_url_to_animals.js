export async function up(knex) {
    await knex.schema.alterTable("animals", (table) => {
      table.string("image_url").notNullable();
    });
  }
  
  export async function down(knex) {
    await knex.schema.alterTable("animals", (table) => {
      table.dropColumn("image_url");
    });
  }