const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const dbAccount = require("./db/accounts");
const dbUser = require("./db/user");
const dbInvoice = require("./db/invoices");
const dbPayment = require("./db/payments");
const dbTransaction = require("./db/transactions");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Accounts
app.post("/accounts", async (req, res) => {
    const results = await dbAccount.createAccount(req.body);
    res.status(201).json({ VA_Number: results[0], msg: "Virtual Account Added" });
});

app.get("/accounts", async (req, res) => {
    const accounts = await dbAccount.getAllAccounts();
    res.status(200).json({ accounts });
});

app.get("/accounts/:id", async (req, res) => {
    const accountSelected = await dbAccount.selectAccount(req.params.id);
    res.status(200).json({ Selected: accountSelected[0] });
});

// User
app.post("/users", async (req, res) => {
    const results = await dbUser.createUser(req.body);
    res.status(201).json({ UserID: results[0], msg: "User Successfully Registered" });
});

app.get("/users", async (req, res) => {
    const users = await dbUser.getAllUsers();
    res.status(200).json({ users });
});

app.get("/users/:id", async (req, res) => {
    const userSelected = await dbUser.selectUser(req.params.id);
    res.status(200).json({ Selected: userSelected[0] });
});

// Invoices
app.post("/invoices", async (req, res) => {
    const results = await dbInvoice.createInvoice(req.body);
    res.status(201).json({ Invoice_Number: results[0], msg: "Invoice Created" });
});

app.get("/invoices", async (req, res) => {
    const invoices = await dbInvoice.getAllInvoices();
    res.status(200).json({ invoices });
});

app.get("/invoices/:id", async (req, res) => {
    const invoiceSelected = await dbInvoice.selectInvoice(req.params.id);
    res.status(200).json({ Selected: invoiceSelected[0] });
});

// Payments
app.post("/payments", async (req, res) => {
    const results = await dbPayment.createPayment(req.body);
    res.status(201).json({ payment_id: results[0], msg: "Payment Successfully Added" });
});

app.get("/payments", async (req, res) => {
    const payments = await dbPayment.getAllPayments();
    res.status(200).json({ payments });
});

app.get("/payments/:id", async (req, res) => {
    const paymentSelected = await dbPayment.selectPayment(req.params.id);
    res.status(200).json({ Selected: paymentSelected[0] });
});

app.delete("/payments/:id", async (req, res) => {
    await dbPayment.deletePayment(req.params.id);
    res.status(200).json({ success: true, msg: "Payments has been done" });
});


// Transaction
app.post("/transactions", async (req, res) => {
    const results = await dbTransaction.createTransaction(req.body);
    res.status(201).json({ TransactionNumber: results[0], msg: "Transaction Success" });
});

app.get("/transactions", async (req, res) => {
    const transactions = await dbTransaction.getAllTransactions();
    res.status(200).json({ transactions });
});

app.get("/transactions/:id", async (req, res) => {
    const transactionSelected = await dbTransaction.selectTransaction(req.params.id);
    res.status(200).json({ Selected: transactionSelected[0] });
});

// Route View
app.get("/home", (req, res) =>  {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/bill", (req, res) =>  {
    res.sendFile(__dirname + "/views/invoice.html");
});

app.get("/bill/:id", (req, res) =>  {
    const billID = req.params.id;
    res.sendFile(__dirname + "/views/invoice.html");
});

app.get("/paymentgateway", (req, res) =>  {
    res.sendFile(__dirname + "/views/payment.html");
});

app.get("/paymentgateway/:id", (req, res) =>  {
    const paymentID = req.params.id;
    res.sendFile(__dirname + "/views/payment.html");
});

app.listen(1337, () => console.log("server is running on port 1337"));