//1. declare uma variavel de nome weight

let weight;

//2. que tipo de dado é a variavel acima?

console.log (typeof weight);

undefined;

/*3. declare uma variavel e defina valores pra cada um dos dados:
    *name: String
    *Age: Number (integer)
    *weight: number(float)
    *isSubscribed: Boolean
*/

    let name= 'Kaiser'
    let age='18'
    let stars='52.3'
    let isSubscribed= 'True'

//4. a variavel student abaixo é de que tipo de dado:

    let student= {
  name: 'Kaiser',
  age:'18',
  stars:'4.9',
  isSubscribed:'True'
};

console.log(`${student.name} ${student.age} de idade pesa ${student.weight}kg`);

//5. declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor

let students = []

/*6. retribua o valor para a variavel acima, colocando dentro dela o objeto student da questão 4.(não copiar e colar o objeto, mas usar o objeto criado e inserir no Array)*/

students = [
  student
]

/*7. coloque no console o valor da posição zero do array acima*/

console.log(students[0])

/*8. crie um novo student e coloque na posição 1 do array students*/

const john = {
  name: "john",
  age: 23,
  weight: 74.8,
  isSubscribed: true,
}

students = [
  student,
  john
]

/*9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? apos sua resposta, rode o codigo e veja se acertou.

console.log(a)
var a = 1

*/

//o resultado retornado sera undefined por conta do hosting de var

