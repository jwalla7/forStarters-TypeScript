class Customer {
    private static _customerId: number = 250;
    private customerId: number;

    constructor (private customerName: string, private customerBalance: number) {
        this.customerId = Customer._customerId++;
        this.customerName = customerName;
        this.customerBalance = customerBalance;
    }

    set updateCustomerName (updateCustomerName: string) {
        if (typeof updateCustomerName === 'string' && updateCustomerName.length >= 2) {
            this.customerName = updateCustomerName;
        } else {
            console.log(`Error, please enter customer name`);
        }
    }

    set updateCustomerBalance (updateBalance: number[]) {
        let newBalance = updateBalance.reduce<number>((preVal, curVal) => { return preVal + curVal }, 0);
        // let newBalance = 0
        // updateBalance.forEach((number) => { newBalance += number; });
        
        this.customerBalance += newBalance;
    }

    get accessCustomerId (): number { return this.customerId; }
    get accessCustomerName (): string { return this.customerName ;}
    get accessCustomerBalance (): number { return this.customerBalance; }

}

const customer_1: Customer = new Customer("John", 23);
const customer_2: Customer = new Customer("Jason", 15);

console.log(customer_1.accessCustomerId); // 250
console.log(customer_1.accessCustomerName) // John
console.log(customer_1.accessCustomerBalance); // 23
customer_1.updateCustomerBalance = [10, 5, 2, 1, 0.33];
console.log(customer_1.accessCustomerBalance); // 33

console.log(customer_2.accessCustomerId); // 251


