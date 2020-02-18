<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lookup extends CI_Controller {
	public function __construct() {
		parent::__construct();
		$this->load->model(array('Lookup_model'));
	}

	public function index() {
		$this->load->view('lookup');
	}

	public function get_departamentos() {
		echo json_encode($this->Lookup_model->get_departamentos());
	}

	public function get_provincias() {
		echo json_encode($this->Lookup_model->get_provincias($this->input->get('departamento')));
	}

	public function get_distritos() {
		echo json_encode($this->Lookup_model->get_distritos($this->input->get('departamento'), $this->input->get('provincia')));
	}

	public function get_periodos() {
		echo json_encode($this->Lookup_model->get_periodos());
	}

	public function get_consolidado() {
		echo json_encode($this->Lookup_model->get_consolidado($this->input->get('departamento'), $this->input->get('provincia'), $this->input->get('distrito'), $this->input->get('periodo')));
	}
}
