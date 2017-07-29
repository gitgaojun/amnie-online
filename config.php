<?php
// HTTP
define('HTTP_SERVER', 'http://54.169.108.44/');

// HTTPS
define('HTTPS_SERVER', 'http://54.169.108.44/');

// DIR
define('DIR_APPLICATION', '/data/www/byifree-online/upload/catalog/');
define('DIR_SYSTEM', '/data/www/byifree-online/upload/system/');
define('DIR_IMAGE', '/data/www/byifree-online/upload/image/');
define('DIR_STORAGE', DIR_SYSTEM . 'storage/');
define('DIR_LANGUAGE', DIR_APPLICATION . 'language/');
define('DIR_TEMPLATE', DIR_APPLICATION . 'view/theme/');
define('DIR_CONFIG', DIR_SYSTEM . 'config/');
define('DIR_CACHE', DIR_STORAGE . 'cache/');
define('DIR_DOWNLOAD', DIR_STORAGE . 'download/');
define('DIR_LOGS', DIR_STORAGE . 'logs/');
define('DIR_MODIFICATION', DIR_STORAGE . 'modification/');
define('DIR_SESSION', DIR_STORAGE . 'session/');
define('DIR_UPLOAD', DIR_STORAGE . 'upload/');

// DB
define('DB_DRIVER', 'mpdo');
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'byifree-online');
define('DB_PORT', '3306');
define('DB_PREFIX', '');