<?php
    $matrix = $_POST['matrix'];
    $start = $_POST['start'];
    $end = $_POST['end'];

    $row_matrix = explode("\n", $matrix);

    $array = [];
    $array_ways = []; // матрица путей

    for($i = 0; $i < count($row_matrix);$i++){
        $column_row_matrix = explode(' ', $row_matrix[$i]);
        $array_row = [];

        for($j = 0; $j < count($column_row_matrix); $j++){
            if($column_row_matrix[$j] === '*'){
                array_push($array_row, INF);
            } else{
                array_push($array_row, $column_row_matrix[$j]);
            }
        }

        array_push($array, $array_row);
    }

    
    // инициализация матрицы путей
    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            $array_ways[$i][$j] = $i;                      //задаёт путь до вершины напряму, если есть
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