function sendData(){
    let matrix = document.getElementById('matrix').value;
    let startPosition = document.getElementById('startPosition').value;
    let endPosition = document.getElementById('endPosition').value;

    let array = [];
    let rows_array = matrix.split("\n");
    for(let i = 0; i < rows_array.length; i++){
        let column_rows_array = rows_array[i].split(" ");
        let array_row = [];
        for(let j = 0; j < column_rows_array.length; j++){
            array_row.push(column_rows_array[j]);
        }
        array.push(array_row);
    }

    for(let i = 0; i < array.length; i++){
        if(array[i][i] !== '0'){
            alert("Алгоритм Флойда игнорирует петли!");
            break;
        }
    }

    $.ajax({
        type: "POST",
        url: '/scripts/script4.php',
        data: `matrix=${matrix}&start=${startPosition}&end=${endPosition}`,
        success: function (data){
            document.getElementById('output').innerHTML = data;
        },
        error: function (){
            alert("Ошибка передачи данных");
        }
    });
}