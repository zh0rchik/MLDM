<DOCTYPE html>
    <html lang = "en">
    <head>
        <title>Лабораторная работа №4</title>
        <link rel = "stylesheet" href = "">
        <script type="text/javascript" src = "scripts/ajax_script4.js"></script>
        <script type = "text/javascript" src = "scripts/jquery-3.6.0.min.js"></script>
    </head>

    <body>
    <h3>Лабораторная работа №4</h3>

    <form method="" action = "">

        <table>
            <tr>
                <td>Ввод элементов</td>
                <td><textarea id = "matrix" placeholder="Введите матрицу"></textarea></td>
            </tr>
            <tr>
                <td>Начало</td>
                <td><input = "text" id = "startPosition" size = "1"></td>
            </tr>
            <tr>
                <td>Конец</td>
                <td><input = "text" id = "endPosition" size = "1"></td>
            </tr>
            <tr>
                <td><input type = "button" value = "Получить маршрут" onclick="sendData()"></td>
            </tr>

        </table>

    </form>

    <div id = "output"></div> <br>


    </body>
    </html>