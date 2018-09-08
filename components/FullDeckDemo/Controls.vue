<template>
<div>
    <button @click="resetGame">Reset</button>
</div>
</template>

<script>
export default {
  computed: {

  },
  methods: {
    resetGame(e) {
    //  this.$store.commit('players/add', e.target.value)
    //  e.target.value = ''
      alert('test')
      p1PrivKey = '23e23e23ertgher2e2e23e2'
    }
    //...mapMutations({
    //  toggle: 'todos/toggle'
    //})

  }
}
</script>

<style>
</style>
