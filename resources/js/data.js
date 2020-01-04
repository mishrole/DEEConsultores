"use strict";

// Arreglos de data de Servicios
const sFormulacion = 
[
    ["Ministerio de Energía y Minas - MINEM." + "<br>" + "Dirección General de Planeamiento y Presupuesto",
    "Servicio de consultoría para la identificación y propuesta de proyectos estándar de distribución eléctrica.",
    "Agosto de 2019" + "<br>" + "Actualidad"],
    ["Unidad Ejecutora 003: " + "<br>" + "Programa de Modernización del Sistema de Administración de Justicia (PMSAJ). " + "<br>" + "Ministerio de Justicia y Derechos Humanos.",
    "Servicio de Consultoría para la elaboración de costos y presupuestos de la inversión y de la operación y mantenimiento sin y con proyecto de los establecimientos de Defensa Pública (ALEGRAS - MEGA ALEGRAS).",
    "Febrero 2019" + "<br>" + "Abril 2019"],
    ["Compañía Minera Antamina S.A.",
    "Servicio de Consultoría para asistir en la preparación, elaboración y sustentación del Proyecto de Inversión “Mejoramiento de los servicios para la reducción de la desnutrición y la anemia infantil en niños menores de 3 años en distritos seleccionados”.",
    "Noviembre 2018" + "<br>" + "Actualidad"],
    ["Ministerio del Ambiente - MINAM. Dirección General de Cambio Climático y Desertificación.",
    "Consultoría para realizar la evaluación económica de seis (06) medidas de mitigación priorizadas que conforman las Contribuciones Nacionalmente Determinadas (NDC).",
    "Octubre 2018" + "<br>" + "Diciembre 2018"],
    ["Wildlife Conservation Society - Perú (WCS).",
    "Servicio de Consultoría para “Analizar el Proyecto: Hidrovía Amazónica: Ríos Marañón y Amazonas, tramo Saramiriza - Iquitos - Santa Rosa; río Huallaga, tramo Yurimaguas - Confluencia con el río Marañón: río Ucayali, tramo Pucallpa - confluencia con el río Marañón, para identificar alternativas de curso de acción para mejorar el impacto positivo de la intervención y atenuar los impactos negativos”",
    "Mayo 2018" + "<br>" + "Agosto 2018"],
    ["Proyecto “Fomento de capacidades en desarrollo bajo en emisiones (LECB II)”. PNUD – Proyecto N° 00107022. Ministerio del Ambiente - MINAM.",
    "Servicio de “Consultoría para la elaboración de una guía metodológica para la evaluación económica de medidas de mitigación, y aplicación sobre cuatro medidas priorizadas” en el marco del proyecto “Fomento de capacidades en desarrollo bajo en emisiones (LECB II)”. Programa de las Naciones Unidas para el Desarrollo - PNUD. Proyecto 00107022.",
    "Abril 2018" + "<br>" + "Setiembre 2018"],
    ["QUIMPAC S.A.",
    "Servicios de asesoría para la preparación y presentación de Proyectos de Inversión bajo la modalidad de Obras por Impuestos.",
    "Marzo 2018" + "<br>" + "Actualidad"],
    ["Empresa de Generación Eléctrica Machupicchu S.A. EGEMSA.",
    "Servicio de opinión especializada para definir la metodología de evaluación de la implementación de un túnel paralelo para la operación de la Central Hidroeléctrica Machupicchu, dentro del marco del sistema Invierte.Perú.",
    "Enero 2018" + "<br>" + "Febrero 2018"],
    ["GILAT TO HOME PERÚ S.A. Compañía Minera ANTAMINA.",
    "Servicio de asesoría para la formulación y preparación de un Estudio de Preinversión que permita desarrollar el Proyecto de “Bibliotecas Digitales”, conjuntamente con la Compañía Minera ANTAMINA, a través del Sistema de Obras por Impuestos (Oxl) e Inverte Perú, a favor de la Municipalidad Distrital de San Marcos, Provincia de Huari, Departamento de Ancash.",
    "Enero 2018" + "<br>" + "Setiembre 2018"],
    ["Corporación Andina de Fomento - CAF. Ministerio del Interior de la República del Perú.",
    "Elaboración del estudio de preinversión a nivel de Perfil del Proyecto “Implementación de un Centro de Comando, Control, Comunicaciones, Cómputo e Inteligencia - C4i para la Policía Nacional del Perú en la ciudad de Lima Metropolitana y el Callao” en el marco de lo dispuesto por el Sistema Nacional de Programación Multianual y Gestión de Inversiones del Perú (Invierte.pe).",
    "Noviembre 2017" + "<br>" + "Agosto 2018"],
    ["Ministerio de Comercio Exterior y Turismo - MINCETUR.",
    "Servicio de elaboración de un Informe Técnico que sustente la verificación de viabilidad de los PIP: “Mejoramiento del servicio de seguridad turística en el corredor Julica – Puno -Isla del Lago Titicaca. Código SNIP N° 137150” y “Mejoramiento del servicio de seguridad turística en el corredor Río Amazonas, Marañón y Ucayali. Código SNIP N° 137165”.",
    "Octubre 2017" + "<br>" + "Octubre 2017"],
    ["Corporación Andina de Fomento - CAF. Ministerio del Interior.",
    "Elaboración del estudio de identificación y diagnóstico para el Proyecto “Implementación de un centro de comando, control, comunicación, cómputo e inteligencia (C4i) en la ciudad de Lima y El Callao”.",
    "Setiembre 2017" + "<br>" + "Noviembre 2017"],
    ["Ministerio de Energía y Minas. Oficina General de Planeamiento y Presupuesto.",
    "Consultoría para elaborar y estandarizar las fichas y contenidos mínimos para la formulación de proyectos de Electrificación Rural en el marco de Invierte.pe.",
    "Julio 2017" + "<br>" + "Agosto 2017"],
    ["COBRA Instalaciones y Servicios S.A. ACCIONA Infraestructuras S.A. Sucursal Perú.",
    "Formulación del Estudio de Preinversión del Proyecto de la Iniciativa Privada Cofinanciada “Sistema de Afianzamiento Hídrico en el Valle de Ica”.",
    "Febrero 2017" + "<br>" + "Abril 2018"],
    ["Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT. Gerencia de Infraestructura y Proyectos de Inversión (Unidad Formuladora).",
    "Servicio de consultoría para la elaboración del Estudio de Pre Inversión a Nivel de Factibilidad del Proyecto de Inversión Pública: “Mejoramiento del servicio de custodia y disposición de la SUNAT para bienes y mercancías en Lima”. Código SNIP N° 338602.",
    "Setiembre 2016" + "<br>" + "Abril 2017"],
    ["Organismo Técnico de la Administración de los Servicios de Saneamiento – OTASS. Ministerio de Vivienda, Construcción y Saneamiento.",
    "Servicio de consultoría para la elaboración del Estudio de Pre Inversión a Nivel de Perfil del Programa “Modernización del Sector Saneamiento”. PROG-8-2016-SNIP.",
    "Diciembre 2015" + "<br>" + "Julio 2016"],
    ["GMD S.A.",
    "Consultoría para asistir técnicamente en la preparación y sustentación del IPA al MEF de la “Operación del Recaudo del Sistema de Transporte Público de Trujillo”.",
    "Julio 2015" + "<br>" + "Mayo 2016"],
    ["Graña & Montero S.A.A. Técnicas de Desalinización de Aguas S.A. Sucursal del Perú (TEDAGUA).",
    "Estudios de Pre Inversión IPC - “Sistema de Tratamiento de las Aguas Residuales de la Cuenca del Lago Titicaca”.",
    "Febrero 2015" + "<br>" + "Diciembre 2015"],
    ["Oriental Consultants Global Co., Ltd. Formulador y Ejecutor: Programa Nacional de Conservación de Bosques – Ministerio del Ambiente. (Fondos JICA).",
    "Consultoría para brindar el soporte técnico especializado para la elaboración de los Estudios de Factibilidad de los Proyectos de Inversión Pública en el marco del Programa: “Conservación de bosques en los departamentos de Amazonas, Lambayeque, Loreto, Piura, San Martín, Tumbes y Ucayali - PNCB – PI”. Código SNIP N° PROG-21-2011-SNIP.",
    "Octubre 2014" + "<br>" + "Agosto 2015"],
    ["Volcan Compañía Minera S.A.A.",
    "Levantamiento de observaciones y reformulación del Perfil del Proyecto “Ampliación y Mejoramiento del Sistema de Agua Potable y Alcantarillado del Centro Poblado de San Agustín de Huaychao, distrito de Huayllay, Pasco” (Código SNIP N° 272749).",
    "Julio 2014" + "<br>" + "Enero 2015"],
    ["Rio Tinto Minera Perú",
    "Servicio de asesoría y acompañamiento para el mejor uso del SNIP en la implementación del Proyecto Minero La Granja.",
    "Marzo 2014" + "<br>" + "Diciembre 2015"],
    ["BCP",
    "Consultoría para la elaboración del Informe Técnico de Verificación de Viabilidad del Proyecto de Saneamiento del Distrito Majes - Arequipa. (Ficha SNIP Nro. 141994).",
    "Agosto 2013" + "<br>" + "Setiembre 2013"],
    ["Gobierno Regional de Puno",
    "Consultoría para la Elaboración de Estudio de Factibilidad del Proyecto Fortalecimiento de la Capacidad Resolutiva con Infraestructura y Equipamiento del Gobierno Regional de Puno.",
    "Abril 2013" + "<br>" + "Marzo 2017"],
    ["BCP - Backus",
    "Elaboración del Estudio de Preinversión a Nivel de perfil del Proyecto de Saneamiento en Chinchero.",
    "Enero 2013" + "<br>" + "Junio 2013"],
    ["XSTRATA Las Bambas",
    "Consultoría para la Elaboración de Estudios de Pre Inversión Pública de la Nueva Urbanización de Fuerabamba (Proyectos de Cuna, Centro de Educación Inicial, Centro de Educación Primaria y Secundaria, Centro de Salud y Proyectos de Saneamiento).",
    "Abril 2012" + "<br>" + "Enero 2014"]
];

const sElaboracion =
[
    ["Rio Tinto Minera Perú (RTMP)",
    "Consultoría para la gestión de actos preparatorios para la implementación del proyecto: “Creación y construcción del puente carrozable sobre el río Checos, del centro poblado la Granja, distrito de Querocoto, provincia de Chota, departamento de Cajamarca”.",
    "Octubre 2019" + "<br>" + "Actualidad"],
    ["Proyecto Especial para la Preparación y Desarrollo de los XVIII Juegos Panamericanos del 2019. PEJP-2019. Ministerio de Transportes y Comunicaciones - MTC.",
    "Servicio de revisión de documentos técnicos para la modificación en la fase ejecución de las IOARRs y proyecto de inversión consideradas en la Adenda Nº 02 del Contrato NEC3, opción F, denominado “Villa de Atletas”.",
    "Junio 2019" + "<br>" + "Actualidad"],
    ["Proyecto Especial para la Preparación y Desarrollo de los XVIII Juegos Panamericanos del 2019. PEJP-2019. Ministerio de Transportes y Comunicaciones - MTC.",
    "Servicio de revisión de documentos técnicos para la modificación en la fase del Proyecto de Inversión “Mejoramiento y ampliación de los servicios del Complejo Deportivo Andrés Avelino Cáceres, Distrito de Villa María del Triunfo Provincia y Departamento de Lima”.",
    "Abril 2019" + "<br>" + "Mayo 2019"],
    ["Rio Tinto Minera Perú (RTMP)",
    "Servicios de Consultoría para la elaboración del Informe Técnico para la ejecución de la obra: Rehabilitación del Pavimento de la Calle Comercio – Fundación Querocoto. Ubicado en el Distrito de Querocoto, Provincia de Chota, Departamento de Cajamarca.",
    "Noviembre 2018" + "<br>" + "Diciembre 2018"],
    ["Rio Tinto Minera Perú (RTMP)",
    "Análisis y asistencia técnica de proyectos de infraestructura para revisar la información y estudios técnicos del Proyecto 258782 “Creación y construcción del puente carrozable sobre el río Checos, del centro poblado La Granja, distrito de Querocoto, provincia de Chota, departamento de Cajamarca”.",
    "Octubre 2018" + "<br>" + "Noviembre 2018"],
    ["Rio Tinto Minera Perú (RTMP)",
    "Servicio de Consultoría para el “Análisis de la situación actual del Proyecto Creación y Afirmado de la Vía de Evitamiento Querocoto - Distrito de Querocoto - Cajamarca, en sus aspectos técnicos, legales y administrativos, a fin de proponer opciones para su adecuada ejecución y cierre”. Código de Proyecto: 258782.",
    "Marzo 2018" + "<br>" + "Mayo 2018"],
    ["Banco de Crédito del Perú S.A.A. (BCP)",
    "Expediente Técnico del Proyecto “Creación del Servicio Educativo Especializado para alumnos de segundo grado de secundaria de Educación Básica Regular con Alto Desempeño Académico de la Región Lambayeque. Código de Proyecto N° 356151”.",
    "Octubre 2017" + "<br>" + "Abril 2019"],
    ["Rebaza & Alcázar Abogados SCRL (Fundación Wiese)",
    "Elaboración y actualización del Expediente Técnico del Proyecto “Acondicionamiento turístico del Complejo Arqueológico El Brujo, en el distrito de Magdalena de Cao de la Región La Libertad. (Código SNIP N° 172122)”.",
    "Marzo 2017" + "<br>" + "Julio 2018"],
    ["MARCOBRE SAC",
    "Estudios de Debida Diligencia de los Expedientes Técnicos de los Proyectos: Construcción del Puente Santa Fe y Unión Victoria y Mejoramiento del Estadio Municipal de Marcona en la localidad de Nazca, Ica.",
    "Marzo 2017" + "<br>" + "Abril 2017"],
    ["MINSUR S.A.",
    "Elaboración del Perfil y Expediente Técnico para Iniciativas de Inversión Pública en los Distritos de San Miguel de Cauri y Jesús (Lauricocha, Huánuco).",
    "Setiembre 2016"],
    ["Empresa Administradora Chungar SAC (Minera VOLCAN S.A.)",
    "Elaboración de Expediente Técnico del Proyecto de Ampliación y Mejoramiento del Sistema de Agua Potable y Alcantarillado del Centro Poblado de San Agustín de Huaychao, distrito de Huayllay, Pasco. Código SNIP N°272749.",
    "Setiembre 2015" + "<br>" + "Mayo 2016"],
    ["BCP Constructora Katarindo",
    "Elaboración de los Expedientes Técnicos de los Proyectos de “Mejoramiento, sustitución y equipamiento de la infraestructura educativa polidocente al año 2010 en la Provincia de Chincha”. Código SNIP N° 225132.",
    "Abril 2015" + "<br>" + "Octubre 2016"],
    ["Hudbay Peru SAC - Constancia Project",
    "Estudio de Diseño de Carretera del Proyecto Constancia - Camino de Carga Proyecto Las Bambas.",
    "Abril 2015" + "<br>" + "Julio 2016"],
    ["KALLPA",
    "Elaboración del Expediente Técnico del Proyecto “Mejoramiento de las condiciones físicas técnicas y operativas del centro cívico del distrito de Colcabamba, provincia de Tayacaja, departamento de Huancavelica” (Código SNIP N°215555).",
    "Junio 2014" + "<br>" + "Julio 2015"],
    ["KALLPA",
    "Elaboración de Expediente Técnico del Proyecto “Mejoramiento de la transitabilidad peatonal y vehicular de las vías Nº 1, 2, 3, 4, 5, 7, C2, C3, C5 y C6 - Los Pinos - Distrito de Mollendo, Provincia de Islay - Arequipa”. (Ficha SNIP Nro. 233873).",
    "Febrero 2014" + "<br>" + "Agosto 2014"],
    ["BCP - TISUR",
    "Elaboración del Expediente Técnico de la Obra Mirador al Pacífico “Mejoramiento de la Transitabilidad Peatonal y Vehicular en la AVIS Mirador al Pacifico del Distrito de Mollendo, Provincia de Islay - Arequipa” (Ficha SNIP Nro. 233874).",
    "Enero 2014" + "<br>" + "Julio 2014"],
    ["BCP - TISUR",
    "Elaboración del Expediente Técnico de la Obra Alto Bellavista “Mejoramiento de la Transitabilidad Peatonal y Vehicular en la AVIS Alto Bellavista del Distrito de Mollendo, Provincia de Islay - Arequipa”. (Ficha SNIP Nro. 239588).",
    "Enero 2014" + "<br>" + "Julio 2014"],
    ["Banco de Crédito BCP",
    "Elaboración del Expediente Técnico del Proyecto “Mejoramiento de la Institución Educativa Nro. 5142 Virgen de Guadalupe - Proyecto Especial Ciudad Pachacútec - Distrito de Ventanilla - Callao”. (Ficha SNIP Nro. 266392).",
    "Diciembre 2013" + "<br>" + "Julio 2014"],
    ["BCP - BACKUS",
    "Elaboración del Expediente Técnico para la “Instalación de la Red de Alcantarillado y Tratamiento de Aguas Residuales de las Comunidades de la Microcuenca Piuray, Distrito Chinchero, Región Cusco”. (Ficha SNIP Nro. 258494).",
    "Noviembre 2013" + "<br>" + "Junio 2014"],
    ["Banco de Crédito BCP",
    "Actualización del expediente técnico del proyecto de saneamiento en Villa Rica / Pasco (Ficha SNIP Nro. 14536).",
    "Setiembre, 2013" + "<br>" + "Noviembre 2013"]
];

const sEvaluacion =
[
    ["APORTA Desarrollo Sostenible Asociación Civil. Consorcio Paracas conformado por Minsur S.A., Tecnológica de Alimentos S.A. e Inversiones Nacionales de Turismo S.A.",
    "Servicios de supervisión y control de la ejecución del Proyecto de Inversión Pública “Mejoramiento de la oferta educativa del servicio educativo del I.E. 22716 Carlos Noriega Jiménez del Asentamiento Humano Santa Cruz, distrito de Paracas - Pisco - Ica”. Código SNIP N° 177375. Financiado y ejecutado por el Consorcio Paracas en el marco del mecanismo de Obras por Impuestos.",
    "Octubre 2017" + "<br>" + "Actualidad"],
    ["KALLPA Generación S.A.",
    "Supervisión Privada de la ejecución de la Obra Mejoramiento de las condiciones físicas técnicas y operativas del Centro Cívico del distrito de Colcabamba, provincia de Tayacaja, departamento de Huancavelica. Código SNIP N° 215555.",
    "Julio 2015" + "<br>" + "Julio 2016"]
];

const sAdministracion =
[
    ["SIGT Ingenieros Consultores",
    "Administración y coordinación de los contratos para la elaboración de los estudios de la carretera de acceso a la Mina Constancia, Tramo Yauri - Dv. Livitaca - Puente Constancia.",
    "Febrero 2012" + "<br>" + "Marzo 2013"]
];

const sProgramas =
[
    ["Chemonics Bosques Sucursal Perú",
    "Rediseño de los Programas Presupuestales: Desarrollo Alternativo Integral y Sostenible – PP-0072 - PIRDAIS, Gestión Integrada y Efectiva del Control de Oferta de Drogas en el Perú – PP-0074-GIECOD y Prevención y Tratamiento del Consumo de Drogas – PP-0051-PTCD.",
    "Setiembre 2019" + "<br>" + "Actualidad"],
    ["Ministerio de la Producción (PRODUCE). Dirección General de Políticas y Análisis Regulatorio",
    "Contratación del Servicio de Consultoría para la identificación, diagnóstico y rediseño del Programa Presupuestal 0093 “Desarrollo Productivo de las Empresas”, según la directiva vigente para Programas Presupuestales en el marco del Presupuesto por Resultados.",
    "Diciembre 2018" + "<br>" + "Octubre 2019"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú",
    "Servicio de consultoría para la “Actualización del Anexo 2 de los contenidos mínimos del Programa Presupuestal de Transporte Urbano Sostenible (PP 0148) para la Programación Presupuestal 2019”.",
    "Mayo 2018" + "<br>" + "Junio 2018"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú",
    "Servicio de Consultoría para la “Revisión de los Modelos Operacionales del Programa Presupuestal de Transporte Urbano Sostenible (PP 0148) y Desarrollo del Plan de Articulación Territorial, considerando transversalmente el cambio climático”.",
    "Octubre 2017" + "<br>" + "Diciembre 2017"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú. MTC - MEF",
    "Coordinación y asesoramiento temático y metodológico en el proceso de diseño del Programa Presupuestal de Transporte Urbano, considerando transversalmente el cambio climático.",
    "Enero 2017" + "<br>" + "Mayo 2017"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú. MTC - MEF",
    "Consultoría para la revisión y actualización de Modelos Operacionales correspondientes al Programa Presupuestal N° 0138: Reducción del costo, tiempo e inseguridad en el Sistema de Transporte, vinculados a los modos de transporte Acuático, Aéreo, Ferroviario y Terrestre.",
    "Setiembre 2016" + "<br>" + "Enero 2017"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú",
    "Diagnóstico de la situación actual del presupuesto público y análisis de posibles mecanismos con el fin de incrementar fondos públicos para la titulación de Comunidades Nativas.",
    "Agosto 2016" + "<br>" + "Octubre 2016"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú. MINAM",
    "Identificación de la brecha financiera presupuestal en el financiamiento asignado en la Agenda Ambiente 2015-2016 y elaboración de propuestas de mejora.",
    "Agosto 2015" + "<br>" + "Noviembre 2015"],
    ["Ministerio de Vivienda, Construcción y Saneamiento",
    "Consultoría de Servicio para el Ajuste al diseño del Programa Presupuestal denominado “Programa Nacional de Saneamiento Rural - PNSR”.",
    "Mayo 2013" + "<br>" + "Julio 2013"]
];

const sAnalisis = 
[
    ["Presidencia del Consejo de Ministros (PCM). Sub Secretaría de Administración Pública de la Secretaría de Gestión Pública.",
    "Servicio de Consultoría para la elaboración de modelos de organización para municipalidades provinciales, a fin de contribuir con la mejora de los servicios que ofrecen las entidades públicas a las personas.",
    "Noviembre 2018" + "<br>" + "Enero 2019"],
    ["Rio Tinto Minera Perú (RTMP)",
    "Servicio de consultoría para desarrollar alternativas técnico - normativas viables vinculadas al compromiso social del Centro de Formación Profesional de Querocoto, conformado por el CETPRO “La Inmaculada” y el “IST Querocoto”.",
    "Mayo 2018" + "<br>" + "Julio 2018"],
    ["Municipalidad Distrital de San Isidro. Sub Gerencia de Movilidad Urbana",
    "Servicio de Consultoría para promover buenas prácticas en transporte público en el Distrito de San Isidro, así como el diseño, maquetación y programación del sitio web para medir la satisfacción de los usuarios.",
    "Noviembre 2017" + "<br>" + "Mayo 2018"],
    ["Instituto Tecnológico de la Producción.",
    "Servicio de Consultoría para brindar soporte técnico especializado en el análisis de la Cartera de Proyectos de Inversión Pública a cargo de la Dirección de Operaciones del Instituto Tecnológico de la Producción.",
    "Octubre 2017" + "<br>" + "Diciembre 2017"],
    ["Graña & Montero S.A.A.",
    "Consultoría “Modelo económico financiero, análisis de sensibilidad y análisis de riesgos del Proyecto Vía Expresa Javier Prado”.",
    "Marzo 2016" + "<br>" + "Mayo 2016"],
    ["PROVIAS Descentralizado - MTC",
    "Servicio de consultoría: “Evaluación del funcionamiento del Instituto Vial Provincial - IVP, como órgano especializado de la gestión vial descentralizada”.",
    "Enero 2016" + "<br>" + "Julio 2016"],
    ["Ministerio de Energía y Minas - MINEM",
    "Servicio de consultoría para desarrollar propuestas de políticas públicas de inversiones en remediación de pasivos ambientales mineros.",
    "Enero 2016" + "<br>" + "Febrero 2016"],
    ["Cooperación Alemana al Desarrollo - Agencia de la GIZ en el Perú",
    "Consultoría para el desarrollo de la directiva operativa de gestión de la evidencia del Ministerio de Desarrollo e Inclusión Social (MIDIS).",
    "Diciembre 2013" + "<br>" + "Abril 2014"],
    ["Asociación Los Andes de Cajamarca",
    "Estudio Técnico sobre Diseño de Políticas Regionales para Cajamarca, sobre la base de una propuesta de Desarrollo Integral",
    "Enero 2006" + "<br>" + "Abril 2006"]
];

const sEstudios =
[
    ["Wildlife Conservation Society - Perú (WCS).",
    "Servicio de Consultoría para el Estudio sobre “Prioridades para la infraestructura económica de la región Loreto, considerando una visión de desarrollo sostenible para la Amazonía”.",
    "Octubre 2019" + "<br>" + "Actualidad"],
    ["Proyecto Especial para la Preparación y Desarrollo de los XVIII Juegos Panamericanos del 2019. MTC.",
    "Contratación del servicio de consultoría para el análisis técnico, económico, financiero y legal de alternativas que permitan contar con vehículos de transporte tipo ómnibus para movilizar a los atletas, oficiales de equipo, prensa, entre otros, durante los Juegos Panamericanos de Lima 2019.",
    "Enero 2018" + "<br>" + "Marzo 2018"],
    ["Ministerio de Economía y Finanzas - MEF. Dirección General de Inversión Pública - DGIP",
    "Consultoría para la elaboración de un modelo automatizado de análisis de decisiones de inversión pública en el marco de Invierte.pe.",
    "Diciembre 2017" + "<br>" + "Enero 2018"],
    ["Ministerio de Economía y Finanzas - MEF. Dirección General de Inversión Pública - DGIP.",
    "Servicio de consultoría para la elaboración de un lineamiento general para la identificación y preparación de la estandarización de un Proyecto de Inversión.",
    "Noviembre 2017" + "<br>" + "Diciembre 2017"],
    ["Ministerio de Economía y Finanzas - MEF. Dirección General de Inversión Pública - DGIP.",
    "Servicio de consultoría para la elaboración de criterios y lineamientos para la simplificación de la identificación, formulación y evaluación ex ante de Proyectos de Inversión que apliquen los contenidos del Anexo 01 de la Directiva General del Invierte.pe.",
    "Noviembre 2017" + "<br>" + "Diciembre 2017"],
    ["Ministerio del Interior.",
    "Servicio de consultoría para la elaboración del estudio económico referido al alquiler de unidades vehiculares para el Servicio de Acciones de Inteligencia y Patrullaje de la Policía Nacional del Perú.",
    "Julio 2017" + "<br>" + "Agosto 2017"],
    ["Ministerio de la Producción (PRODUCE).",
    "Servicio de Consultoría para la formulación del Plan de Calidad para la Cooperativa de Servicios Especiales Mercado Zárate en Lima.",
    "Octubre 2016" + "<br>" + "Enero 2017"],
    ["Ministerio de la Producción (PRODUCE).",
    "Servicio de consultoría para la formulación de un Plan de Negocios para la Asociación de Pequeños Comerciantes del Mercado Central en Tacna.",
    "Octubre 2016" + "<br>" + "Diciembre 2016"],
    ["Ministerio de la Producción (PRODUCE).",
    "Servicio de consultaría para la formulación de un Plan de Gestión Integral para la dinamización de la Asociación de Comerciantes Mercado Venezuela en Lima.",
    "Setiembre 2016" + "<br>" + "Diciembre 2016"],
    ["Ministerio de Transportes y Comunicaciones. Dirección General de Transporte Terrestre",
    "Servicio de consultoría: “Estudio para la elaboración de una propuesta metodológica para el cálculo de las sanciones a las infracciones de las normas regulatorias en materia de transporte y tránsito terrestre”.",
    "Agosto 2015" + "<br>" + "Diciembre 2015"],
    ["Grupo de Análisis para el Desarrollo (GRADE)",
    "Análisis de evaluación de proyectos de FONCODES (PE-P19 y PE-P24) rurales de infraestructura económica y social, así como análisis de información georeferenciada para la adecuada construcción del marco muestral del estudio",
    "Mayo 2006" + "<br>" + "Agosto 2006"]
];

const sAlcides =
[
    ["Alcides Velazco Gonzales",
     "Socio",
     "Especialista en Proyectos del Sector Transportes y Obras Civiles",
     "alcides.velazco@deeconsultores.pe",
     "Consultor internacional, experto en diseño y formulación de proyectos y programas de infraestructura." + "<br>" +"Líder en la preparación de Estudios de Preinversión e Ingeniería de Detalle para proyectos del sector público y privado."
     + "<br><br>" +
     "Ha sido Gerente de Planificación de Provías Nacional y Asesor de la Oficina General de Planificación y Presupuesto del Ministerio de Transportes y Comunicaciones y consultor de organismos multilaterales de financiamiento para el diseño de proyectos y programas de inversión en Argentina, Bolivia, Honduras, Perú y Paraguay."
     + "<br><br>" +
     "Ingeniero Civil, Master en Ingeniería Vial, con postgrado en Gestión de Proyectos, miembro del Project Managment Institute y profesor del Programa de Maestría de Ingeniería Vial de la Universidad de Piura.",
     "resources/imagenes/team-alcides.jpg"
    ]
];

const sFernando = 
[
    ["Fernando Valenzuela Sumarriva",
     "Socio",
     "Especialista en Proyectos del Sector Energía, Competitividad e Innovación",
     "fernando.valenzuela@deeconsultores.pe",
     "Acredita más 20 años de experiencia en el ámbito público y privado, Consultor en análisis, diseño, formulación y evaluación de políticas, estrategias y proyectos del sector público, Sectorista de Energía y Minas, Producción y Turismo en la Dirección General de Programación Multianual del Ministerio de Economía y Finanzas, Director de Inversiones del Ministerio de Agricultura, consultor de Apoyo Consultoría, entre otros cargos."
     + "<br><br>" +
     "Bachiller en Economía de la Pontificia Universidad Católica del Perú, Magister en Administración de ESAN y MSc. de University of Southampton, con estudios de especialización en Evaluación de Proyectos de Harvard University",
     "resources/imagenes/team-fernando.jpg"
    ]
];

const sGustavo =
[
    ["Gustavo Guerra-García Picasso",
     "Socio",
     "Especialista en Gestión Pública y Sector Transportes",
     "gustavo.guerragarcia@deeconsultores.pe",
     "Cuenta más de 20 años en gestión privada y pública. Ha trabajado para organismos internacionales (BM, BIRF, BID, CAF y otros) en Perú, Panamá, Ecuador, Colombia, Venezuela, Bolivia, Surinam y Guyana. Experto en análisis institucional y formulación de proyectos. Amplia experiencia en reestructuraciones de empresas públicas, ministerios del gobierno nacional y entidades regionales."
     + "<br><br>" +
     "En el 2001 ocupó el cargo de Director General de Coordinación Intersectorial de la Presidencia del Consejo de Ministros. Ha sido Vice ministro de Transportes (2001-2002) y se ha desempeñado como Secretario Técnico de la Asamblea Nacional de Gobiernos Regionales - ANGR. Ex-presidente del Directorio de Protransporte de la Municipalidad de Lima Metropolitana. Por su experiencia y su formación, cuenta con sólidas competencias en análisis de viabilidad institucional, económica y financiera."
     + "<br><br>" +
     "Economista egresado de la Pontifica Universidad Católica del Perú en 1989, con maestría en Políticas Públicas de la Universidad de Georgetown (Washington DC) en 1994. Es profesor del Programa de Gobernabilidad y Gerencia Política de la Pontificia Universidad Católica del Perú.",
     "resources/imagenes/team-gustavo.jpg"
    ]
];

const sMiguel =
[
    ["Miguel Prialé Ugás",
    "Socio",
    "Especialista en Gestión Pública y de Proyectos en el Sector Agrario y Ambiental",
    "miguel.priale@deeconsultores.pe",
    "Experiencia en evaluación, formulación y seguimiento de políticas públicas y proyectos de inversión. Especialista en gestión pública, evaluación social de proyectos, comercio internacional y reformas para la descentralización del Estado."
    + "<br><br>" +
    "Acredita más de 14 años de experiencia en gestión pública y privada. Fue responsable del SNIP del 2006 al 2008, como Director General de Programación Multianual del Ministerio de Economía y Finanzas. También se desempeño como Director de Inversiones del Ministerio de Agricultura (2001 - 2003). Ha sido gerente del Proyecto 'Unidades de Gestión Municipal' (2008-2009) ejecutado por Macroconsult y financiado por el Fondo Minero Antamina. En el año 2011 se desempeñó como Gerente General de la Municipalidad Metropolitana de Lima y Presidente del Directorio de EMAPE (2011-2012)."
    + "<br><br>" +
    "Master en Economía Aplicada por el Institut d´Etudes Politiques de Paris (Sciences Po). Post Grado en Administración Pública y Especialización en Negociación Internacional como diplomado de Ecole Nationale de Administration (ENA Francia). Ha sido profesor de la Facultad de Ciencias Sociales - Economía de la PUCP y de la Facultad de Ciencias Económicas de la Universidad San Martín de Porres. Actualmente es profesor en la Escuela de Post Grado en Gestión Pública de la Universidad del Pacífico.",
    "resources/imagenes/team-miguel.jpg"
   ]
];

const socios = 
[
    ["Alcides Velazco Gonzales",
     "Socio",
     "resources/imagenes/team-alcides.jpg"
    ],
    ["Fernando Valenzuela Sumarriva",
     "Socio",
     "resources/imagenes/team-fernando.jpg"
    ],
    ["Gustavo Guerra-García Picasso",
     "Socio",
     "resources/imagenes/team-gustavo.jpg"
    ],
    ["Miguel Prialé Ugás",
     "Socio",
     "resources/imagenes/team-miguel.jpg"
    ]
];

const sArticulos = 
[
    ["Gustavo Guerra García, Wildlife Conservation Society / Análisis del Proyecto: Hidrovía Amazónica - Ríos Marañón, Amazonas, Huallaga y Ucayali",
    "El objetivo central del proyecto denominado “Mejoramiento y Mantenimiento de las Condiciones de Navegabilidad en los Ríos Huallaga, Ucayali, Marañón y Amazonas” es implementar un conjunto importante de obras y acciones destinado a la mejora de las condiciones de navegabilidad en estas vías fluviales y así obtener un tráfico de pasajeros y cargas eficiente, económico, seguro y confiable, durante todo el año.",
    "resources/pdf/articulo_201905.pdf"
    ],
    ["Miguel Prialé Ugás / La competitividad de Lima necesita inversión en infraestructura vial",
    "Un análisis comparativo entre las principales ciudades de Latinoamérica sobre las actuales condiciones viales nos revela las oportunidades y retos que tenemos en nuestra ciudad para enfrentar su crecimiento, logrando conjugar lo urbanístico con lo económico, con un adecuado desarrollo de la infraestructura vial y el reordenamiento del transporte público, apuntando a generar una cultura del cuidado del medio ambiente y mejoras en la productividad personal y empresarial de sus ciudadanos, amalgamando todos estos aspectos en torno a una lógica obvia y simple: priorizar primero al peatón, en seguida al ciclista, luego el bus o tren y finalmente el auto privado.",
    "resources/pdf/articulo_201402b.pdf"
    ],
    ["Miguel Prialé Ugás / Obras por impuestos: ventajas, desventajas y desafíos",
    "Desde su creación en el 2008, son 36 las empresas que vienen financiando obras públicas a través de la modalidad de Obras por Impuestos. Al cierre del 2013, Proinversión reporta avances significativos plasmados en nuevas alianzas entre 28 gobiernos sub-nacionales y 23 empresas privadas, totalizando más de S/.403 millones para dicho año. En este artículo se exponen las principales ventajas, desafío y riesgos del funcionamiento de esta nueva modalidad de ejecución para el desarrollo de proyectos de inversión pública.",
    "resources/pdf/articulo_201402.pdf"
    ],
    ["Miguel Prialé Ugás / SNIP para todos. Guía amigable para navegar en la burocracia de los proyectos",
    "Reseña",
    "resources/pdf/articulo_201310.pdf"
    ],
    ["Miguel Prialé Ugás / SNIP for All. Friendly Guide to Navigate through the Bureaucracy of Projects",
    "Reseña",
    "resources/pdf/articulo_201310b.pdf"
    ],
    ["Diego Cueto, Miguel Prialé / Investigación y evaluación en el Estado. Políticas públicas en infraestructura económica de transportes, saneamiento y energía",
    "El presente documento analiza la relación entre investigación y políticas públicas, desde los recientes esfuerzos del Estado para mejorar su desempeño y la calidad del gasto, especialmente en la inversión en infraestructura económica. Para ello, se toman los resultados de casos de programas y proyectos de inversión en Perú y América Latina especialmente en los sectores transportes, saneamiento y energía. El documento resalta la importancia de la investigación aplicada en el marco de las actuales reformas para mejorar los resultados de la gestión y los servicios públicos.",
    "resources/pdf/articulo_201308.pdf"]
];