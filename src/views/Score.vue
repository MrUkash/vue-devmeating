<template>
  <div>
    <h1>Score</h1>

    <h2>{{input}}</h2>
    <BaseInput v-model="input" label="BaseInput "></BaseInput>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";

export default {
  components: { BaseInput },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
</style>
