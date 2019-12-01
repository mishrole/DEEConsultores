<?//ENVIANDO EL CORREO
if (isset($HTTP_POST_VARS["accion"]))
{	$EMailMensaje .= "Nombres: ".$HTTP_POST_VARS["nombre"]."\n";
	$EMailMensaje .= "Correo electrónico: ".$HTTP_POST_VARS["email"]."\n";
	$EMailMensaje .= "Telefono: ".$HTTP_POST_VARS["telefono"]."\n";
	$EMailMensaje .= "Comentarios: \n".$HTTP_POST_VARS["comentario"]."\n";
	//$EMAIL_CONTACTO = "manuel_chc@yahoo.com";
	//mail("contacto@deeconsultores.pe", "[Web site de DEE] Solicitud de Contacto", $EMailMensaje,"From: ".$HTTP_POST_VARS["email"]."\nReply-To: ".$HTTP_POST_VARS["email"]."\n");
	mail("manuel_chc@yahoo.com", "[Web site de DEE] Solicitud de Contacto", $EMailMensaje,"From: ".$HTTP_POST_VARS["email"]."\nReply-To: ".$HTTP_POST_VARS["email"]."\n");
}?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>DEE-Consultores - QUIENES SOMOS</title>
<meta name="Description" content="DEE Consultores" />
<meta name="Author" content="Manuel Chavez Castro - manuel.chc@gmail.com" />
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="cache-control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="expires" content="-1" />
<link href="style.css" type="text/css" rel="stylesheet" media="all"/>
<script type="text/javascript" src="script/jquery-1.6.2.js"></script>
<!-- include jQuery + carouFredSel plugin -->
<script type="text/javascript" language="javascript" src="script/jquery-1.8.2.min.js"></script>
<script type="text/javascript" language="javascript" src="script/jquery.carouFredSel-6.2.0-packed.js"></script>
<script type="text/javascript" language="javascript">
$(function() {
	//	Basic carousel, no options
	$('#foo0').carouFredSel({	
	auto: {
		timeoutDuration : 5000     //  5 * auto.duration
	    }
	});
});
</script>
</head>
<body>
<div class="wrapper">
  <div class="cuerpo">
    <div class="cabecera">
      <div class="logo"><a href="index.html"><img src="imagenes/logo-dee.gif" width="233" height="72" title="DEE Consultores" /></a></div>
      <div class="nav">
        <ul>
          <li><a href="qsomos.html">QUI�NES SOMOS</a></li>
          <li><a href="servicios_fproyectos.html">SERVICIOS</a></li>
          <li><a href="clientes.html">CLIENTES</a></li>
          <li><a href="equipo_avelazco.html">EQUIPO</a></li>
          <li class="li-ultimo navOn"><a href="#" style="color: #B0B0B0;">CONT�CTENOS</a></li>
        </ul>
      </div>
      <div class="limpiar"></div>
    </div>
    <!--fin cabecera-->
    
    <div style="margin: 0; height: 370px; width: 960px;"> 
		<div class="list_carousel">
			<ul id="foo0">
				<li><img src="imagenes/home1.jpg" title="DEE Consultores - Estrateg�a" /></li>
				<li><img src="imagenes/home2.jpg" title="DEE Consultores - Conocimiento" /></li>
				<li><img src="imagenes/home3.jpg" title="DEE Consultores - Precision" /></li>
			</ul>
		</div>
	</div>
    <div class="content">
      <div class="col-izq izq">
        <div class="sec-quienesomos2">
          <h1>CONT�CTENOS</h1>
          <div class="texto ">
            <p>Muchas gracias por enviarnos sus comentarios. Nos contactaremos con usted a la brevedad posible.</p>
          </div>
          <div class="limpiar"></div>
        </div>
      </div>
      <!--fin col-izq-->
      <div class="col-der der">
        <div class="sec-resumen">
          <div class="texto">
		  <table cellpadding="0" cellspacing="0" border="0">
		  <tr>
		  	<td valign="top"><img src="imagenes/googgle.jpg" width="37" height="36" title="Ver en google map"></td>
			<td><a href="contacto_map.html" title="Google Map" rel="gb_page_center[540, 440]" style="text-decoration: underline;">Edificio Los Olmos of. N� 1002 Residencial San Felipe Jes�s Mar�a - Lima</a><br>
		  (511) 462 - 1186 <br>
		  <a href="mailto:contacto@deeconsultores.pe">contacto@deeconsultores.pe</a><br>
		  <a href="http://www.deeconsultores.pe">www.deeconsultores.pe</a></td>
		  </tr>
		  </table>
          </div>
        </div>
        <!--fin sec-articulos--> 
      </div>
      <div class="limpiar"></div>
    </div>
    <!--fin content-->
    
    <div class="footer">
      <div class="foo-1 izq">
        <ul>
          <li class="inicio"><a href="index.html">INICIO</a></li>
          <li class="qsomos"><a href="qsomos.html">QUI�NES SOMOS</a></li>
          <li class="servicios"><a href="servicios_fproyectos.html">SERVICIOS</a></li>
          <li class="clientes"><a href="clientes.html">CLIENTES</a></li>
          <li class="equipo"><a href="equipo_avelazco.html">EQUIPO</a></li>
        </ul>
      </div>
      <div class="foo-2 izq"></div>
      <div class="foo-2-1 izq"></div>
      
      <!--codigo script--> 
      <script type="text/javascript">
	  jQuery("div.foo-1 ul li.servicios a").hover(function () {
	  	jQuery("div.foo-2").html("<a href='servicios_fproyectos.html#se'>Formulaci�n de proyectos</a> <a href='servicios_ingenieria.html#se'>Elaboraci�n de estudios de ingenier�a de detalle</a> <a href='servicios_esupervision.html#se'>Evaluaci�n y supervisi�n de proyectos</a> <a href='servicios_acontratos.html#se'>Administraci�n de contratos</a> <a href='servicios_tespecializadas.html#se'>Traducciones especializadas</a> <a href='servicios_presupuesto.html#se'>Programas presupuestales</a> <a href='servicios_riesgo.html#se'>An�lisis institucionales y de riesgos</a> <a href='servicios_economia.html#se'>Estudios Econ�micos</a>");
      });
	  jQuery("div.foo-1 ul li.inicio a").hover(function () {
	  	jQuery("div.foo-2").html("");
      });
	  jQuery("div.foo-1 ul li.qsomos a").hover(function () {
	  	jQuery("div.foo-2").html("");
      });
	  jQuery("div.foo-1 ul li.clientes a").hover(function () {
	  	jQuery("div.foo-2").html("");
      });
	  jQuery("div.foo-1 ul li.equipo a").hover(function () {
	  	jQuery("div.foo-2").html("");
      });
	  jQuery("div.foo-2-1").hover(function () {
	  	jQuery("div.foo-2").html("");
      });
	  </script> 
      <!--codigo script-->
      
      <div class="foo-3 izq"> <img src="imagenes/logo-dee-2.gif" width="125" height="40" />T: (511) 4621186<br />
        <a href="mailto:contacto@deeconsultores.pe">contacto@deeconsultores.pe</a> </div>
      <div class="foo-4 izq">
        <ul>
          <li class="face"><a href="https://www.facebook.com/deeconsultoresestrategicos?fref=ts" target="_blank"><img src="imagenes/blank.png" width="24" height="24" /></a></li>
          <li class="twit"><a href="#" target="_blank"><img src="imagenes/blank.png" width="24" height="24" /></a></li>
          <li class="linke"><a href="#" target="_blank"><img src="imagenes/blank.png" width="24" height="24" /></a></li>
        </ul>
      </div>
      <div class="creditos"> Copyright &copy; 2013 DEE consultores. Todos los derechos reservados. </div>
      <div class="limpiar"></div>
    </div>
    <!--fin footer-->
    <div class="limpiar"></div>
  </div>
  <!--fin cuerpo--> 
  
</div>
<!--fin wrapper-->

</body>
</html>
