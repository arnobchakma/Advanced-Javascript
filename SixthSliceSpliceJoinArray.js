// //.slice hocche kon number teke start korba and kon number e ses korba sei numberta dite hobe. tumi je numberta diba se array teke oi number ta ahlada kore felbe like nicerta moto
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const likeArray = number.slice(1, 3);
console.log(likeArray);      //Ans:[ 2, 3 ]


// //.Splice ta hocche tik .slice tar moto tobe splice e ekta different hocche se notun kore number add korte pare.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const likeArray = number.splice(1, 3, 10, 11, 12);       //add number 10, 11, 12
console.log(likeArray);
console.log(number)          //Ans:[ 2, 3, 4 ]


//join hocche just element guloke join kore dei r join er braces er bitor kisu likle se oita array modhhe join kore dei. 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const likeArray = number.splice(1, 3, 10, 11, 12);
const together = number.join('hello ');
console.log(together);      //1hello 10hello 11hello 12hello 5hello 6hello 7hello 8hello 9