const connectedKnex = require("./knex");

function createAccount(account) {
    return connectedKnex("accounts").insert(account);
};

function getAllAccounts() {
    return connectedKnex("accounts").select("*");
};

function deleteAccount(id) {
    return connectedKnex("accounts").where("id", id).del();
};

function updateAccount(id, account) {
    return connectedKnex("accounts").where("id", id).update(account);
};

module.exports = {
    createAccount,
    getAllAccounts,
    deleteAccount,
    updateAccount
};