<?php
    namespace App\Controllers;
    use CodeIgniter\Controller;
    use CodeIgniter\HTTP\CLIRequest;
    use CodeIgniter\HTTP\IncomingRequest;
    use CodeIgniter\HTTP\RequestInterface;
    use CodeIgniter\HTTP\ResponseInterface;
    use Psr\Log\LoggerInterface;
    abstract class BaseController extends Controller {
        protected $request;
        protected $helpers = [];
        protected $modelName;
        protected $model;
        public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger) {
            parent::initController($request, $response, $logger);
            $this->setModel($this->modelName);
        }
        public function setModel($which = null) {
            if ($which) {
                $this->model     = is_object($which) ? $which : null;
                $this->modelName = is_object($which) ? null : $which;
            }
            if (empty($this->model) && ! empty($this->modelName) && class_exists($this->modelName)) 
                $this->model = model($this->modelName);
            if (! empty($this->model) && empty($this->modelName)) 
                $this->modelName = get_class($this->model);
        }
    }
?>