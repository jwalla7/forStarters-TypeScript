"use strict";
class Customer {
    constructor(customerName, customerBalance) {
        this.customerName = customerName;
        this.customerBalance = customerBalance;
        this.customerId = Customer._customerId++;
        this.customerName = customerName;
        this.customerBalance = customerBalance;
    }
    set updateCustomerName(updateCustomerName) {
        if (typeof updateCustomerName === 'string' && updateCustomerName.length >= 2) {
            this.customerName = updateCustomerName;
        }
        else {
            console.log(`Error, please enter customer name`);
        }
    }
    set updateCustomerBalance(updateBalance) {
        let newBalance = updateBalance.reduce((preVal, curVal) => { return preVal + curVal; }, 0);
        // let newBalance = 0
        // updateBalance.forEach((number) => { newBalance += element; });
        this.customerBalance += newBalance;
    }
    get accessCustomerId() { return this.customerId; }
    get accessCustomerName() { return this.customerName; }
    get accessCustomerBalance() { return this.customerBalance; }
}
Customer._customerId = 250;
const customer_1 = new Customer("John", 23);
const customer_2 = new Customer("Jason", 15);
console.log(customer_1.accessCustomerId); // 250
console.log(customer_1.accessCustomerName); // John
console.log(customer_1.accessCustomerBalance); // 23
customer_1.updateCustomerBalance = [10, 5, 2, 1, 0.33];
console.log(customer_1.accessCustomerBalance); // 33
console.log(customer_2.accessCustomerId); // 251
//# sourceMappingURL=getters_setters.js.map