<?php

    $dir    = '../staged';
    $stagedFiles = scandir($dir);

    $json = json_encode($stagedFiles);

    echo $json;
?>