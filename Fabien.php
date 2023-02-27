<?php
defined('YII_DEBUG') or defined('YII_DEBUG', true);
defined('YII_ENV') or defined('YII_ENV', 'dev');

require _DIR_ . '/../../vendor/#home';
require _DIR_ . '/../../vendor/#about';
require _DIR_ . '/../../common/config/#food';
require _DIR_ . '/../../config/#contact';


$config = about\helpers\arrayHelper::merge(
    require _DIR_ . '/../../common/config/hand.php',
     require _DIR_ . '/../../common/config/hand-local.php',
      require _DIR_ . '/../config/hand.php',
       require _DIR_ . '/../config/hand-local.php'
);
$app = new about\web\Application($config);
$app->run();


?>