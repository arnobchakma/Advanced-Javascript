//break hocche jokon tumi kono array moddhe  condition apply korba jekane anek gula number ache kintu tumi sobgula number nite sasso na tokon tumi je number porjonto nite sao se number porjonto condition apply kore break korba. break er kaj muloto eitai;
const breakNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < breakNumber.length; i++) {
    if (breakNumber[i] > 5) {
        break;
    }
    console.log(breakNumber[i]) //Ans: 1 2 3 4 5
}


//suppose tumi ekta array nicho jekane -2 -4 ei rokom songka ache jegulo tumi nite sasso na tokon tumi seguloke condition apply kore "continue" diye skip korte paro. continue dile se jodi -2 -2 ei rokom songka pai se seguloke skip korbe and porer songka ki ache ta kujbe.
const breakNumber = [1, -2, 3, -4, 5, -6, 7, -8, 9];
for (let i = 0; i < breakNumber.length; i++) {
    if (breakNumber[i] < 0) {
        continue;
    }
    console.log(breakNumber[i]) //Ans: 1 3 5 7 9
}