<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<title>OHDM</title>
	<meta http-equiv="content-type" content="text/html" charset="utf-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="OpenHistoricalDataMap Webmapping">
	<meta name="author" content="Sebastian Jüngling">
	<meta name="keywords"
		content="OpenHistoricalDataMap, OHDM, HTW, HTW-Berlin, Webmapping, Webmap, map">
	
	<!-- replace favicon icon here! -->
	<link rel="shortcut icon" href="ressources/favicon.ico"
		type="image/x-icon">
	<link rel="icon" href="ressources/favicon.ico" type="image/x-icon">
	
	<!-- CSS FILES -->
	<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
	<link rel="stylesheet" href="css/ol.css" type="text/css">
	<link rel="stylesheet" href="css/style.css">
	<!--
	<script> 
		console.log('start');
	
			$(document).on("click", "#routesubmit", function() { 	// When HTML DOM "click" event is invoked on element with ID "somebutton", execute the following function...
				console.log('inClick')
				$.post("PlanRoute", function(responseText) {   		// Execute Ajax GET request on URL of "someservlet" and execute the following function with Ajax response text...
					let resp = responseText;
					console.log(resp);
					$("#route-time").text(resp);      		// Locate HTML DOM element with ID "somediv" and set its text content with the response text.
				});
			});
	
		console.log("end");
	</script> -->
	
	</head>
	<body>
	
		<!-- 
		top navbar
		 -->
		<div class="navbar-container">
			<nav class="navbar navbar-expand-md navbar-light top-nav">
				<nav class="navbar navbar-light">
					<!-- replace OHDM LOGO here !-->
					<span class="navbar-brand navbar-brand-long"> <img
						src="https://dummyimage.com/30x30/76B90/fff.png&text=LOGO"
						width="30" height="30" class="d-inline-block align-top" alt="">
						OpenHistoricalDataMap 1.0
					</span> <span class="navbar-brand navbar-brand-short"> <img
						src="https://dummyimage.com/30x30/76B90/fff.png&text=LOGO"
						width="30" height="30" class="d-inline-block align-top" alt="">
						OHDM 1.0
					</span>
				</nav>
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
	
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<form class="form-inline mobile-hidden">
						<div class="btn-group" role="group">
							<button type="button" class="btn btn-light">Bearbeiten</button>
							<!-- <div class="dropdown">
								  <button class="btn btn-light dropdown-toggle edit-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
								  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#">Action</a>
									<a class="dropdown-item" href="#">Another action</a>
									<a class="dropdown-item" href="#">Something else here</a>
								  </div>
								</div> -->
							<button type="button" class="btn btn-light">Chronik</button>
							<button type="button" class="btn btn-light">Export</button>
						</div>
					</form>
	
					<ul class="navbar-nav ml-auto">
						<!-- <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="#">Link</a></li> -->
						<li class="nav-item dropdown"><a
							class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
							role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> mehr </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Hilfe</a> <a
									class="dropdown-item" href="#">Über</a>
								<!-- <div class="dropdown-divider"></div> -->
								<a class="dropdown-item" href="#">Urheberrecht</a>
							</div></li>
	
					</ul>
					<form class="form-inline">
						<div class="btn-group LoginRegisterGroup" role="group">
							<button type="button" class="btn btn-light" data-toggle="modal"
								data-target="#loginModal">Anmelden</button>
							<button type="button" class="btn btn-light" data-toggle="modal"
								data-target="#registerModal">Registrieren</button>
						</div>
					</form>
	
	
				</div>
			</nav>
		</div>
	
	
		<!-- 
		modals 
		-->
		<!-- login modal -->
		<div class="modal fade" id="loginModal" tabindex="-1" role="dialog"
			aria-labelledby="loginModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="loginModalLabel">Anmelden</h5>
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label for="inputLoginEmail">E-Mail Adresse oder
									Benutzername</label> <input type="email" class="form-control"
									id="inputLoginEmail" aria-describedby="emailHelp"
									placeholder="E-Mail oder Benutzername">
							</div>
							<div class="form-group">
								<label for="inputLoginPassword">Passwort</label> <input
									type="password" class="form-control" id="inputLoginPassword"
									placeholder="Passwort">
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-light" id="anmelden-button">Anmelden</button>
					</div>
				</div>
			</div>
		</div>
	
		<!-- register modal -->
		<div class="modal fade" id="registerModal" tabindex="-1" role="dialog"
			aria-labelledby="registerModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="registerModalLabel">Registrieren</h5>
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<form>
							<div class="form-group">
								<label for="inputRegisterEmail">E-Mail</label> <input
									type="email" class="form-control" id="inputRegisterEmail"
									aria-describedby="emailHelp" placeholder="E-Mail">
							</div>
							<div class="form-group">
								<label for="inputRegisterEmail2">E-Mail wiederholen</label> <input
									type="email" class="form-control" id="inputRegisterEmail2"
									aria-describedby="emailHelp" placeholder="E-Mail wiederholen">
							</div>
	
							<div class="form-group">
								<label for="inputUserName">Benutzername</label> <input
									type="email" class="form-control" id="inputUserName"
									aria-describedby="emailHelp" placeholder="Benutzername">
							</div>
	
							<div class="form-group">
								<label for="inputRegisterPassword">Passwort</label> <input
									type="password" class="form-control" id="inputRegisterPassword"
									placeholder="Passwort">
							</div>
							<div class="form-group">
								<label for="inputRegisterPassword2">Passwort wiederholen</label>
								<input type="password" class="form-control"
									id="inputRegisterPassword2" placeholder="Passwort wiederholen">
							</div>
						</form>
						<div>
							<div>
								<label id="privacy"><input type="checkbox" id="privacy-checkbox"> 
									Hiermit bestätige ich, dass ich die <a
									id="privacylink" href="privacy.jsp" target="_blank">
										Datenschutzerklärung</a>(nicht fertig, nur zur Veranschaulichung)
									gelesen und meine personenbezogenen Daten (Name, Vorname,
									Emailadresse) zum Zwecke der Bearbeitung meiner Anfrage durch
									die Plattform OpenHistoricalDataMap gespeichert und
									weiterverarbeitet werden. </label>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-light" id="register-button">Registrieren</button>
					</div>
				</div>
			</div>
		</div>
		<!-- The Modal -->
		<div id="myModal" class="modal">
	
			<!-- Modal content -->
			<div class="modal-content-alert">
				<div class="modal-header-alert">
					<span class="close-modal-alert" onclick="doClose()">&times;</span>
					<h3>OHDM 1.0</h3>
				</div>
				<div class="modal-body-alert" id="modalBody">
					<p></p>
				</div>
			</div>
		</div>
		<div id="map-container">
			<!-- 
			map
			 -->
			<div id="map"></div>
			
	
	
			<!-- <div class="side-menu left-side-menu left-side-menu-open">
	
				<div class="input-group" id="search-controll-container">
					<input type="text" class="form-control" placeholder="Suchen"
						id="search-controll-input">
					<button type="button" class="btn btn-light"
						id="search-controll-button">Los</button>
				</div>
	
				<div class="left-menu-content">
					<div class="search">
						<div class="side-menu-heading">Suchergebnisse:</div>
						<div class="search-controll-results">
							<ul class="search-controll-results-list">
							</ul>
						</div>
					</div>
	
				</div>
	
			</div> -->
	
			<!-- 
			right buttons
			 -->
			<div class="controll-container">
				<div class="side-menu-button" title="Suche">
					<a href="#" id="search"> <img class="icon"
						src="ressources/icons/search.svg" alt="Suche">
					</a>
				</div>
				<div class="side-menu-button" title="Zeit einstellen">
					<!-- <a href="#" id="settings"> <img class="icon"
						src="ressources/icons/cog.svg" alt="Einstellungen">
					</a> -->
					<a href="#" id="settings"> <img class="icon"
						src="ressources/icons/clock.svg" alt="Einstellungen">
					</a>
				</div>
				<div class="side-menu-button" title="Layer-Auswahl">
					<a href="#" id="layer"> <img class="icon"
						src="ressources/icons/layers.svg" alt="Layer">
					</a>
				</div>
				<div class="side-menu-button" title="Legende">
					<a href="#" id="legend"> <img class="icon"
						src="ressources/icons/info-with-circle.svg" alt="Legende">
					</a>
				</div>
				<div class="side-menu-button" title="Routenplaner">
					<a href="#" id="routes"><img class="icon"
						src="ressources/icons/route.svg" alt="Routenplaner"> </a>
				</div>
				<div class="side-menu-button" title="Karte Exportieren">
					<a href="#" id="export"><img class="icon"
						src="ressources/icons/export.svg" alt="Karte Exportieren"> </a>
				</div>
			</div>
	
			<!-- 
			right menu
			 -->
			<div class="side-menu right-side-menu right-side-menu-closed">
				<!-- search menu -->
				<div id="search-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Suche</h5>
					</div>
					<div class="side-menu-content">
						<div class="input-group" id="search-controll-container">
							<input type="text" class="form-control" placeholder="Suchen"
								id="search-controll-input">
							<button type="button" class="btn btn-light"
								id="search-controll-button">Los</button>
						</div>
						<div class="search">
							<div class="search-controll-results">
								<ul class="search-controll-results-list">
									<!--gets filled by geocoding.js-->
								</ul>
							</div>
						</div>
					</div>
				</div>
	
				<!-- layer menu -->
				<div id="layer-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Layers</h5>
					</div>
					<div class="side-menu-content">
						<div class="row">
							<button class="btn btn-light basemap disabled-basemap col-12" id="mapnik">GeoServer</button>
						</div>
						<div class="row">
							 <button class="btn btn-light basemap disabled-basemap col-12" id="mapnik" disabled>Mapnik</button>
						</div>
					</div>

				</div>
				
				<!-- layer menu -->
				<div id="legend-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Legende</h5>
					</div>
					<div class="side-menu-content">Hier würde die Legende stehen,
						abhängig vom Style der aktuellen Basemap</div>
				</div>
	
				<!-- settings menu -->
				<div id="settings-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Einstellungen</h5>
					</div>
					<div class="side-menu-content">
	
						<div class="container">
							<div class="row">
								<label for="year-select" class="side-menu-label col-6 ">Jahr</label>
								<select id="year-select" class="custom-select col-6 "></select>
								<label for="month-select" class="side-menu-label col-6 ">Monat</label>
								<select id="month-select"
									class="custom-select col-6 select-month"></select> <label
									for="day-select" class="side-menu-label col-6 ">Tag</label> <select
									id="day-select" class="custom-select col-6 select-day"></select>
							</div>
							<div class="row">
								<button id="getTime" type="button"
									class="btn btn-light apply-time col-12">übernehmen</button>
							</div>
							<div class="row">
								<button id="resetTime" type="button"
									class="btn btn-light apply-time col-12">zurücksetzen</button>
							</div>
						</div>
					</div>
				</div>
	
				<!-- routes menu -->
				<div id="routes-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Routenplaner</h5>
					</div>
					<div class="side-menu-content">
						<form> 
							<div class="container">
								<div class="row">
									<input type="text" style="margin-bottom: 10px;" onclick="addPoint(true)" id="start" name="start" type="button"
									class="btn btn-light apply-time col-12 coordinate-content" value="Start"></button>
									<input type="text" style="margin-bottom: 10px;" onclick="addPoint(false)" id="target" name="target" type="button"
									class="btn btn-light apply-time col-12 coordinate-content" value="Ziel" ></button>
									<select style="margin-bottom: 10px;" id="class-of-person"
										name="class-of-person"
										class="custom-select col-12 custom-select">
										<option value="farmer">Bauer</option>
										<option value="noble">Adliger</option>
									</select> <select style="margin-bottom: 10px;" id="transport-type"
										name="transport-type"
										class="custom-select col-12 custom-select">
										<option value="walking">Wandern</option>
										<option value="horse">Reiten</option>
										<option value="carriage">Pferdekutsche</option>
										<option value="boat">Schiff</option>
										<option value="bicycle">Fahrrad</option>
										<option value="car">Auto</option>
									</select>
									<div class="waterwayincl-container">
										<label for="waterwayincl" class="checkbox-label">Wasserweg
											erlauben <input type="checkbox" name="waterwayincl"
											id="waterwayincl"> <span class="checkmark"></span>
										</label>
									</div>
	
								</div>
								
	
								<div class="row">
									<p id="route-time"> ${time} </p>
								</div>
	
							</div>
						</form>
						<div class="row">
									<button onClick="planRoute()" id="routesubmit" class="btn btn-light apply-time col-12" >übernehmen</button>
								</div>
					</div>
				</div>
	
				<div id="export-menu">
					<div class="side-menu-heading">
						<span class="close-menu"><img class="close-icon"
							src="ressources/icons/cross.svg" alt="Schließen"></span>
						<h5>Karte exportieren</h5>
					</div>
					<div class="side-menu-content">

					<div class="container">
						<div class="row">
							<div class="form-export-container">
								<form id="form-export" action="">
									<input type="text" name="max-lat" class="form-control col-5 form-export-entry " id="max-lat" readonly>
									<br style="height: 2rem;"> 
									<input type="text" name="min-lon" class="form-control col-5 form-export-entry "id="min-lon" readonly> 
									<input type="text" name="max-lon" class="form-control col-5 form-export-entry " id="max-lon" readonly>
									<br style="height: 2rem;">
									<br style="height: 2rem;"> 
									<br style="height: 2rem;"> 
									<br style="height: 2rem;"> 
									<input type="text" name="min-lat" class="form-control col-5 form-export-entry" id="min-lat" readonly>
								</form>
							</div>
							<p style="font-size: x-small;">Wenn Sie den kompletten sichtbaren Bereich exportieren möchten, drücken Sie auf Exportieren.</p>
						</div>
						
						<div class="row">
							<button onclick="addInteraction()" type="button"
								class="btn btn-light apply-time col-12">Eigenen Bereich wählen</button>
						</div>
						<p>
						<div class="row">
							<input type="text" id="export-name" class="form-control col-12" style="margin-bottom: 20px;" placeholder="Name" >
						</div>
						<div class="row">
							<select style="margin-bottom: 10px;" id="datatype"
										name="datatype"
										class="custom-select col-12 custom-select">
								<option value="OSM" disabled selected>Dateiformat</option>
								<option value="OSM">OSM</option>
								<option value="RDF">RDF</option>
							</select>
						</div>
						
						
						<div class="row">
							<button onclick="exportMap()" id="export-button" type="button"
								class="btn btn-light apply-time col-12">Exportieren</button>
						</div>
						<div class="side-menu-content">
							Hier können Sie Karten exportieren, diese stehen dann auch für
							den <a href="">Android Offline Viewer</a> verfügbar.
						</div>
						<div class="row">
							<button onclick="toStatus()" type="button"
								class="btn btn-light apply-time col-12">Bereits
								exportierte Karten</button>
						</div>
					</div>
				</div>
				</div>
			</div>
		</div>
		
	
	
		<!-- JS FILES -->
		<script src="js/libs/jquery-3.2.1.min.js"></script>
		<!-- this requires bootstrap; its for layovers -->
		<script src="js/libs/popper.min.js"></script>
		<script src="js/libs/bootstrap.min.js"></script>
		<script src="js/libs/ol.js"></script>
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	
		<script src="js/setup.js"></script>
		<script src="js/layers.js"></script>
		<script src="js/map.js"></script>
		<script src="js/register.js"></script>
		<script src="js/menu.js"></script>
		<script src="js/geocoding.js"></script>
		<script src="js/route.js"></script>
		<script src="js/travelTime.js"></script>
		<script src="js/export.js"></script>
	
	</body>
	</html>
