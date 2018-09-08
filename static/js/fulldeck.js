/** FullDeck UI helpers */

function newKey() {
  return new Promise((f, r) => forge.pki.rsa.generateKeyPair(
    2048, (err, pair) => err ? r(err) : f(pair)))
    .then(keypair => {

        return keypair;
    });
}

function newVerifyKeys() {
  return newKey();
}

function newCryptKeys() {
  return newKey();
}
