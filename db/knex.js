const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "bank.sqlite3",
    },
    useNullAsDefault: true
});

module.exports = connectedKnex;