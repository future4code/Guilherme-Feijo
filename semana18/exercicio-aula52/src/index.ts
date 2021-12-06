import app from "./app";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacters";

app.get("/character", getAllCharacters);
app.post("/character", createCharacter);
app.delete("/character/:id", deleteCharacter);

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  getCPF(): string {
    return this.cpf;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  setTransactions(newTransaction: Transaction): void {
    this.transactions.push(newTransaction);
  }
}

const user1: UserAccount = new UserAccount(
  "000.000.000-00",
  "Jonas Miguel",
  51
);

console.log(user1);

//EXERCICIO 1

//a) Para executar ações que devem acontecer quando uma instância da classe é criada.

//b) uma vez

//c) através dos getters e setters

//EXERCICIO 2

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }
  getDate(): string {
    return this.date;
  }

  getValue(): number {
    return this.value;
  }

  getDescription(): string {
    return this.description;
  }
}

const transaction1: Transaction = new Transaction(
  "2021-12-03",
  234,
  "compra de alexa"
);

user1.setTransactions(transaction1);
console.log(user1);

//EXERCICIO 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
