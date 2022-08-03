class AdminAccount {
    name: string;
    id: number;
    access: string;

    constructor(name: string, id: number, access: string) {
        this.name = name,
        this.id = id,
        this.access = access
    }
}

interface Admin {
    name: string;
    id: number;
    access: string;
}

const admin_0: Admin = new AdminAccount("Hannah@gmail.com", 0, 'full')

// Use interfaces to return values
function deleteAdmin(admin: Admin) {
    // Delete Users ...
}

// Use interfaces to annotate parameters
function getAdmin(): Admin {
    // Get Admin ...
    return admin_0
}