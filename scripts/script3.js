let error;

/**
 * Коренктность ввода
 */
function validate1(str) {
    let array = false;
    if (str.value.length > 0)
        array = str.value.split(' ');
    else
    {
        error = "Введите хотя бы один элемент";
        array = false;
    }

    return array;
}

/**
 * Коренктность ввода отношений
 */
function validate2(text){
    let array;
    let str;
    array = false;
    if(text.value.length > 0) {
        array = new Array();
        str = text.value.split('\n');

        for(let i = 0; i < str.length; i++){
            if (str[i].length > 0) {
                array[i] = str[i].split(' ');
            } else{
                array = false;
                error = "Одна из строк пустая"
            }
        }
    } else{
        array = false;
        error = "Введите хотя бы ОДНО отношение";
    }

    return array;
}


/**
 * Удаление повторяющихся элементов множеств
 */
function DeleteRepeatElements(array)
{
    array.sort();
    for(let i = 0; i < array.length - 1; i++)
    {
        if(array[i] == array[i+1])
        {
            array.splice(i,1); // удаление элемента массива, а на место его массив со следующим индексом
            i--;
        }
    }
}

/**
 * Проверка наличия элементов отношения во множествах
 */
function check(array1, array2, Array){
    let flag = true;

    for(let i = 0; i < Array.length; i++){
        if(flag == true){
            flag = array1.includes(Array[i][0]);
            if(flag == false){
                error = "Ошибка: введен элемент, которго нет в одном из множеств";
                break
            }
        }
    }

    if(flag == true){
        for(let i = 0; i < Array.length;i++){
            if(flag == true){
                flag = array2.includes(Array[i][1]);
                if(flag == false){
                    error = "Ошибка: введен элемент, которго нет в одном из множеств";
                    break
                }
            }
        }
    }

    return flag;
}

function analysis(){
    let text = document.getElementById('array');
    let str1 = document.getElementById('array1');
    let str2 = document.getElementById('array2');


    let array1 = validate1(str1);
    let array2 = validate1(str2);

    let row = array1.length;
    let column = array2.length;

    let array = validate2(text);
    let flag;

    if(array != false)
        flag = check(array1, array2, array);

    if(array1 == false || array2 == false || array == false || flag == false){
        alert(error);
    } else{

        let arrayElementsA = array1;
        DeleteRepeatElements(arrayElementsA);

        let arrayElementsB = array2;
        DeleteRepeatElements(arrayElementsB);

        let matrix = new Array();
        for(let i = 0; i < arrayElementsA.length; i++) {
            matrix[i] = new Array();
        }

        for(let i = 0; i < arrayElementsA.length; i++) {
            for(let j = 0; j < arrayElementsB.length; j++){
                matrix[i][j] = 0;
            }
        }

        let arrayKeyA = {};
        for(let i = 0; i < arrayElementsA.length; i++){
            arrayKeyA[i] = {num : arrayElementsA[i]};
        }

        let arrayKeyB = {};
        for(let i = 0; i < arrayElementsB.length; i++){
            arrayKeyB[i] = {num : arrayElementsB[i]};
        }

        /**
         * выставление единиц на места
         */
        for(let i = 0; i < array.length; i++){
            for(let a = 0; a < arrayElementsA.length; a++){
                for(let b = 0; b < arrayElementsB.length; b++){
                    if (array[i][0] === arrayKeyA[a].num && array[i][1] === arrayKeyB[b].num){
                        matrix[a][b] = 1;
                    }
                }
            }
        }

        let output = "_| ";
        for(let i = 0; i < arrayElementsB.length;i++){
            output += "<u>" + arrayElementsB[i] + "</u>" + " ";
        }
        output += "<br>";

        for(let i = 0; i < arrayElementsA.length; i++){
            output += arrayElementsA[i] + "| ";
            for(let j = 0; j < arrayElementsB.length;j++){
                output += matrix[i][j] + " ";
            }
            output += "<br>";
        }

        let flagFunctionRow = true;
        let flagFunctionColumn = true;

        for (let i = 0; i < matrix.length; i++) {
            let countRow = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    countRow += 1;
                }
                if (countRow > 1) {
                    flagFunctionRow = false;
                    break;
                }
            }
            if (!flagFunctionRow)
                break;
            if (countRow === 0)
                flagFunctionRow = false;
        }

        for (let i = 0; i < matrix[0].length; i++) {
            let countColumn = 0;
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[j][i] === 1) {
                    countColumn += 1;
                }
                if (countColumn > 1) {
                    flagFunctionColumn = false;
                    break;
                }
            }
            if (!flagFunctionColumn)
                break;
            if (countColumn === 0)
                flagFunctionColumn = false;
        }

        let messageFunctionRow = " ";
        let messageFunctionColumn = " ";

        if(flagFunctionRow){
            messageFunctionRow = "Является функцией А к В";
        } else{
            messageFunctionRow = "Не является функцией А к В";
        }

        if(flagFunctionColumn){
            messageFunctionColumn = "Является функцией B к A";
        } else{
            messageFunctionColumn = "Не является функцией B к A";
        }



        document.getElementById("Analysis").innerHTML = output;
        document.getElementById("Result").innerHTML = messageFunctionRow + "<br>" + messageFunctionColumn;
    }

}



