//-------------------------------------------- IMPORTANDO CLASSES
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Banco.js"

//-------------------------------------------- CRIANDO CLIENTE
const cliente1 = new Cliente("Vinicius", 11122233309);
const cliente2 = new Cliente("Alice", 22211133309);

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 44422233309;

//-------------------------------------------- CRIANDO CONTA CORRENTE
const contaCorrenteVini = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(2002,cliente2);
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Alice";
// conta2.cliente.cpf = 44422233309;

//-------------------------------------------- LÓGICA

contaCorrenteVini.depositar(1000);
contaCorrenteVini.transferir(350.99,conta2);

//-------------------------------------------- CONSOLES
// console.log(conta2.cliente);
// console.log(cliente2.cpf);
// console.log("Dados do",cliente1);
// console.log("Conta cliente 2:",conta2);
console.log(contaCorrenteVini);
console.log(ContaCorrente.numeroDeContas);
