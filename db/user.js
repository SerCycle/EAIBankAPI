const connectedKnex = require("./knex");

function createUser(user) {
    return connectedKnex("user").insert(user);
}

function getAllUsers() {
    return connectedKnex("user").select("*");
}

function selectUser(id) {
    return connectedKnex("user").where("user_id", id).select();
}

function deleteUser(id) {
    return connectedKnex("user").where("id", id).del();
};

function updateUser(id, user) {
    return connectedKnex("user").where("id", id).update(user);
};

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    selectUser
};