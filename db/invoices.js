const connectedKnex = require("./knex");

function createInvoice(invoice) {
    return connectedKnex("Invoices").insert(invoice);
};

function getAllInvoices() {
    return connectedKnex("Invoices").select("*");
};

function deleteInvoice(id) {
    return connectedKnex("Invoices").where("id", id).del();
};

function updateInvoice(id, invoice) {
    return connectedKnex("Invoices").where("id", id).update(invoice);
};

module.exports = {
    createInvoice,
    getAllInvoices,
    deleteInvoice,
    updateInvoice
};