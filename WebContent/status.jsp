<%@page import="javax.security.auth.message.callback.PrivateKeyCallback.Request"%>
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
	
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	
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
						width="30" height="30" href="index.jsp" class="d-inline-block align-top" alt="">
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
							
							<button type="button" class="btn btn-light">Chronik</button>
							<button type="button" class="btn btn-light">Export</button>
						</div>
					</form>
	
					<ul class="navbar-nav ml-auto">
						
						<li class="nav-item dropdown"><a
							class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
							role="button" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false"> mehr </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a class="dropdown-item" href="#">Hilfe</a> <a
									class="dropdown-item" href="#">Über</a>
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

		<div id="export-content" class="export-content">
		</div>
		
	
		
	
		<!-- JS FILES -->
		<script src="js/libs/jquery-3.2.1.min.js"></script>
		<!-- this requires bootstrap; its for layovers -->
		<script src="js/libs/popper.min.js"></script>
		<script src="js/libs/bootstrap.min.js"></script>
		<script src="js/libs/ol.js"></script>
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	
		<script src="js/setup.js"></script>
		<script src="js/export.js"></script>
	
	</body>
	</html>
