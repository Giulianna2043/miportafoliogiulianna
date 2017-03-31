/*$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#inicio');
	$('#btn-inicio').click(onClickBtnSaludo);
	$('#btn-aboutme').click(onClickBtnNombre);
    $('#btn-nombres').click(onClickBtnJuego);

	TweenMax.from($('#inicio h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnSaludo() {
	gotoSection('nombres');
}

function onClickBtnNombre() {
	gotoSection('juego');
}
function onClickBtnJuego() {
	gotoSection('juego');
   
function onClickBtnNombre() {
	gotoSection('juego');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	//TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}*/