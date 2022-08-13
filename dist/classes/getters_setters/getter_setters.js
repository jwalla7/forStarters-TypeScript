"use strict";
class CarWashService {
    constructor(ultimateWashPrice, ultimateWaxPrice, quickWashPrice, quickWaxPrice) {
        this.ultimateWashPrice = ultimateWashPrice;
        this.ultimateWaxPrice = ultimateWaxPrice;
        this.quickWashPrice = quickWashPrice;
        this.quickWaxPrice = quickWaxPrice;
        this.ultimateWashPrice = ultimateWashPrice;
        this.ultimateWaxPrice = ultimateWaxPrice;
        this.quickWashPrice = quickWashPrice;
        this.quickWaxPrice = quickWaxPrice;
    }
    set updateUltimateWashPrice(priceUpdate) { this.ultimateWashPrice = priceUpdate; }
    set updateUltimateWaxPrice(priceUpdate) { this.ultimateWaxPrice = priceUpdate; }
    set updateQuickWashPrice(priceUpdate) { this.quickWashPrice = priceUpdate; }
    set updateQuickWaxPrice(priceUpdate) { this.quickWaxPrice = priceUpdate; }
    get accessUltimateWashPrice() { return this.ultimateWashPrice; }
    get accessUltimateWaxPrice() { return this.ultimateWaxPrice; }
    get accessQuickWashPrice() { return this.quickWashPrice; }
    get accessQuickWaxPrice() { return this.quickWaxPrice; }
}
class Customer {
    constructor(customerId, customerName, customerBalance) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerBalance = customerBalance;
        this.customerId += customerId++;
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
const customer_1 = new Customer(1, "John", 23);
console.log(customer_1.accessCustomerBalance); // 23
//# sourceMappingURL=getter_setters.js.map