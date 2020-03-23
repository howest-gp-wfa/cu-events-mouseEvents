"use strict";

var divFeedback, divMoveZone, divCirkel;
var slcCapture;
var teller;

window.addEventListener('load',Initieer);

function Initieer(){

  KoppelElementen();
  KoppelEvents();
}

const KoppelEvents = () => {
   
  divCirkel.addEventListener('mouseover', ShowMouseOver, false);
  divCirkel.addEventListener('mouseout', ShowMouseOut, false);
  divCirkel.addEventListener('mousedown', ShowMouseDown, false);
  divCirkel.addEventListener('mouseup', ShowMouseUp, false);
  divMoveZone.addEventListener('mousemove', ShowMouseMove, false);
  divCirkel.addEventListener('mouseenter', ShowMouseEnter, false);
  divCirkel.addEventListener('mouseleave', ShowMouseLeave, false);

}

const KoppelElementen = () => {
  divFeedback = document.getElementById("divFeedback");
  divMoveZone = document.getElementById("divMoveZone");
  divCirkel = document.querySelector('#divCirkel');

}

const ShowMouseOver = (e) => {
  let feedback = `MouseOver op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseOut = (e) => {
  let feedback = `MouseOut op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseDown = (e) => {
  let feedback = `MouseDown op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseUp = (e) => {
  let feedback = `MouseUp op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseMove = (e) => {
  let feedback = `MouseMove op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseEnter = (e) => {
  let feedback = `MouseEnter op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

const ShowMouseLeave = (e) => {
  let feedback = `MouseLeave op Plaats: X: ${e.screenX} - Y: ${e.screenY} <br/>`;
  divFeedback.innerHTML += feedback;
}

function GeefKlik(e){
  let propagationStopped = 
    (slcPropagate.options[slcPropagate.selectedIndex].value == 'true');
    console.log(e.target);
  divFeedback.innerHTML += `Knopnr: ${e.button}<br/>`;
  divFeedback.innerHTML += `Getriggered door ${this.id} <br/>`; 
  divFeedback.innerHTML += `Je klikte op: ${e.target.id} <br/>`; 
  divFeedback.innerHTML += `Plaats: ${e.screenX} ${e.screenY} <br/>`; 
  divFeedback.innerHTML += `PlaatsDoc: ${e.pageX} ${e.pageY} <br/>`; 
  divFeedback.innerHTML += `PlaatsClient: ${e.clientX} ${e.clientY} <br/>`; 
   if (propagationStopped) e.stopPropagation();
}






