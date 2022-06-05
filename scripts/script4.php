<?php
    $matrix = $_POST['matrix'];
    $start = $_POST['start'];
    $end = $_POST['end'];

    $row_matrix = explode("\n", $matrix);

    $array = [];
    $array_ways = []; // матрица путей

    for($i = 0; $i < count($row_matrix);$i++){
        $column_row_matrix = explode(' ', trim($row_matrix[$i]));
        $array_row = [];

        for($j = 0; $j < count($column_row_matrix); $j++){
            if(count($column_row_matrix) == 1 && $column_row_matrix[$j] == '')
                die("Ошибка: лишние переносы!");
            if($column_row_matrix[$j] != "*" && !is_numeric($column_row_matrix[$j])){
                die('Ошибка: в матрице должно содержаться цифра или "*"!');
            }
            if($column_row_matrix[$j] === '*'){
                array_push($array_row, INF);
            } else{
                array_push($array_row, $column_row_matrix[$j]);
            }
        }

        array_push($array, $array_row);
    }

    if($start > count($array) || $end > count($array) || $start <= 0 || $end <= 0)
        die("Ошибка: нет такой вершины! Подсказка: число должно быть больше 0 и меньше ". (count($array)+1) .".");
    
    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            if(count($array) != count($array[$i])){
                die("Ошибка: матрица должна быть квадратной!");
            }
        }
    }

    // инициализация матрицы путей
    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            $array_ways[$i][$j] = $i;                      //задаёт путь до вершины напрямую, если есть
        }
        $array_ways[$i][$i] = -1;
    }

    //Алгоритм Флойда
    //Матрица расстояний Ak[i,j] = min(Ak-1[i, j], Ak-1[i,k] + Ak-1[k, j])
    for($k = 0; $k < count($array); $k++){
        for($i = 0; $i < count($array); $i++){
            for($j = 0; $j < count($array); $j++){
                if($array[$i][$k] + $array[$k][$j] < $array[$i][$j]){
                    $array[$i][$j] = $array[$i][$k] + $array[$k][$j];       // укорачивает в матрице расстояний
                    $array_ways[$i][$j] = $array_ways[$k][$j];              //укорачивает путь в матрице путей
                }
            }
        }
    }

    //Последовательность вершин
    $array_node = [];
    $start--;
    $end--;

    //Проверка наличия путей из вершины
    if($array[$start][$end] == INF)
        die("Нет такого пути! Подсказка: возможно из какой-то вершины рёбра не идут.");

    while($end!=-1){
        array_push($array_node, $end+1);
        $end = $array_ways[$start][$end];
    }
    $array_node = array_reverse($array_node);

    for($i = 0; $i < count($array_node); $i++){
        if($i === 0){
            echo $array_node[$i];
        } else{
            echo '⇾'.$array_node[$i];
        }
    }
?>