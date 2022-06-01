<?php
    $matrix = $_POST['matrix'];

    $row_matrix = explode("\n", $matrix);

    $array = []; //Матрица

    for($i = 0; $i < count($row_matrix);$i++){
        $column_row_matrix = explode(' ', $row_matrix[$i]);
        $array_row = [];

        for($j = 0; $j < count($column_row_matrix); $j++){
                array_push($array_row, $column_row_matrix[$j]);
        }

        array_push($array, $array_row);
    }

    $n = count($column_row_matrix);

    for ($k = 0; $k < count($column_row_matrix); $k++)
        for ($i = 0; $i < count($column_row_matrix); $i++)
            for ($j = 0; $j < count($column_row_matrix); $j++)
                $array[$i][$j] = ($array[$i][$j] || ($array[$i][$k] && $array[$k][$j]));

    for ($i = 0; $i < count($column_row_matrix); $i++) {
        echo "<br>";
        for ($j = 0; $j < count($column_row_matrix); $j++) {
            if ($array[$i][$j])
                echo "1";
            else
                echo "0";
            echo " ";
        }
    }

?>