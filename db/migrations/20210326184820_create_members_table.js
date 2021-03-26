exports.up = function (knex) {
  return knex.schema.createTable("members", function (table) {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("relationship");
    table.integer("age").notNullable();
    table.integer("points");
    table.boolean("is_admin").notNullable();
    table.time("created_at");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("family_id").unsigned().references("family.id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("members");
};
