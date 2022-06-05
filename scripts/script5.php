<?php
    $matrix = $_POST['matrix'];

    $row_matrix = explode("\n", $matrix);

    $array = []; //Матрица

    for($i = 0; $i < count($row_matrix);$i++){
        $column_row_matrix = explode(' ', trim($row_matrix[$i]));
        $array_row = [];

        for($j = 0; $j < count($column_row_matrix); $j++){
            if(count($column_row_matrix) == 1 && $column_row_matrix[$j] == '')
                die("Ошибка: лишние переносы!");
            array_push($array_row, $column_row_matrix[$j]);
        }
        array_push($array, $array_row);
    }

    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            if(count($array) != count($array[$i])){
                die("Ошибка: матрица должна быть квадратной!");
            }
        }
    }

    for($i = 0; $i < count($array); $i++){
        for($j = 0; $j < count($array[$i]); $j++){
            if($array[$i][$j] != 0 && $array[$i][$j] != 1){
                die("Ошибка: матрица должна состоять из 0 и 1!");
            }
        }
    }

    for ($k = 0; $k < count($column_row_matrix); $k++)
        for ($i = 0; $i < count($column_row_matrix); $i++)
            for ($j = 0; $j < count($column_row_matrix); $j++)
                $array[$i][$j] = ($array[$i][$j] || ($array[$i][$k] && $array[$k][$j]));

    for ($i = 0; $i < count($column_row_matrix); $i++)
        $array[$i][$i] = 1;

    for ($i = 0; $i < count($column_row_matrix); $i++) {
        for ($j = 0; $j < count($column_row_matrix); $j++) {
            if ($array[$i][$j])
                echo "1";
            else
                echo "0";
            echo " ";
        }
        echo "<br>";
    }
?>