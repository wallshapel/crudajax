<?php
	namespace App\Models;
	use CodeIgniter\Model;
	class UsuariosModel extends Model {
		public function __construct(ConnectionInterface $db = null, ValidationInterface $validation = null) {
	        parent::__construct($db, $validation);
	        $this->db->schema = 'control_de_usuarios';
	    }
	    protected $table      		= 'usuarios';
	    protected $primaryKey 		= 'id';
	    protected $useAutoIncrement = true;
	    protected $returnType     	= 'array';
	    protected $useSoftDeletes 	= true;
	    protected $allowedFields 	= ['usuario', 'pass'];
	    // Dates
	    protected $useTimestamps = true;
	    protected $dateFormat    = 'datetime';
	    protected $createdField  = 'creado_en';
	    protected $updatedField  = 'actualizado_en';
	    protected $deletedField  = 'eliminado_en';
	    // Validation
	    protected $validationRules = [
	    	'usuario' 	=> 'required|is_unique[usuarios.usuario]|string|min_length[8]|max_length[20]',
	    	'pass'		=> 'required|string|min_length[6]|max_length[256]'
	    ];
	    protected $skipValidation       = false;
	}