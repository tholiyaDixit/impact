/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments("id").primary();
    table.string("firstName", 100).notNullable;
    table.string("lastName", 100).notNullable;
    table.string("email").notNullable;
    table.string("password").notNullable;
    table.string("token").notNullable;
    table.boolean("isActive").notNullable;
    table.boolean("isDelete").notNullable;
    table.date("lastLogin").notNullable;
    table.date("createdOn").notNullable;
    table.string("photo").notNullable;
    table.bigInteger("phoneNumber").notNullable;
    table.text("metaData").notNullable;
    table.bigInteger("rollId").notNullable;
    table.string("deviceId").notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};

// INSERT INTO 
// `user`
// (`firstName`, 
// `lastName`,
// `email`,
// `password`,
// `token`,
// `isActive`,
// `isDelete`,
// `lastLogin`,
// `createdOn`,
// `photo`,
// `phoneNumber`,
// `metaData`,
// `rollId`,
// `deviceId`)
//  VALUES
//   ("dixit",
// "tholiya",
// "testing123@gmail.com",
// "testing@213",
// "fsdfsdxzazsfdsg",
// true,
// false,
// '2024-01-14',
// "'2008-11-11'",
// "dasvgdfgdf",
// 7410258963,
// "", 
// 1,
// "asda5asdsa88q")


