<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>Vue X</p>
      <p>{{ count }}</p>
      <p>{{ countLength }}</p>
      <button @click="increment">Add</button>
      <button @click="incrementAsync">Add Sync</button>
      <button @click="incrementN(10)">Add 10</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    count() {
      return this.$myStore.state.count;
    },
    countLength() {
      return this.$myStore.getters.countLength;
    },
  },
  methods: {
    increment() {
      this.$myStore.commit("increment");
    },
    incrementN(playload) {
      this.$myStore.commit("incrementN", playload);
    },
    incrementAsync() {
      this.$myStore.dispatch("incrementAsync");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
