<?php
    namespace Config;
    $routes = Services::routes();
    $routes->setDefaultNamespace('App\Controllers');
    $routes->setTranslateURIDashes(false);
    $routes->set404Override();
    $routes->get('/', 'Usuarios::index');
    $routes->get('/listar', 'Usuarios::listar');
    $routes->get('nuevo', 'Usuarios::nuevo');
    $routes->get('editar/(:num)', 'Usuarios::editar/$1');
    $routes->post('guardar', 'Usuarios::guardar');
    $routes->get('eliminar/(:num)', 'Usuarios::eliminar/$1');
    if (is_file(APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php')) {
        require APPPATH . 'Config/' . ENVIRONMENT . '/Routes.php';
    }
?>