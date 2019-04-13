<template>
  <button type="button" v-on="$listeners">
    <slot></slot>
    {{loading ? "disabled" : ""}}
  </button>
</template>

<script>
export default {
  props: { loading: Boolean }
};
</script>

<style>
</style>
