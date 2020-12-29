<template>
  <header><h1>{{name}}</h1></header>
  <header><h3>{{age}}</h3></header>
</template>

<script>
export default {
  name: "ActiveUser",
  props: {
    name: String,
    age: String
}
}
</script>

<style>


</style>