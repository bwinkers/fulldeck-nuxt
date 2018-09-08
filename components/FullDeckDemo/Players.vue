<template>
  <div>
    <button @click="resetGame">Reset</button>
    <div>Players</div>
    <div id="player1">
      <p>Player 1</p>
      <p>
        Private Signing Key: {{ players.p1.keys.verify.privateKey }}
      </p>
      <p>
        Public Signing Key: {{ players.p1.keys.verify.publicKey }}
      </p>
       <p>
        Private Crypto Key: {{ players.p1.keys.crypt.privateKey }}
      </p>
      <p>
        Public Crypto Key: {{ players.p1.keys.crypt.publicKey }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/node-forge@0.7.0/dist/forge.min.js' },
        { src: 'js/fulldeck.js' }
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

      var keys1 = newVerifyKeys();
      self.players.p1.keys.verify = keys1;

    }
  },
  data: function () {
    return {
      players: {
        p1: {
          keys: {
            verify: {
              publicKey: '',
              privateKey: ''
            },
            crypt: {
              publicKey: '',
              privateKey: ''
            },
            session: {}
          }
        },
        p2: {
          keys: {
            verify: {
              publicKey: '',
              privateKey: ''
            },
            crypt: {
              publicKey: '',
              privateKey: ''
            },
            session: {}
          }
        },
        p3: {
          keys: {
            verify: {
              publicKey: '',
              privateKey: ''
            },
            crypt: {
              publicKey: '',
              privateKey: ''
            },
            session: {}
          }
        },
        p4: {
          keys: {
            verify: {
              publicKey: '',
              privateKey: ''
            },
            crypt: {
              publicKey: '',
              privateKey: ''
            },
            session: {}
          }
        }
      }
    }
  }
}
</script>

<style>
</style>
