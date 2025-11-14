function deposit(balance, amount) {
    console.log(`Depositing ${amount} to balance ${balance}`);

    
    if (typeof balance !== 'number' || typeof amount !== 'number') {
        throw new Error("Invalid input");
    }
    if (amount <= 0) {
        throw new Error("Invalid input");
    }

    return balance + amount;
}

function withdraw(balance, amount) {
    console.log(`Withdrawing ${amount} from balance ${balance}`);

    if (typeof balance !== 'number' || typeof amount !== 'number') {
        throw new Error("Invalid input");
    }
    if (amount <= 0) {
        throw new Error("Invalid input");
    }
    if (amount > balance) {
        throw new Error("Insufficient funds");
    }

    return balance - amount;
}

module.exports = { deposit, withdraw }; //yee
