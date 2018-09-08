/** FullDeck UI helpers */

var pki = forge.pki;

function newKeys() {
  alert("Local JS found in static/js/fulldeck.js");
}

function newVerifyKeys() {
  var keys = pki.rsa.generateKeyPair(2048);
  return  keys;
}
