import {Cliente} from "./Cliente.js";

export class ContaCorrente{
	static numeroDeContas =0;
	agencia;
	_cliente;
	_saldo = 0;

	constructor(agencia, cliente){
		this.agencia = agencia;
		this.cliente = cliente
		ContaCorrente.numeroDeContas += 1;
	}

	get saldo(){
		return this._saldo;
	}

	set cliente(novocliente){
		if(novocliente instanceof Cliente)
			this._cliente = novocliente;
	}

	get cliente(){
		return this._cliente;
	}
	sacar(valor){
		if(this._saldo >= valor){
			this._saldo -= valor;
			return valor;
		}else{
			return console.log("Não é possível fazer a operação");
		}
	}

	depositar(valor){
		if(valor>0){
			this._saldo += valor;
		}
		
	}

	mostrarSaldo(){
		return this._saldo;
	}

	transferir(valor, conta){
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);

	}
}