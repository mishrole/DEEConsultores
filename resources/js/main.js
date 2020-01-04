"use strict";

// Wrappers existentes en el DOM
let wrapperDesktop = $(".wrapper-desktop");
let wrapperMobile = $(".wrapper-mobile");
let wrapperDesktopTitle = $(".wrapper-services-header");
let wrapperTeamDesktop = $(".wrapper-team-desktop");
let wrapperTeamImage = $(".wrapper-team-image");
let wrapperTeamMobile = $(".wrapper-team-mobile");
let teamContentMobile = $(".team-content-mobile");
// Menú de Servicios en Desktop
let servicesList = $(".services-list");
// Menú de Equipo en Desktop
let teamList = $(".team-list");
// Wrapper de Modal en Mobile
let wrapperModalTeamMobile = $("#team-modal-wrapper");
// Wrapper Articles Desktop
let wrapperArticlesDesktop = $(".articles-desktop-body");
// Menú de Articles en Desktop
let articlesList = $(".articles-list");
// Wrapper Articles Mobile
let wrapperArticlesMobile = $(".articles-mobile-content");

$(document).ready(function() {
    $("#wrapper-map").append(contactoMapaModal());
    //Cargar Artículos en Mobile al inicio
    sArticulos.forEach(function(element, index) {
        wrapperArticlesMobile.append(articulosMobile(element, index))
    });
    // Cargar primer artículo de Artículos en Desktop
    wrapperArticlesDesktop.append(articulosDesktop(sArticulos[0]));
    // Cargar título de Servicios en Desktop al inicio
    servicesList.find('a').eq(0).css("color", "#909090");
    articlesList.find('a').eq(0).css("color", "#909090");
    wrapperDesktopTitle.append(hFormulacion());
    // Cargar tabla de Servicios en Desktop al inicio
    sFormulacion.forEach(function(element) {
        wrapperDesktop.append(mostrarTabla(element))
    });
    // Cargar acordeón de Servicios en Mobile al inicio
    sFormulacion.forEach(function(element, index){
        wrapperMobile.append(serviciosMobile(element, index));
    });
    // Cargar elementos de Equipo en Mobile al inicio
    socios.forEach(function(element, index) {
        teamContentMobile.append(equipoMobile(element, index))
    });
    // Cargar elementos de Equipo en Desktop al inicio
    sAlcides.forEach(function(element) {
        wrapperTeamDesktop.append(equipoDesktop(element));
    })
    // Color en primer enlace del Menú de Equipo en Desktop
    teamListColor(teamList.find('a').eq(0));
    // Cargar elementos de Servicios en función al link del menú en Desktop
    servicesList.find('a').eq(0).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hFormulacion());
        sFormulacion.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false;
    });

    servicesList.find('a').eq(1).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hElaboracion());
        sElaboracion.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false;
    });

    servicesList.find('a').eq(2).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hEvaluacion());
        sEvaluacion.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false
    });

    servicesList.find('a').eq(3).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hAdministracion());
        sAdministracion.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false
    });

    servicesList.find('a').eq(4).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hProgramas());
        sProgramas.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false
    });

    servicesList.find('a').eq(5).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hAnalisis());
        sAnalisis.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false
    });

    servicesList.find('a').eq(6).click(function() {
        servicesListColor($(this));
        wrapperDesktop.empty();
        wrapperDesktopTitle.empty();
        wrapperDesktopTitle.append(hEstudios());
        sEstudios.forEach(function(element) {
            wrapperDesktop.append(mostrarTabla(element))
        });
        return false
    });

    // Cargar elementos de Equipo en función al link del menú en Desktop
    teamList.find('a').eq(0).click(function() {
        teamListColor($(this));
        wrapperTeamDesktop.empty();
        wrapperTeamImage.empty();
        sAlcides.forEach(function(element) {
            wrapperTeamDesktop.append(equipoDesktop(element));
        });
        return false;
    });

    teamList.find('a').eq(1).click(function() {
        teamListColor($(this));
        wrapperTeamDesktop.empty();
        wrapperTeamImage.empty();
        sFernando.forEach(function(element) {
            wrapperTeamDesktop.append(equipoDesktop(element));
        });
        return false;
    });

    teamList.find('a').eq(2).click(function() {
        teamListColor($(this));
        wrapperTeamDesktop.empty();
        wrapperTeamImage.empty();
        sGustavo.forEach(function(element) {
            wrapperTeamDesktop.append(equipoDesktop(element));
        });
        return false;
    });

    teamList.find('a').eq(3).click(function() {
        teamListColor($(this));
        wrapperTeamDesktop.empty();
        wrapperTeamImage.empty();
        sMiguel.forEach(function(element) {
            wrapperTeamDesktop.append(equipoDesktop(element));
        });
        return false;
    });

    // Cargar acordeón de Servicios en Mobile en función al Servicio seleccionado
    $("#servicesState").change(function() {
        let selected = $(this).find("option:selected").val();
        if(selected == 1) {
            wrapperMobile.empty();
            sFormulacion.forEach(function(element, index){
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else if (selected == 2) {
            wrapperMobile.empty();
            sElaboracion.forEach(function(element, index){
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else if (selected == 3) {
            wrapperMobile.empty();
            sEvaluacion.forEach(function(element, index) {
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else if (selected == 4) {
            wrapperMobile.empty();
            sAdministracion.forEach(function(element, index) {
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else if (selected == 5) {
            wrapperMobile.empty();
            sProgramas.forEach(function(element, index) {
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else if (selected == 6) {
            wrapperMobile.empty();
            sAnalisis.forEach(function(element, index) {
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }else {
            wrapperMobile.empty();
            sEstudios.forEach(function(element, index){
                wrapperMobile.append(serviciosMobile(element, index));
            });
        }
    });

    // Cargar data de Equipo en Modal Mobile en función al Card de Equipo seleccionado
    $(".card-team-mobile").eq(0).click(function() {
        wrapperModalTeamMobile.empty();
        sAlcides.forEach(function(element) {
            wrapperModalTeamMobile.append(equipoMobileModal(element));
        });
    });

    $(".card-team-mobile").eq(1).click(function() {
        wrapperModalTeamMobile.empty();
        sFernando.forEach(function(element) {
            wrapperModalTeamMobile.append(equipoMobileModal(element));
        });
    });

    $(".card-team-mobile").eq(2).click(function() {
        wrapperModalTeamMobile.empty();
        sGustavo.forEach(function(element) {
            wrapperModalTeamMobile.append(equipoMobileModal(element));
        });
    });

    $(".card-team-mobile").eq(3).click(function() {
        wrapperModalTeamMobile.empty();
        sMiguel.forEach(function(element) {
            wrapperModalTeamMobile.append(equipoMobileModal(element));
        });
    });

    articlesList.find('a').eq(0).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[0]));
        return false;
    });

    articlesList.find('a').eq(1).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[1]));
        return false;
    });

    articlesList.find('a').eq(2).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[2]));
        return false;
    });

    articlesList.find('a').eq(3).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[3]));
        return false;
    });

    articlesList.find('a').eq(4).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[4]));
        return false;
    });

    articlesList.find('a').eq(5).click(function() {
        articlesListColor($(this));
        wrapperArticlesDesktop.empty();
        wrapperArticlesDesktop.append(articulosDesktop(sArticulos[5]));
        return false;
    });

    $("#phone").keypress(function(evento) {
        let charCode = (evento.which) ? evento.which : evento.keyCode
        if(charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    });

    $("#name").keypress(function(evento) {
        $("#nameAlert").addClass("hiddenAlert");
        let charCode = (evento.which) ? evento.which : evento.keyCode
        if((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32) {
            return true;
        }
        return false;
    });

    $("#email").keypress(function(evento) {
        $("#emailAlert").addClass("hiddenAlert");
    });

    $("#message").keypress(function(evento) {
        $("#messageAlert").addClass("hiddenAlert");
    });

    const clearForm = function() {
        $("#name").val("");
        $("#email").val("");
        $("#phone").val("");
        $("#message").val("");
    }

    let mailing = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    $("#submitContact").click(function() {
        if($("#name").val().length < 1) {
            $("#nameAlert").removeClass("hiddenAlert");
            //console.log("nombre vacío")
        }else if($("#email").val().length < 1) {
            $("#emailAlert").removeClass("hiddenAlert");
            //console.log("email vacío")
        }else if($("#message").val().length < 1) {
            $("#messageAlert").removeClass("hiddenAlert");
            //console.log("mensaje vacío")
        }else {
            if(mailing.test($("#email").val()) == true) {
                var phoneEmpty = '';
                if($("#phone").val().length < 1) {
                    phoneEmpty = "-";
                }else {
                    phoneEmpty = $("#phone").val()
                }
                $("#nameAlert").addClass("hiddenAlert");
                $("#emailAlert").addClass("hiddenAlert");
                $("#messageAlert").addClass("hiddenAlert");
                var data = {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    phone: phoneEmpty,
                    message: $("#message").val()
                };
                $.ajax({
                    type: "POST",
                    url: "contacto.php",
                    data: data,
                    success: function() {
                        $("#wrapper-message").append(contactoMensaje(1));
                        $("#contact-modal-message").modal('show');
                        clearForm();
                    },
                    error: function() {
                        $("#wrapper-message").append(contactoMensaje(0));
                        $("#contact-modal-message").modal('show');
                    }
                });
            }else {
                $("#emailAlert").text("Ingrese un correo electrónico válido");
                $("#emailAlert").removeClass("hiddenAlert");
            }
        }
        return false;
    });
});