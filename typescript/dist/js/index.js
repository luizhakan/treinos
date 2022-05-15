"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
// string, boolean, number, ...
const x = 10;
console.log(x);
// inferencia x annotation
let y = 12;
// y = "teste" não vai funcionar, porque por inferencia o tipo de y é number
// annotation é quando a minha tipagem está explicita
let z = 12;
// tipos básicos
let nome = "Luiz";
let idade = 19;
let admin = true;
// string != string
console.log(typeof idade);
nome = "Luiz Hakan";
idade = 19;
admin = true;
console.log(nome);
// object
const numeros = [1, 2, 3];
console.log(numeros.length);
// console.log(numeros.toUpperCase()); A propriedade 'toUpperCase' não existe no tipo 'number[]'.ts(2339)
console.log(nome.toUpperCase());
// tuplas
let minhaTupla;
minhaTupla = [5, "Luiz", ["luiz", "hakan"]];
// minhaTupla = [true, true, false]; O tipo 'boolean' não pode ser atribuído ao tipo 'number'.ts(2322)
// object literals -> {prop: value}
const user = {
  name: "Luiz Hakan",
  age: 19,
};
console.log(user);
// o tipo any aceita qualquer tipo de valor
let a = 0;
a = "teste";
a = true;
a = [];
// isso é contra o objetivo do typescript, só deve usar em casos específicos
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "0001";
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
  Size["P"] = "Pequeno";
  Size["M"] = "M\u00E9dio";
  Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
  name: "Camisa gola V",
  size: Size.M,
};
console.log(camisa);
// literal types
let teste;
teste = "autenticado";
teste = null;
// funcoes
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 2));
// console.log(sum(2, true)); O argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.ts(2345)
function digaOla(name) {
  return `Olá, ${name}`;
}
console.log(digaOla("Luiz"));
// console.log(digaOla(19)); O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.ts(2345)
// void é um tipo que não retorna nada
function saudacao(name, saudacao) {
  console.log(`Olá, ${saudacao} ${name}`);
}
// saudacao("Luiz"); Olá, undefined Luiz
saudacao("Luiz", "Sr");
function somaNumeros(nums) {
  return nums.n1 + nums.n2;
}
console.log(somaNumeros({ n1: 2, n2: 2 }));
function multiplicaNumeros(nums) {
  return nums.n1 * nums.n2;
}
console.log(multiplicaNumeros({ n1: 2, n2: 2 }));
// narrowing
// checagem tipos
function doSomething(info) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics
function showArraysItems(arr) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}
const a1 = [1, 2, 3, 4];
const a2 = ["a", "b", "c", "d"];
showArraysItems(a1);
showArraysItems(a2);
// classes
class User {
  name;
  role;
  aprovado;
  constructor(name, role, aprovado) {
    this.name = name;
    this.role = role;
    this.aprovado = aprovado;
  }
  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }
}
const usuario1 = new User("luizhakan", "admin", true);
console.log(usuario1);
usuario1.showUserName();
class Carros {
  marca;
  wheels;
  constructor(marca, wheels) {
    this.marca = marca;
    this.wheels = wheels;
  }
  mostrarMarca() {
    console.log(`A marca do carro é ${this.marca}`);
  }
}
const impala = new Carros("Chevrolet", 4);
impala.mostrarMarca();
// herança
class SuperCarro extends Carros {
  motor;
  constructor(marca, wheels, motor) {
    super(marca, wheels);
    this.motor = motor;
  }
}
const a4 = new SuperCarro("Audi", 4, 2.0);
console.log(a4);
// decorators
// constructor decorators
function BaseParametros() {
  return function (constructor) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}
let Pessoa = class Pessoa {
  name;
  constructor(name) {
    this.name = name;
  }
};
Pessoa = __decorate([BaseParametros()], Pessoa);
const sam = new Pessoa("Sam");
console.log(sam);
