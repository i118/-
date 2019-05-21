//Цыклы

//1.Цыкл while;
let num = 50;

while (num < 55){
    num++;
    console.log(num);
}

//2.Цыкл do - нужен что-бы в начале выполнить действие а потом проверить.

let someNum = 30;

do {
    someNum++;
    console.log(someNum);
}
while (someNum < 40);

/*Цыкл for - самый используемый цыкл, можно в нём создовать переменные, а переменные
созданные ранее меняют своё значение внутри цыкла*/

let exNum = 10;

for (exNum = 20 ; exNum < 30 ; exNum++){
    console.log(exNum);
}

for (let i = 1 ; i < 6 ; i++){
    console.log(i);
}

/*можно в нутри цыклов создовать условия при не обходимости, в данном
примере цыкл закончится досрочно*/

for (let cell = 1 ; cell < 8 ; cell++){
    if (cell == 6) {
        break;
    }
    console.log(cell);
}

/*если же мы хотим пропустить какое либо событие действие
то в место break мы используем continue*/

for (let number = 1 ; number < 10 ; number++){
    if (number == 7){
        continue;
    }
    console.log(number);
}
