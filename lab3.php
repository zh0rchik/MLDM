<DOCTYPE html>
    <html lang = "en">

    <head>
        <meta charset="UTF-8">
        <title>Лабораторная работа №3</title>
        <script type = "text/javascript" src = "scripts/script3.js"></script>
    </head>

    <body>
        <h3>Лабораторная работа №3</h3>
            <table>
                <tr>
                    <td>Множество A: </td>
                    <td><input ="text" id = "array1"  size = "60"></td>
                </tr>
                <tr>
                    <td>Множество B: </td>
                    <td><input ="text" id = "array2"  size = "60"></td>
                </tr>
                <tr>
                    <td>Ввод элементов отношения: </td>
                    <td><textarea id = "array" size = "60" placeholder="Первый столбец элемент из множества А, второй - из множества В"></textarea></td>
                </tr>
            </table>
        <input type = "button" value = "Анализ" onclick="analysis()">

        <p id = "Analysis"></p>
        <p id = "Result"></p>
    </body>
    </html>