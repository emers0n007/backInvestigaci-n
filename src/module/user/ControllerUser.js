const TABLE = "User";

module.exports = function (dbInyected) {
    let db = dbInyected;

    if (!db) {
        db = require("./ServiceUser");
    }

    function searhAllUsers() {
        return db.searhAllUsers(TABLE);
    }

    function searhOneUser(id, nickname) {
        return db.searhOneUser(TABLE, id, nickname);
    }

    function addUser(body) {
        return db.addUser(TABLE, body);
    }

    function modifyUser(body) {
        return db.modifyUser(TABLE, body);
    }

    function disableUser(body) {
        return db.disableUser(TABLE, body);
    }

    return {
        searhAllUsers,
        searhOneUser,
        addUser,
        modifyUser,
        disableUser
    }
}