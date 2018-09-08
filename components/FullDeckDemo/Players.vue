<template>
  <div>
    <button @click="resetGame">Reset</button>
    <div>Players</div>
    <div id="player1">
      <p>Player 1</p>
      <p>
        Private Key: {{ p1PrivKey }}
        Public Key: {{ p1PubKey }}
      </p>
    </div>
     <div id="player2">
      <p>Player 2</p>
      <p>
        Private Key: {{ p2PrivKey }}
        Public Key: {{ p2PubKey }}
      </p>
    </div>
     <div id="player3">
      <p>Player 3</p>
      <p>
        Private Key: {{ p3PrivKey }}
        Public Key: {{ p3PubKey }}
      </p>
    </div>
    <div id="player4">
      <p>Player 4</p>
      <p>
        Private Key: {{ p4PrivKey }}
        Public Key: {{ p4PubKey }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js' }
      ]
    }
  },
  computed: {

  },
  methods: {
    resetGame(e) {
      //  this.$store.commit('players/add', e.target.value)
      //  e.target.value = ''
      var self=this;
      return crypto.subtle.generateKey({name: "RSA-OAEP", modulusLength: 2048, publicExponent: new Uint8Array([0x01, 0x00, 0x01]), hash: {name: "SHA-256"}}, false, ["encrypt", "decrypt"])
      .then(function(key){
        crypto.subtle.exportKey('jwk', key.publicKey)
        .then(function(keyOut){
          self.p1PubKey = keyOut;
          var data = 'test'
          var ciphertext = CryptoJS.AES.encrypt(data, 'secret key 123');
          self.p1PrivKey = ciphertext.toString();
        })
      })
      .catch(function(err){
          console.error(err);
      })

      alert('test')
    }
  },
  data: function () {
    return {
      p1PubKey: 'a',
      p1PrivKey: 'b',
      p2PubKey: 'c',
      p2PrivKey: 'd',
      p3PubKey: 'e',
      p3PrivKey: 'f',
      p4PubKey: 'g',
      p4PrivKey: 'h'
    }
  }
}
</script>

<style>
</style>
