function sendData(){
    let matrix = document.getElementById('matrix').value;
    let startPosition = document.getElementById('startPosition').value;
    let endPosition = document.getElementById('endPosition').value;

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