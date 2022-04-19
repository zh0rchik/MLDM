let error;
/**
 * функция, которая выводит значение после проверки на коректность
 */
function getValue(){
    let outPut = "{";
    let text = document.getElementById('array');
    let array = writeArray(text);
    if(array.length > 0) {
        for(let i = 0; i < array.length; i++) {
            if (array[i].length != 2) {
                error = "В строке должно находиться ДВА элемента";
                array = false;
                alert(error);
            }
        }
    }else{
        alert(error);
    }

    for(let i = 0; i < array.length; i++){
        outPut += " (" + array[i] + ") ";
    }
    outPut += "}";
    document.getElementById("Value").innerText = outPut;
}

/**
 * функция записи пар элементов в виде двумерного массива
 */
function writeArray(text){
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
            Number(array);
        }
    } else{
        array = true;
        error = "Введите хотя бы ОДНУ пару элементов";
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
 * функция, умножающая матрицу на саму себя
 */
function multiplyMatrix(matrix) {
    let array = [];

    for (let i = 0; i < matrix.length; i++) {
        array[i] = [];
    }

    for (let k = 0; k < matrix.length; k++) {
        for (let i = 0; i < matrix.length; i++) {
            let p = 0;
            for (let j = 0; j < matrix.length; j++) {
                p += matrix[i][j] * matrix[j][k];
            }
            array[i][k] = p;
        }
    }

    return array;
}

/**
 * функция, которая анализирует отношения и составляет матрицу отношений
 */
function analysis() {
    let text = document.getElementById('array');
    let array = writeArray(text);
    getValue();

    let arrayElements = new Array();

    let c = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            arrayElements[i+j+c] = array[i][j];
        }
        c++;
    }

    DeleteRepeatElements(arrayElements);

    let matrix = new Array();
    for(let i = 0; i < arrayElements.length; i++) {
        matrix[i] = new Array();
    }

    for(let i = 0; i < arrayElements.length; i++) {
        for(let j = 0; j < arrayElements.length; j++){
            matrix[i][j] = 0;
        }
    }

    let arrayKey = {};
    for(let i = 0; i < arrayElements.length; i++){
        arrayKey[i] = {num : arrayElements[i]};
    }

    /**
     * выставление единиц на места
     */
    for(let i = 0; i < array.length; i++){
        for(let a = 0; a < arrayElements.length; a++){
            for(let b = 0; b < arrayElements.length; b++){
                if (array[i][0] === arrayKey[a].num && array[i][1] === arrayKey[b].num){
                    matrix[a][b] = 1;
                }
            }
        }
    }

    let output = "";
    for(let i = 0; i < arrayElements.length; i++){
        for(let j = 0; j < arrayElements.length;j++){
            output += matrix[i][j] + " ";
        }
        output += "\n";
    }

    /**
     * Рефлексивное отношение — бинарное отношение на множестве,
     * при котором всякий элемент этого множества находится в отношении с самим собой.
     *
     * Формально, отношение рефлексивно, если свойство рефлексивности при заданных отношениях матрицей
     * характеризуется тем, что все диагональные элементы матрицы равняются 1;
     */
    let reflective = true;

    /**
     * Симметричное отношение — бинарное отношение на множестве, при котором всякий элемент для
     * каждой пары элементов множества (a, b) выполнение отношения aRb влечёт выполнение
     * отношения bRa.
     *
     * Формально, отношение симметрично, если единицы симметричны относительно главной диагонали.
     * (симметрия матрицы относительно главной диагонали)
     */
    let symmetric = true;

    /**
     * Кососимметричное (антисимметричное) отношение в математике — если {х Ry и у Rx => х = у) р,ля всех х и у из А; .
     *
     * Формально, отношение антисимметрично, если матрица не имеет
     * ни одной симметричной единицы относительно главной диагонали
     */
    let antisymmetric = true;

    /**
     * Транзитивное отношение в математике — если {х Ry и у R z => х R z) для любой тройки элементов x^y^z Е А..
     *
     * Формально, отношение рефлексивно, если некоторый элемент соотносится со вторым, а второй с третьим,
     * то первый можно соотнести с третьим (и подобные случаи 2->3->4->5 => 2->5 или 3-> 5)
     */
    let transitive = true;

    let multiplicationMatrix = multiplyMatrix(matrix);

    let outputMultiplication = "";
    for(let i = 0; i < arrayElements.length; i++){
        for(let j = 0; j < arrayElements.length;j++){
            outputMultiplication += multiplicationMatrix[i][j] + " ";
        }
        outputMultiplication += "\n";
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0 && i === j) {
                reflective = false;
            }
            if (matrix[i][j] != matrix[j][i]) {
                symmetric = false;
            }
            if (!(!((matrix[i][j] == 1) && (i != j)) || matrix[j][i] == 0)) {
                antisymmetric = false;
            }
            if (matrix[i][j] == 0 && multiplicationMatrix[i][j] == 1) {
                transitive = false;
            }
        }
    }

    let reflectiveMessage = "";
    let symmetricMessage = "";
    let antisymmetricMessage = "";
    let transitiveMessage = "";

    if (reflective == true){
        reflectiveMessage = "Отношения рефлексивны";
    } else{
        reflectiveMessage = "Отношения не рефлексивны";
    }

    if (symmetric == true){
        symmetricMessage = "Отношения симметричны";
    } else{
        symmetricMessage = "Отношения не симметричны";
    }

    if (antisymmetric == true){
        antisymmetricMessage = "Отношения кососимметричны";
    } else{
        antisymmetricMessage = "Отношения не кососимметричны";
    }

    if (transitive == true){
        transitiveMessage = "Отношения транзитивны";
    } else{
        transitiveMessage = "Отношения не транзитивын";
    }

    document.getElementById("Analysis").innerText = output + "\nРЕЗУЛЬТАТ\ " +
        "УМНОЖЕНИЕ\n" + outputMultiplication + "\n" + reflectiveMessage + "\n" + symmetricMessage + "\n"
        + antisymmetricMessage + "\n" + transitiveMessage;
}
