<template>
  <div>
    <h1>Settings</h1>
    <h2>{{`isLoading: ${isLoading}`}}</h2>

    <BaseButton :loading="isLoading" @click="isLoading=!isLoading">Click me</BaseButton>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton";
export default {
  components: { BaseButton },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>

<style>
</style>
