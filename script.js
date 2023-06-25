// const arrayString =['lápis', 'caneta', 'tesoura'];
// console.log(arrayString.length);

// const arrayNumerico = [1,3,4];

// const arrayMix = [1,'lápis', true];
// console.log(arrayMix.includes('lápis'));

// const arrayNumero = [1];
// console.log(arrayNumero[0]);
// console.log(arrayNumero.length);

// const arrayVazio = []

// const arrayStringCopia = [...arrayString];
// console.log(arrayString);
// arrayStringCopia.push('papel');
// console.log(arrayStringCopia);

// arrayStringCopia.splice(2,2)
// console.log(arrayStringCopia);


const arrayNumerico2 = [10,2,15,3,22];

const novoArray = arrayNumerico2.slice();

console.log(novoArray);

novoArray.pop();
console.log(novoArray);

novoArray.push(6);
console.log(novoArray);

novoArray.splice(2,1);
console.log(novoArray);

console.log(arrayNumerico2);
console.log(novoArray);
