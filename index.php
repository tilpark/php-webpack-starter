<?php
  require __DIR__ . '/vendor/autoload.php';

  use Tilpark\Webpack\Loader;

  $loader = new Loader(__DIR__);

  $jsBundlde = $loader->getBundle('js');
  $cssBundle = $loader->getBundle('css');
?>
<!DOCTYPE html>
<html>
<head>
  <title>Tilpark</title>

  <script src="<?php echo $jsBundlde ?>"></script>
  <link rel="stylesheet" href="<?php echo $cssBundle ?>" />
</head>
<body>

</body>
</html>
