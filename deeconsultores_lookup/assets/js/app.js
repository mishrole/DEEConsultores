angular.module('ubigeoApp', [])
    .controller('mainCtrl', function(ubigeoService) {
        var main = this;

        main.provincias_departamento = [];
        main.distritos_provincia = [];

        main.loading_municipalidades = false;

        main.get_departamentos = function () {
            ubigeoService.getDepartamentos().then(function (response) {
                main.departamentos = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

        main.get_provincias_departamento = function (departamento) {
            main.provincias_departamento = [];
            main.distritos_provincia = [];

            if (departamento !== null) {
                ubigeoService.getProvincias(departamento.codigo_departamento).then(function (response) {
                    main.provincias_departamento = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        };

        main.get_distritos_provincia = function (provincia) {
            main.distritos_provincia = [];

            if (provincia !== null) {
                ubigeoService.getDistritos(main.departamento.codigo_departamento, provincia.codigo_provincia).then(function (response) {
                    main.distritos_provincia = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }

        main.get_periodos = function () {
            ubigeoService.getPeriodos().then(function (response) {
                main.periodos = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        };

        main.initialize = function () {
            main.get_departamentos();
            main.get_periodos();
        };

        main.initialize();

        main.get_municipalidades_filtro = function () {
            main.loading_municipalidades = true;

            var departamento = main.departamento == null ? 0 : main.departamento.codigo_departamento,
                provincia = main.provincia == null ? 0 : main.provincia.codigo_provincia,
                distrito = main.distrito == null ? 0 : main.distrito.codigo_distrito,
                periodo = main.periodo == null ? 0 : main.periodo.codigo_periodo;

            ubigeoService.getConsolidado(departamento, provincia, distrito, periodo).then(function (response) {
                main.municipalidades = response.data;
                main.loading_municipalidades = false;
            }).catch(function (error) {
                console.log(error);
                main.loading_municipalidades = false;
            });
        };

        main.get_total = function (array,key) {
            var total = 0;

            angular.forEach(array, function (value){
                total += Number(value[key])
            });

            return total
        };

        main.set_color = function (row) {
            if (row % 2 === 0) {
                return 'warning';
            } else {
                return 'active';
            }
        };
    })
    .factory('ubigeoService', function($http, $log, $q) {
        return {
            getDepartamentos : function() {
                var deferred = $q.defer();

                $http.get('lookup/get_departamentos')
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            },
            getProvincias : function (departamento) {
                var deferred = $q.defer();

                $http.get('lookup/get_provincias?departamento='+departamento)
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            },
            getDistritos : function (departamento, provincia) {
                var deferred = $q.defer();

                $http.get('lookup/get_distritos?departamento='+departamento+'&provincia='+provincia)
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            },
            getPeriodos : function () {
                var deferred = $q.defer();

                $http.get('lookup/get_periodos')
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            },
            getConsolidado : function (departamento, provincia, distrito, periodo) {
                var deferred = $q.defer();

                $http.get('lookup/get_consolidado?departamento='+departamento+'&provincia='+provincia+'&distrito='+distrito+'&periodo='+periodo)
                .then(function(data) {
                    deferred.resolve(data);
                })
                .catch(function(msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });

                return deferred.promise;
            }
        }
    })
    .directive('spinnerLoader', function () {
        return {
		      restrict: 'AE',
		      replace: true,
		      template: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div><div class="bounce4"></div></div>'
		  };
    });
