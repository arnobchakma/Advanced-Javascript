//How can get you output like array
const ages = [23, 33, 34, 45, 55, 60];
const output = [];
for (let i = 0; i < ages.length; i++) {
    const element = ages[i];
    const result = element * element;    //if you want to get the number of double//
    output.push(result);
}
console.log(output)


//another way||EASY WAY//  map er bitor kono ekta function pass korle se 3ta parameter dite pare JEMON?
const ages = [23, 33, 34, 45, 55, 60];
const result = ages.map(function(element, index, array){
    console.log(element, index, array)
})


//OR//
const ages = [23, 33, 34, 45, 55, 60];
const result = ages.map(function(element){
    return element ;     //OR// return element * element
})
console.log(result)


//Expert way better way map/filter/find
const ages = [23, 33, 34, 45, 55, 60];
const square = ages.map(element => element * element);    //OR
const result = ages.map(x => x * x);        //OR
const result = ages.map(x => x + x);        // Also
const result = ages.filter(x => x < 44);    //[ 23, 33, 34 ]
const result = ages.filter(x => x > 44);    //[ 45, 55, 60 ]
const result = ages.find(x => x > 40)       //45
console.log(result)

//filter hocche Jhe songka deya hobe tar teke na hoi boro gula dekabe or coto gula dekabe
//find hocche jhe songs deya hobe tar teke ahger/porer ekta songka se dekabe