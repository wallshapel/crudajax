<?php
    namespace App\Controllers;
    use App\Models\UsuariosModel;
    class Usuarios extends BaseController {
        public function __construct() {
            $this->model = $this->setModel(new UsuariosModel());
        }
        public function index() {
            $cabecera = view('plantillas/cabecera');
            $pie = view('plantillas/pie');
            return view('index', compact('cabecera', 'pie'));
        }
        public function listar() {
            $usuarios = $this->model->orderBy('usuario', 'ASC')->findAll();
            return view('usuarios/index', compact('usuarios'));    
        }
        public function nuevo() {
            return view('usuarios/nuevo');    
        }
        public function editar($id) {
            $usuario = $this->buscar($id);
            return view('usuarios/editar', compact('usuario'));    
        }
        private function buscar($id) {
           $usuario = $this->model->find($id);
           return $usuario; 
        }
        public function guardar() {
            $formulario = $this->request->getPost();
            if (isset($formulario['id'])) {  // Entonces se trata de una actualización.
                $id = $formulario['id'];
                $usuario = $this->buscar($id);
                if ($usuario['usuario'] == $formulario['usuario']) 
                    unset($formulario['usuario']);  // Eliminamos este campo ya que no se ha modificado en la vista y solo causará un error de validación.
            }
            $formulario['pass'] = password_hash($formulario['pass'], PASSWORD_BCRYPT);
            if ($this->model->save($formulario)) 
                return '1';
            else
                return $this->model->validation->listErrors();
        }
        public function eliminar($id) {
            $this->model->delete($id); 
            return $this->listar();
        }        
    }
?>