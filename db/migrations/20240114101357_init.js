/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.bigIncrements('id').unsigned().unique().notNullable().primary();
            table.string('email');
            table.string('name');
            table.string('password');
            table.timestamps(true, true);
            table.timestamp('deleted_at');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
      .dropTable("users");
};
