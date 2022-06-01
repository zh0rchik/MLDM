function sendData(){
    let matrix = document.getElementById('matrix').value;

    $.ajax({
        type: "POST",
        url: '/scripts/script5.php',
        data: `matrix=${matrix}`,
        success: function (data){
            document.getElementById('output').innerHTML = data;
        },
        error: function (){
            alert("Ошибка передачи данных");
        }
    });
}