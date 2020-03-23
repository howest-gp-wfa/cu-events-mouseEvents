"use strict";

var divFeedback, divMoveZone, divCirkel;

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
