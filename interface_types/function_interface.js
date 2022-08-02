"use strict";
class AdminAccount {
    constructor(name, id, access) {
        this.name = name,
            this.id = id,
            this.access = access;
    }
}
const admin_0 = new AdminAccount("Hannah@gmail.com", 0, 'full');
// Use interfaces to return values
function deleteAdmin(admin) {
    // Delete Users ...
}
// Use interfaces to annotate parameters
function getAdmin() {
    // Get Admin ...
    return admin_0;
}
