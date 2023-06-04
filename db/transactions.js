const connectedKnex = require("./knex");

function createTransaction(transaction) {
    return connectedKnex("transactions").insert(transaction);
};

function getAllTransactions() {
    return connectedKnex("transactions").select("*");
};

function selectTransaction(id) {
    return connectedKnex("transactions").where("transactions_id", id).select();
}

function deleteTransaction(id) {
    return connectedKnex("transactions").where("id", id).del();
};

function updateTransaction(id, transaction) {
    return connectedKnex("transactions").where("id", id).update(transaction);
};

module.exports = {
    createTransaction,
    getAllTransactions,
    deleteTransaction,
    updateTransaction,
    selectTransaction
};