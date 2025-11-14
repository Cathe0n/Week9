function deposit(balance, amount) { //deposite func
    console.log(`Depositing ${amount} to balance ${balance}`);
 if (typeof amount !== 'number' || amount <= 0) {
throw new Error("Invalid deposit amount"); //error func show thingy
    }

    const newBalance = balance + amount; //update new balance
    console.log(`New balance after deposit: ${newBalance}`);
    return newBalance;
}

function withdraw(balance, amount) { //withdraw function
    console.log(`Withdrawing ${amount} from balance ${balance}`);
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid withdraw amount"); //eror show
    }
    if (amount > balance){
        throw new Error("Insufficient funds"); //show not enough fund thingy
    }
    const newBalance = balance - amount;
    console.log(`New balance after withdraw: ${newBalance}`);
    return newBalance;
}

module.exports = {deposit, withdraw};