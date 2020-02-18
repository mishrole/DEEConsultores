<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    Class Lookup_model extends CI_Model{
        public function __construct() {
            parent::__construct();
        }

        public function get_departamentos() {
            return $this->db->get('departamentos')->result();
        }

        public function get_provincias($departamento) {
            return $this->db->get_where('provincias', array('codigo_departamento' => $departamento))->result();
        }

        public function get_distritos($departamento, $provincia) {
            return $this->db->get_where('distritos', array('codigo_departamento' => $departamento, 'codigo_provincia' => $provincia))->result();
        }

        public function get_periodos() {
            return $this->db->get('periodos')->result();
        }

        public function get_consolidado($departamento, $provincia, $distrito, $periodo) {
            $departamento != 0 ? $this->db->where('codigo_departamento', $departamento) : false;
            $provincia != 0 ? $this->db->where('codigo_provincia', $provincia) : false;
            $distrito != 0 ? $this->db->where('codigo_distrito', $distrito) : false;
            $periodo != 0 ? $this->db->where('codigo_periodo', $periodo) : false;

            return $this->db->get('municipalidades')->result();
        }
    }
