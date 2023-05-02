const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dbAccount = require("./db/accounts");
const dbInvoice = require("./db/invoices");
const dbPayment = require("./db/payments");
const dbTransaction = require("./db/transactions");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Accounts
app.post("/accounts", async (req, res) => {
    const results = await dbAccount.createAccount(req.body);
    res.status(201).json({ account_id: results[0] });
});

app.get("/accounts", async (req, res) => {
    const accounts = await dbAccount.getAllAccounts();
    res.status(200).json({ accounts });
});

// Invoices
app.get("/invoices", async (req, res) => {
    const invoices = await dbInvoice.getAllInvoices();
    res.status(200).json({ invoices });
});

// Payments
app.post("/payments", async (req, res) => {
    const results = await dbPayment.createPayment(req.body);
    res.status(201).json({ payment_id: results[0] });
    // console.log("done");
});

app.get("/payments", async (req, res) => {
    const payments = await dbPayment.getAllPayments();
    res.status(200).json({ payments });
});

app.get("/transactions", async (req, res) => {
    const transactions = await dbTransaction.getAllTransactions();
    res.status(200).json({ transactions });
});

app.get("/test", (req, res) =>  {
    res.status(200).json({succes: true});
});

app.listen(1337, () => console.log("server is running on port 1337"));