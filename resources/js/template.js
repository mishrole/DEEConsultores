"Use strict";

// Funciones con cabecera de Servicios
let hFormulacion = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Formulación y Preparación de Proyectos y APP's</p>");
    let p1 = $("<p>Elaboración de estudios de preinversión en todo el ciclo de proyectos (perfil, factibilidad)."+ "<br><br>" +"En el caso de los proyectos públicos, de acuerdo a las metodologías del Sistema Nacional de Programación Multianual y Gestión de Inversiones del Perú (Invierte.pe).</p>");
    let p2 = $("<p>La formulación de proyectos comprende los módulos de diagnóstico e identificación, estudios de demanda y mercado, diseño técnico, cumplimiento con las regulaciones pertinentes, diseño organizacional, proyecciones económicas y financieras y análisis de riesgos.</p>");
    div1.append(p0)
    div0.append(div1, p1, p2);
    return div0;
}

let hElaboracion = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Elaboración de Estudios de Ingeniería de Detalle</p>");
    let p1 = $("<p>Diseño de ingeniería y expedientes técnicos de obras de infraestructura, saneamiento, vialidad (caminos, carreteras, puentes, puertos, aeropuertos, etc.), saneamiento, edificaciones, hidráulica y sistemas electromecánicos entre otros.</p>");
    let p2 = $("<p>Los estudios de preinversión aprobados y las licencias obtenidas, se realizan según los manuales técnicos nacionales e internacionales. El servicio comprende:</p>");
    let ul = $("<ul></ul>");
    let li0 = $("<li>El diseño de los planos de construcción (Drawings),</li>");
    let li1 = $("<li>Especificaciones técnicas,</li>");
    let li2 = $("<li>Cronograma de ejecución,</li>");
    let li3 = $("<li>Presupuesto de obra (B&Q) incluyendo análisis de precios unitarios, requerimiento de materiales, equipo mínimo y formulas polinómicas.</li>");
    div1.append(p0);
    ul.append(li0, li1, li2, li3);
    div0.append(div1, p1, p2, ul);
    return div0;
}

let hEvaluacion = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Evaluación y Supervisión de Proyectos</p>");
    let p1 = $("<p>Evaluación económica, financiera y social de proyectos de inversión pública y privada, así como de iniciativas de asociación pública - privada.</p>");
    let p2 = $("<p><span class='text-underline'>La opinión</span> respecto al proyecto comprende la evaluación de la factibilidad del proyecto desde las perspectivas de:</p>");
    let ul0 = $("<ul></ul>");
    let li0 = $("<li>Análisis del mercado y estrategia comercial.</li>");
    let li1 = $("<li>Análisis de la propuesta técnica, diseño y costos.</li>");
    let li2 = $("<li>Análisis organizacional de la ejecución y operación del proyecto.</li>");
    let li3 = $("<li>Análisis ambiental y de las externalidades del proyecto y su impacto en terceros.</li>");
    let li4 = $("<li>Análisis de los riesgos del proyecto y estrategias para mitigarlos, derivarlos o diversificarlos, a partir de las evaluaciones antes mencionadas.</li>");
    let p3 = $("<p><span class='text-underline'>La evaluación</span> de los proyectos comprende:</p>");
    let ul1 = $("<ul></ul>");
    let li5 = $("<li>La revisión de los expedientes (estudios de factibilidad o expedientes técnicos).</li>");
    let li6 = $("<li>Entrevistas con los gestores del proyecto.</li>");
    let li7 = $("<li>Estudios de campo y análisis muéstrales por especialistas del rubro al que pertenece el proyecto.</li>");
    let p4 = $("<p>La evaluación del proyecto se consolida en recomendaciones para aprobar el proyecto, profundizar sus estudios, proponer alternativas de mitigación de riesgos o rechazar el proyecto.</p>");
    let p5 = $("<p><span class='text-underline'>La supervisión</span> comprende:</p>");
    let ul2 = $("<ul></ul>");
    let li8 = $("<li>Representar técnicamente a la Entidad ante el Contratista según el contrato de obra.</li>");
    let li9 = $("<li>Autorizar la ejecución de partidas de obras.</li>");
    let li10 = $("<li>Aceptar o rechazar los materiales, especificaciones técnicas diseños técnicos y entregables propuestos por el contratista para la ejecución de la obra.</li>");
    let li11 = $("<li>Certificar la calidad de los materiales y procedimientos de obra.</li>");
    let li12 = $("<li>Controlar el cronograma de avance de obra.</li>");
    let li13 = $("<li>Controlar el costo de la obra.</li>");
    let li14 = $("<li>Aprobar o rechazar informes de obra y valorizaciones presentados por el contratista.</li>");
    let li15 = $("<li>Certificar los metrados realmente ejecutados.</li>");
    let li16 = $("<li>Revisar las liquidaciones de obra presentadas por el contratista.</li>");
    let li17 = $("<li>Dar trámite a los reportes aceptados a la Entidad para su trámite respectivo.</li>");
    div1.append(p0);
    ul0.append(li0, li1, li2, li3, li4);
    ul1.append(li5, li6, li7);
    ul2.append(li8, li9, li10, li11, li12, li13, li14, li15, li16, li17);
    div0.append(div1, p1, p2, ul0, p3, ul1, p4, p5, ul2);
    return div0;
}

let hAdministracion = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Administración de Contratos</p>");
    let p1 = $("<p>Se brinda el servicio de administración de contratos de ingenieria, construcción y supervisión, que consiste en brindar apoyo técnico especializado y coordinación para la revisión de entregables, opinión sobre soluciones técnicas, coordinación con los diversos involucrados, verificación de licencias y permisos, entre otros.</p>");
    let p2 = $("<p>Facilitando al cliente la toma de decisiones sobre el avance del proyecto, pago de valorizaciones y los riesgos asociados al alcance, cronograma y costo del proyecto; llevando un control estricto de las cláusulas contractuales, evitando mayores costos y modificaciones no necesarias.</p>");
    let p3 = $("<p>La administración del contrato se efectúa, de acuerdo al tipo del proyecto, mediante un profesional o equipo de profesionales especialistas en gestión de proyectos que permanentemente coordina con los involucrados, prepara reportes de estado del proyecto y recomendaciones de conformidad o rechazo de entregables y valorizaciones presentados por el contratista o supervisor.</p>");
    div1.append(p0);
    div0.append(div1, p1, p2, p3);
    return div0;
}

let hProgramas = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Programas Presupuestales</p>");
    let p1 = $("<p>Preparación y diseño de operaciones de financiamiento para desarrollo de infraestructura económica y social con la banca multilateral. Estudios de preinversión, seguimiento y evaluación ex post para proyectos o programas de proyectos de inversión.</p>");
    div1.append(p0);
    div0.append(div1, p1);
    return div0;
}

let hAnalisis = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Análisis Institucionales y de Riesgos</p>");
    let p1 = $("<p>Evaluación institucional y diagnósticos sectoriales de diversos organismos públicos y privados, diseño de reformas, rediseño de procesos e instrumentos de gestión (manual de operaciones, manual de organización y funciones y manual de procesos entre otros). Estudios sectoriales para la formulación y desarrollo de políticas económicas.</p>");
    div1.append(p0);
    div0.append(div1, p1);
    return div0;
}

let hEstudios = function() {
    let div0 = $("<div class='wrapper-desktop-title services-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>Estudios Económicos</p>");
    let p1 = $("<p>Planeamiento estratégico, líneas de base, análisis de demanda, evaluaciones financieras, análisis económicos y de coyuntura y proyectos de investigación.</p>");
    div1.append(p0);
    div0.append(div1, p1);
    return div0;

}

// Plantilla de elementos de tabla
let mostrarTabla = function(array) {
    let tr = $("<tr></tr>");
    let td0 = $("<td scope='row' class='w-25'>"+array[0]+"</td>");
    let td1 = $("<td>"+array[1]+"</td>");
    let td2 = $("<td class='w-25'>"+array[2]+"</td>");
    tr.append(td0,td1,td2);
    return tr;
}

// Plantilla de elementos de acordeón
let serviciosMobile = function(array, id) {
    let card = $("<div class='card'></div>");
    let header = $("<div class='card-header' id='heading"+id+"'></div>");
    let p = $("<p class='services-text'></p>");
    let button = $("<button class='btn btn-link btn-link-services' type='button' data-toggle='collapse' data-target='#accordion"+id+"' aria-expanded='false' aria-controls='accordion"+id+"'>"+array[0]+"<i class='fas fa-angle-down rotate-icon'></i></button>");
    let cardContent = $("<div id='accordion"+id+"' class='collapse' aria-labelledby='heading"+id+"' data-parent='#services'></div>");
    let cardBody = $("<div class='card-body'>"+array[1]+"<br>"+array[2]+"</div>");
    p.append(button);
    header.append(p);
    cardContent.append(cardBody);
    card.append(header, cardContent);
    return card;
}

// Cambio de color de Menú de Servicios en Desktop
let servicesListColor = function(element) {
    servicesList.find('a').eq(0).css("color", "#134060");
    servicesList.find('a').eq(1).css("color", "#134060");
    servicesList.find('a').eq(2).css("color", "#134060");
    servicesList.find('a').eq(3).css("color", "#134060");
    servicesList.find('a').eq(4).css("color", "#134060");
    servicesList.find('a').eq(5).css("color", "#134060");
    servicesList.find('a').eq(6).css("color", "#134060");
    element.css("color", "#909090");
}

// Cambio de color de Menú de Equipo en Desktop
let teamListColor = function(element) {
    teamList.find('a').eq(0).css("color", "#134060");
    teamList.find('a').eq(1).css("color", "#134060");
    teamList.find('a').eq(2).css("color", "#134060");
    teamList.find('a').eq(3).css("color", "#134060");
    element.css("color", "#909090");
}

// Imagen de Equipo
let equipoImagen = function(url) {
    let img = $("<img class='img-fluid' src='" + url +"'>");
    return img;
}
// Plantilla de elementos de Equipo en Desktop
let equipoDesktop = function(array) {
    let div0 = $("<div class='wrapper-desktop-team team-text'></div>");
    let div1 = $("<div class='bg-dee'></div>");
    let p0 = $("<p class='font-weight-bold text-white wrapper-desktop-text'>" + array[0] + "</p>");
    let p1 = $("<p class='font-weight-bold wrapper-desktop-text'>" + array[1] + "<br>" + array[2] + "<br><br><a class='team-mail' href='mailto:" + array[3] +"'>" + array[3] + "</a></p>");
    let p2 = $("<p class='wrapper-desktop-text'>" + array[4] + "</p>");
    let h4 = $("<h4 class='franja-gris-up'></h4>");
    wrapperTeamImage.append(equipoImagen(array[5]));
    div1.append(p0);
    div0.append(div1, p1, h4, p2);
    return div0;
}

// Plantilla de elementos de Equipo en Mobile
let equipoMobile = function(array, index) {
    let div0 = $("<div class='card card-team-mobile col-sm-12 col-md-5' data-clickable='true' data-toggle='modal' data-target='#team-modal' id='card-team-"+index+"'></div>");
    let div1 = $("<div class='card-team-mobile-image'></div>");
    let img = $("<img src='" + array[2] + "' class='card-img-top'>");
    let div2 = $("<div class='card-body'></div>");
    let p0 = $("<p class='card-text font-weight-bold'>" + array[0] + "<br>" + array[1] + "</p>");
    div1.append(img);
    div2.append(p0);
    div0.append(div1, div2);
    return div0;
}

// Plantilla de modal de Equipo en Mobile
let equipoMobileModal = function(array) {
    let div0 = $("<div class='modal fade' id='team-modal' tabindex='-1' role='dialog' aria-hidden='true'></div>");
    let div1 = $("<div class='modal-dialog modal-dialog-centered' role='document'></div>");
    let div2 = $("<div class='modal-content'></div>");
    let div3 = $("<div class='modal-header'>");
    let h5 = $("<h5 class='modal-title team-text font-weight-bold'>" + array[0] + "<br>" + array[2] + "<br>" + "<a class='modal-title team-mail' href='mailto:" + array[3] + "'>" + "<br>" + array[3] + "</a></h5>");
    let div4 = $("<div class='modal-body'></div>");
    let p0 = $("<p class='modal-text team-text'>" + array[4] +"</p>");
    let div5 = $("<div class='modal-footer'></div>");
    let button0 = $("<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>");
    div3.append(h5);
    div4.append(p0);
    div5.append(button0);
    div2.append(div3, div4, div5);
    div1.append(div2);
    div0.append(div1);
    return div0;
}

// Plantilla de modal de Mapa de Contacto en Desktop
let contactoMapaModal = _ => {
    let div0 = $("<div class='modal fade' id='contact-map-modal' tabindex='-1' role='dialog' aria-hidden='true'></div>");
    let div1 = $("<div class='modal-dialog modal-dialog-centered map-dialog' role='document'></div>");
    let div2 = $("<div class='modal-content map-content'></div>");
    let div3 = $("<div class='modal-header'></div>");
    let div4 = $("<div class='modal-body'></div>");
    let iframe0 = $("<iframe class='col-sm-12' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2790289233617!2d-77.04608008547332!3d-12.093040546054926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85a135ce6bd%3A0xd673b89e4cdff5c3!2sCalle%20los%20Cedros%20285%2C%20San%20Isidro%2015073!5e0!3m2!1ses!2spe!4v1576518687547!5m2!1ses!2spe' width='600' height='450' frameborder='0' style='border:0;' allowfullscreen=''></iframe>");
    let div5 = $("<div class='modal-footer'></div>");
    let button0 = $("<button class='btn btn-secondary' type='button' data-dismiss='modal'>Cerrar</button>");
    div4.append(iframe0);
    div5.append(button0);
    div2.append(div3, div4, div5);
    div1.append(div2);
    div0.append(div1);
    return div0;
}

// Plantilla de modal de Mensaje al enviar Formulario de Contacto
let contactoMensaje = function(estado) {

    let titleForm = '';
    let messageForm = '';

    if(estado == 0) {
        titleForm = "El mensaje no pudo ser enviado";
        messageForm = "Por favor, inténtelo nuevamente más tarde.";
    }else if (estado == 1) {
        titleForm = "¡Mensaje enviado con éxito!";
        messageForm = "Nos pondremos en contacto con usted a la brevedad posible.";
    }

    let div0 = $("<div class='modal fade' id='contact-modal-message' tabindex='-1' role='dialog' aria-hidden='true'></div>");
    let div1 = $("<div class='modal-dialog modal-dialog-centered' role='document'></div>");
    let div2 = $("<div class='modal-content'></div>");
    let div3 = $("<div class='modal-header'>");
    let h5 = $("<h5 class='modal-title team-text font-weight-bold'>" + titleForm + "</h5>");
    let div4 = $("<div class='modal-body'></div>");
    let p0 = $("<p class='modal-text team-text'>" + messageForm + "</p>");
    let div5 = $("<div class='modal-footer'></div>");
    let button0 = $("<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>");
    div3.append(h5);
    div4.append(p0);
    div5.append(button0);
    div2.append(div3, div4, div5);
    div1.append(div2);
    div0.append(div1);
    return div0;
}

// Cambio de color de Menú de Equipo en Desktop
let articlesListColor = function(element) {
    articlesList.find('a').eq(0).css("color", "#134060");
    articlesList.find('a').eq(1).css("color", "#134060");
    articlesList.find('a').eq(2).css("color", "#134060");
    articlesList.find('a').eq(3).css("color", "#134060");
    articlesList.find('a').eq(4).css("color", "#134060");
    articlesList.find('a').eq(5).css("color", "#134060");
    element.css("color", "#909090");
}

// Plantilla de elementos de Artículos en Desktop
let articulosDesktop = function(array) {
    let div0 = $("<div clas='articles-desktop-abstract'></div>");
    let p0 = $("<p>" + array[1] + "</p>");
    let a0 = $("<a class='articles-pdf article-link' href='" + array[2] + "' target='_blank'>Descargar documento</a>");
    div0.append(p0, a0);
    return div0;
}

// Plantilla de elementos de Artículos en Mobile
let articulosMobile = function(array, index) {
    let div0 = $("<div class='card card-articles-mobile col-sm-12' data-clickable='true' id='card-articles-"+index+"'></div>");
    let div1 = $("<div class='card-body'></div>");
    let p0 = $("<p class='card-text font-weight-bold'>" + array[0] + "</p>");
    let p1 = $("<p class='card-text'>" + array[1] + "</p>");
    let a0 = $("<a class='articles-pdf article-link' href='" + array[2] + "' target='_blank'>Descargar documento</a>");
    div1.append(p0, p1, a0);
    div0.append(div1);
    return div0;
}