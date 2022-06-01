<DOCTYPE html>
    <html lang = "en">
    <head>
        <title>Лабораторная работа №5</title>
        <link rel = "stylesheet" href = "">
        <script type="text/javascript" src = "scripts/ajax_script5.js"></script>
        <script type = "text/javascript" src = "scripts/jquery-3.6.0.min.js"></script>
    </head>

    <body>
    <h3>Лабораторная работа №5</h3>

    <form method="" action = "">

        <table>
            <tr>
                <td>Ввод элементов</td>
                <td><textarea id = "matrix" placeholder="Введите матрицу"></textarea></td>
            </tr>
            <tr>
                <td><input type = "button" value = "Получить матрицу достижимости" onclick="sendData()"></td>
            </tr>

        </table>

    </form>

    <div id = "output"></div> <br>


    </body>
    </html>