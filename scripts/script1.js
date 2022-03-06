/**
 * Дополнительные функции
 */

/**
 * Алгоритм сортировки массива по возрастанию - пузырьковая сортировка
 */
function sort(array)
{
    for (var i = 0; i < array.length-1; i++)
    {
        for (var j = 0; j < array.length-1-i; j++)
        {
            if (array[j+1] < array[j])
            {
                let t = array[j+1];
                array[j+1] = array[j];
                array[j] = t;
            }
        }
    }
}

/**
 * Функция записи, проверки и сортировки элементов массивов
 */
function validate(str)
{
   let array = false;
    if (str.value.length > 0)
        array = str.value.split(' ');
    else
        array = true;

    for(let i = 0 ; i < array.length; i++)
    {
        if(array[i].length != 4)
        {
            error = "Элемент множество не может быть такой длины (Подсказка: длина каждого элемента 4).";
            array = false;
            break;
        }
        /**
         * Форма элемента - jcib
         * j - нечетная цифра
         * c - цифра
         * i - четная цифра
         * b - буква
         */
        if(array[i][0] % 2 == 0)
        {
            error = "Некоректный ввод (Подсказка: первый символ всех элементов - нечётная цифра).";
            array = false;
            break;
        }
        if (!((array[i][1] >= 48) || (array[i][1] <= 57)))
        {
            error = "Некоректный ввод (Подсказка: второй символ всех элементов - цифра)";
            array = false;
            break;
        }
        if(array[i][2] % 2 != 0)
        {
            error = "Некоректный ввод (Подсказка: третий символ всех элементов - чётная цифра).";
            array = false;
            break;
        }
        if((array[i][3] < 'a') || (array[i][3] > 'z'))
        {
            error = "Некоректный ввод (Подсказка: четвёртый символ всех элементов - буква)";
            array = false;
            break;
        }
    }

    sort(array);
    DeleteRepeatElements(array);

    return array;
}

/**
 * Удаление повторяющихся элементов множеств
 */
function DeleteRepeatElements(array)
{
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
 * Функция, которая возвращает массив общих элементов
 */
function CommonElements(array1, array2)
{
    let array = [];
    if(array2.length > array1.length)
    {
        let n = 0;
        for(let i = 0; i < array1.length; i++)
        {
            for(let j = 0; j < array2.length; j++)
            {
                if(array1[i] == array2[j])
                {
                    array[n] = array2[j];
                    n++;
                    break;
                }
            }
        }
    }
    else
    {
        let n = 0;
        for(let i = 0; i < array2.length; i++)
        {
            for(let j = 0; j < array1.length; j++)
            {
                if(array2[i] == array1[j])
                {
                    array[n] = array1[j];
                    n++;
                    break;
                }
            }
        }
    }
    sort(array);

    return array;
}

/**
 * 1.Объединение
 */
function union()
{
    let str1 = document.getElementById('array1');
    let str2 = document.getElementById('array2');

    let array1 = validate(str1);
    let array2 = validate(str2);

    if(array1 == true && array2 == true)
        alert("Введите хотя бы один массив");
    if((array1 == false) || (array2 == false))
        alert(error);
    else
    {
        let len1 = 0;
        if (array1 != true)
            len1 = array1.length;
        let len2 = 0;
        if (array2 != true)
            len2 = array2.length;

        let array = [];
        for(let i = 0; i < len1+len2; i++)
        {
            if (i < len1)
            {
                array[i] = array1[i];
            }
            else
            {
                n = i - len1;
                array[i] = array2[n];
            }
        }

        sort(array);
        DeleteRepeatElements(array);

        document.getElementById("ResultUnion").innerText = "Объединение множеств: " + array;
    }
}

/**
 * 2. Пересечение
 */
function intersection()
{
    let str1 = document.getElementById('array1');
    let str2 = document.getElementById('array2');

    let array1 = validate(str1);
    let array2 = validate(str2);

    if(array1 == true && array2 == true)
        alert("Введите хотя бы один массив");
    if((array1 == false) || (array2 == false))
        alert(error);
    else
    {
        let len1 = 0;
        if (array1 != true)
            len1 = array1.length;
        let len2 = 0;
        if (array2 != true)
            len2 = array2.length;

        let array = CommonElements(array1, array2);
        sort(array);
        DeleteRepeatElements(array);

        if(array.length == 0)
            document.getElementById("ResultInteraction").innerText = "Общих элементов множеств НЕТ.";
        else
            document.getElementById("ResultInteraction").innerText = "Пересечение множеств: " + array;
    }
}

/**
 * 3. Дополнение A/B B/A (разность)
 */
function addition()
{
    let str1 = document.getElementById('array1');
    let str2 = document.getElementById('array2');

    let array1 = validate(str1);
    let array2 = validate(str2);

    if(array1 == true && array2 == true)
        alert("Введите хотя бы один массив");
    if((array1 == false) || (array2 == false))
        alert(error);
    else
    {
        let len1 = 0;
        if (array1 != true)
            len1 = array1.length;
        let len2 = 0;
        if (array2 != true)
            len2 = array2.length;

        let ArrayCommonElements = CommonElements(array1, array2);

        let n = 0;
        for(let i = 0; i < array1.length; i++)      // Удаление общих элементов
        {
            if(array1[i] == ArrayCommonElements[n])
            {
                array1.splice(i, 1);
                n++;
                i--;
            }
        }

        n = 0;
        for(let i = 0; i < array2.length; i++)      // Удаление общих элементов
        {
            if(array2[i] == ArrayCommonElements[n])
            {
                array2.splice(i, 1);
                n++;
                i--;
            }
        }

        if(array2.length == 0 && array1.length == 0)
            document.getElementById("ResultAddition").innerText = "А = В";
        else if(array2 == true || array2.length == 0)
        {
            document.getElementById("ResultAddition").innerText = "Дополнение A/B: \
        " + array1 + "; \nДополнение B/A: Множество В является подмножеством А (или В - пустое множество)";
        }
        else if(array1 == true || array2.length == 0)
        {
            document.getElementById("ResultAddition").innerText = "Дополнение A/B:\ " +
                "Множество А является подмножеством В (или А - пустое множество)" + "; \nДополнение B/A: " + array2;
        }
        else
        {
            document.getElementById("ResultAddition").innerText = "Дополнение A/B: \
        " + array1 + "; \nДополнение B/A: " + array2;
        }
    }
}


/**
 * 4.Симметрическая разность
 */
function SymmetricDifference()
{
    let str1 = document.getElementById('array1');
    let str2 = document.getElementById('array2');

    let array1 = validate(str1);
    let array2 = validate(str2);

    if(array1 == true && array2 == true)
        alert("Введите хотя бы один массив");
    if((array1 == false) || (array2 == false))
        alert(error);
    else
    {
        let len1 = 0;
        if (array1 != true)
            len1 = array1.length;
        let len2 = 0;
        if (array2 != true)
            len2 = array2.length;

        let ArrayCommonElements = CommonElements(array1, array2);

        let array = [];
        for(let i = 0; i < len1+len2; i++)
        {
            if (i < len1)
            {
                array[i] = array1[i];
            }
            else
            {
                let n = i - len1;
                array[i] = array2[n];
            }
        }

        sort(array);
        DeleteRepeatElements(array);

        let n = 0;
        for(let i = 0; i < array.length; i++)
        {
            if(array[i] == ArrayCommonElements[n])
            {
                array.splice(i, 1);
                n++;
                i--;
            }
        }
        if(array.length == 0)
        {
            document.getElementById("SymmetricDifference").innerText = "Симметрическая разность: множества\
            не имеют различных элементов" + array;
        }
        else
        {
            document.getElementById("SymmetricDifference").innerText = "Симметрическая разность: " + array;
        }
    }
}