What is closure?
Ami jodi kono ekta function teke kono arekta function ke call kori ba return kori tokon se ekta close environment toiri kore fele. Jemon...

function closure(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const close1 = closure();
console.log(close1());
console.log(close1());
console.log(close1());
console.log(close1());

const close2 = closure();
console.log(close2());
console.log(close2());
console.log(close2());
console.log(close2());


Jemon eikane ekta function er bitor arekta function ache jar fhole eita close environment toiri kore. tarpor se jokon bitore return ba call kore bairer kawke acces kore/ korte pare tokon se jodi setake use kore tokon sei function ta nijosso ekta value rakbe jeno tara nijosso ekta close environment toiri kore felche.