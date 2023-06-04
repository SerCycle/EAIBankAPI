const connectedKnex = require("./knex");

function createPayment(payment) {
    return connectedKnex("payments").insert(payment);
};

function getAllPayments() {
    return connectedKnex("payments").select("*");
};

function selectPayment(id) {
    return connectedKnex("payments").where("payment_id", id).select();
}

function deletePayment(id) {
    return connectedKnex("payments").where("payment_id", id).del();
};

function updatePayment(id, payment) {
    return connectedKnex("payments").where("id", id).update(payment);
};

module.exports = {
    createPayment,
    getAllPayments,
    deletePayment,
    updatePayment,
    selectPayment
};