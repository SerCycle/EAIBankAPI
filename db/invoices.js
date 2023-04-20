const connectedKnex = require("./knex");

function createInvoice(invoice) {
    return connectedKnex("invoices").insert(invoice);
};

function getAllInvoices() {
    return connectedKnex("invoices").select("*");
};

function deleteInvoice(id) {
    return connectedKnex("invoices").where("id", id).del();
};

function updateInvoice(id, invoice) {
    return connectedKnex("invoices").where("id", id).update(invoice);
};

module.exports = {
    createInvoice,
    getAllInvoices,
    deleteInvoice,
    updateInvoice
};