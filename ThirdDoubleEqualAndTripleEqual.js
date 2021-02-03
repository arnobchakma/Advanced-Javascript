// const first = 12;    condition true with double equal
// const second = 12;   condition true with triple equal

// const first = 11;        condition true with double equal
// const second = '11';     condition false with triple equal

// const first = 1;         condition true with double equal
// const second = true;     condition false with triple equal

const first = 0;
const second = false;
if(first == second){
    console.log('Condition is true')
}
else {
    console.log('condition is false')
}

//Double Equal er ketre
//11, "11" songkar sate same string songka hole true hobe
//1, true   1 er sate true equal korle condition true hobe
//0,false   0 er sate false equal korle condition true hobe

//Triple Equal er ketre
//Jokon value and type duitai same hobe sudu tokon e condition true hobe

//Double equal sudu type check kore, jhe tar moto type kisu ache kina jodi take tokon se oita true hichebe dore nei.

//Triple equal value and type duitai check kore jodi oi duitar moddhe ekdom same to same take tokon se sudu oitake true hichebe dore nei.