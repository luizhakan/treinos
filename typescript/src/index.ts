// string, boolean, number, ...
const x: number = 10;
console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste" não vai funcionar, porque por inferencia o tipo de y é number
// annotation é quando a minha tipagem está explicita
let z: number = 12;

// tipos básicos
let nome: string = "Luiz";
let idade: number = 19;
let admin: boolean = true;

// string != string
console.log(typeof idade);

nome = "Luiz Hakan";
idade = 19;
admin = true;

console.log(nome);

// object
const numeros: number[] = [1, 2, 3];

console.log(numeros.length);
// console.log(numeros.toUpperCase()); A propriedade 'toUpperCase' não existe no tipo 'number[]'.ts(2339)

console.log(nome.toUpperCase());

// tuplas
let minhaTupla: [number, string, string[]];
minhaTupla = [5, "Luiz", ["luiz", "hakan"]];
// minhaTupla = [true, true, false]; O tipo 'boolean' não pode ser atribuído ao tipo 'number'.ts(2322)

// object literals -> {prop: value}

const user: { name: string; age: number } = {
  name: "Luiz Hakan",
  age: 19,
};

console.log(user);

// o tipo any aceita qualquer tipo de valor
let a: any = 0;
a = "teste";
a = true;
a = [];
// isso é contra o objetivo do typescript, só deve usar em casos específicos
// union type
let id: string | number = "10";
id = 200;
// id = true; O tipo 'boolean' não pode ser atribuído ao tipo 'string | number'.ts(2322)

// type alias
type meuTipoId = number | string;
const userId: meuTipoId = 10;
const productId: meuTipoId = "0001";

// enum
// tamanho de roupas (size: Médio, size: Pequeno)

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: Size.M,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;
teste = "autenticado";
teste = null;

// funcoes
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(2, 2));
// console.log(sum(2, true)); O argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'number'.ts(2345)

function digaOla(name: string): string {
  return `Olá, ${name}`;
}
console.log(digaOla("Luiz"));
// console.log(digaOla(19)); O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.ts(2345)

// void é um tipo que não retorna nada

function saudacao(name: string, saudacao?: string) {
  console.log(`Olá, ${saudacao} ${name}`);
}

// saudacao("Luiz"); Olá, undefined Luiz
saudacao("Luiz", "Sr");

// interfaces
interface FuncaoMatematicaParametros {
  n1: number;
  n2: number;
}

function somaNumeros(nums: FuncaoMatematicaParametros) {
  return nums.n1 + nums.n2;
}
console.log(somaNumeros({ n1: 2, n2: 2 }));

function multiplicaNumeros(nums: FuncaoMatematicaParametros) {
  return nums.n1 * nums.n2;
}
console.log(multiplicaNumeros({ n1: 2, n2: 2 }));

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
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
    name
    role
    aprovado

    constructor(name: string, role: string, aprovado: boolean){
        this.name = name;
        this.role = role;
        this.aprovado = aprovado;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }
}

const usuario1 = new User("luizhakan", "admin", true);
console.log(usuario1);
usuario1.showUserName();

// interface em classes
interface IVeiculo {
    marca: string
    mostrarMarca(): void
}

class Carros implements IVeiculo {
    marca
    wheels

    constructor(marca: string, wheels: number){
        this.marca = marca;
        this.wheels = wheels;
    }

    mostrarMarca(): void{
        console.log(`A marca do carro é ${this.marca}`);
    }
}

const impala = new Carros("Chevrolet", 4);
impala.mostrarMarca();

// herança

class SuperCarro extends Carros {
    motor

    constructor(marca: string, wheels: number, motor: number){
        super(marca, wheels);
        this.motor = motor;
    }
}

const a4 = new SuperCarro("Audi", 4, 2.0);
console.log(a4);
