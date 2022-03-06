<DOCTYPE html>
<html lang = "en">
    <head>
        <title>Лабораторная работа №1</title>
        <link rel = "stylesheet" href = "styles/style.css">
        <script type = "text/javascript" src = "/scripts/script1.js"></script>
    </head>

    <body>
        <h3>Лабораторная работа №1</h3>
        <div>
            <p>
                Формат ввода:<br>
                jcib<br>
                j - нечётная цифра<br>
                c - цифра<br>
                i - чётная цифра<br>
                b - буква<br>
            </p>
        </div>
        <form method="" action = "">

            <table>
                <tr>
                    <td>Массив №1</td>
                    <td><input = "text" id = "array1" size = "60"></td>
                </tr>
                <tr>
                    <td>Массив №2</td>
                    <td><input = "text" id = "array2" size = "60"></td>
                </tr>
            </table>

            <input type = "button" value = "Объединение" onclick="union();">
            <input type = "button" value = "Пересечение" onclick="intersection();">
            <input type = "button" value = "Дополнение A/B B/A" onclick="addition();">
            <input type = "button" value = "Симитрическая разность" onclick="SymmetricDifference()">

        </form>

        <div id = "ResultUnion"></div> <br>
        <div id = "ResultInteraction"></div> <br>
        <div id = "ResultAddition"></div> <br>
        <div id = "SymmetricDifference"></div> <br>

    </body>
</html>