<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en" ng-app="ubigeoApp">
<head>
	<meta charset="utf-8">
	<title>Lookup DEE Consultores</title>
	<link href="https://fonts.googleapis.com/css?family=Oswald|Roboto|Roboto+Condensed" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body ng-cloak>
	<div class="col-md-12" ng-controller="mainCtrl as main">
        <div class="row">
            <div class="col-md-3 col-sm-3">
                <div class="form-group">
                    <label for="departamento">Departamento : </label>
                    <select class="form-control" name="departamento" id="departamento" ng-options="item as item.codigo_departamento+' '+item.departamento for item in main.departamentos track by item.codigo_departamento" ng-model="main.departamento" ng-change="main.get_provincias_departamento(main.departamento)">
                        <option value="">[ Todos ]</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="form-group">
                    <label for="provincia">Provincia : </label>
                    <select class="form-control" ng-disabled="main.provincias_departamento.length == 0" name="provincia" id="provincia" ng-options="item as item.codigo_provincia+' '+item.provincia for item in main.provincias_departamento track by item.codigo_provincia" ng-model="main.provincia" ng-change="main.get_distritos_provincia(main.provincia)">
                        <option value="">[ Todos ]</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="form-group">
                    <label for="distrito">Distrito : </label>
                    <select class="form-control" ng-disabled="main.distritos_provincia.length == 0" name="distrito" id="distrito" ng-options="item as item.codigo_distrito+' '+item.distrito for item in main.distritos_provincia track by item.codigo_distrito" ng-model="main.distrito">
                        <option value="">[ Todos ]</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="form-group">
                    <label for="periodo">Período : </label>
                    <select class="form-control" name="periodo" id="periodo" ng-disabled="main.periodos.length == 0" ng-options="item as item.periodo for item in main.periodos track by item.codigo_periodo" ng-model="main.periodo">
                        <option value="">[ Todos ]</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="filtrar">&nbsp;</label>
                    <button type="button" name="filtrar" id="filtrar" class="btn btn-{{main.loading_municipalidades ? 'default' : 'success'}} btn-block btn-lg" ng-click="main.get_municipalidades_filtro()" ng-disabled="main.loading_municipalidades">{{main.loading_municipalidades ? 'Obteniendo listado' : 'Filtrar'}}&nbsp;&nbsp;<i class="glyphicon glyphicon-search" ng-if="!main.loading_municipalidades"></i><spinner-loader style="margin: 0 auto !important; display: inline-block;" ng-show="main.loading_municipalidades" /></button>
                </div>
            </div>
        </div>
        <div class="row" ng-if="main.municipalidades">
            <div class="col-md-12">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <caption class="text-right"><h4>Registros encontrados : <span class="label label-danger">{{main.municipalidades.length}}</span></h4></caption>
                        <thead class="thead-primary">
                            <tr>
                                <th class="text-center row-center">#</th>
                                <th class="text-center row-center">Municipalidad</th>
                                <th class="text-center row-center">Provincia</th>
                                <th class="text-center row-center">Departamento</th>
                                <th class="text-center row-center">Ubigeo</th>
                                <th class="text-center row-center">Período</th>
                                <th class="text-center row-center">Transferencias (S/)</th>
                                <th class="text-center row-center">Convenios (S/)</th>
                                <th class="text-center row-center">Deducciones (S/)</th>
                                <th class="text-center row-center">Límites de Emisión (S/)</th>
                            </tr>
                        </thead>
                        <tbody ng-if="main.municipalidades.length == 0">
                            <tr class="active">
                                <td class="text-center" colspan="10"><b>No se encontraron registros.</b></td>
                            </tr>
                        </tbody>
                        <tbody ng-if="main.municipalidades.length > 0">
                            <tr ng-repeat="municipalidad in main.municipalidades" class="{{main.set_color($index)}}">
                                <td class="text-center">{{$index + 1}}</td>
                                <td>Municipalidad Distrital de {{municipalidad.distrito}}</td>
                                <td>{{municipalidad.provincia}}</td>
                                <td>{{municipalidad.departamento}}</td>
                                <td class="text-center">{{municipalidad.codigo_ubigeo}}</td>
                                <td class="text-center">{{municipalidad.codigo_periodo}}</td>
                                <td class="text-right">{{municipalidad.transferencias | number:2}}</td>
                                <td class="text-right">{{municipalidad.convenios | number:2}}</td>
                                <td class="text-right">{{municipalidad.deducciones | number:2}}</td>
                                <td class="text-right">{{municipalidad.limites_emision | number:2}}</td>
                            </tr>
                            <tr class="total-table">
                                <td class="text-center total" colspan="6"><b>Total (S/)</b></td>
                                <td class="text-right info"><b>{{main.get_total(main.municipalidades, "transferencias") | number:2}}</b></td>
                                <td class="text-right info"><b>{{main.get_total(main.municipalidades, "convenios") | number:2}}</b></td>
                                <td class="text-right info"><b>{{main.get_total(main.municipalidades, "deducciones") | number:2}}</b></td>
                                <td class="text-right info"><b>{{main.get_total(main.municipalidades, "limites_emision") | number:2}}</b></td>
                            </tr>
                            <tr><td colspan="10"><b>(*) Fuente : Proinversión</b></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js" charset="utf-8"></script>
	<script src="assets/js/app.js" charset="utf-8"></script>
</body>
</html>
