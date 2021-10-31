class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Getter function for name
    getName () {
        return this.name;
    }

    // Getter function for ID
    getId () {
        return this.id;
    }   

    // Getter function for Email
    getEmail () {
        return this.email;
    }

    // Getter function for Role
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 